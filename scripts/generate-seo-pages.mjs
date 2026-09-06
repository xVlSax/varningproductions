import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

import { bandProfileSlugs, getBandBySlug } from '../src/data/bands.js'
import {
  PAGE_METADATA,
  canonicalUrl,
  createBandMetadata,
  createTourMetadata,
  createPageSchema,
  DEFAULT_SOCIAL_IMAGE,
} from '../src/data/siteMetadata.js'
import { getTourBySlug, tourSlugs } from '../src/data/tourEvents.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(projectRoot, 'public')
const distDir = path.join(projectRoot, 'dist')
const flags = new Set(process.argv.slice(2))
const sitemapOnly = flags.has('--sitemap-only')
const distOnly = flags.has('--dist-only')

const staticPages = Object.entries(PAGE_METADATA).map(([routePath, metadata]) => ({
  path: routePath,
  ...metadata,
}))

const bandPages = bandProfileSlugs.map((slug) => {
  const band = getBandBySlug(slug)
  return {
    path: `/band-profile/${slug}`,
    ...createBandMetadata(band),
  }
})

const tourPages = tourSlugs.map((slug) => {
  const tour = getTourBySlug(slug)
  return {
    path: `/event-description/${slug}`,
    ...createTourMetadata(tour),
  }
})

const pages = [...staticPages, ...bandPages, ...tourPages]
const uniquePages = [...new Map(pages.map((page) => [canonicalUrl(page.path), page])).values()]

const escapeAttribute = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

const replaceMeta = (html, attribute, key, content) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`<meta\\b(?=[^>]*\\b${attribute}=["']${escapedKey}["'])[^>]*>`, 'i')
  return html.replace(
    pattern,
    `<meta ${attribute}="${escapeAttribute(key)}" content="${escapeAttribute(content)}" />`,
  )
}

const renderPage = (template, page) => {
  const canonical = canonicalUrl(page.path)
  let html = template.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeAttribute(page.title)}</title>`,
  )

  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'property', 'og:url', canonical)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
  html = replaceMeta(html, 'property', 'og:image', page.image || DEFAULT_SOCIAL_IMAGE)
  html = replaceMeta(html, 'name', 'twitter:image', page.image || DEFAULT_SOCIAL_IMAGE)
  html = replaceMeta(html, 'property', 'og:image:alt', page.imageAlt || page.title)
  html = html.replace(/<meta\b(?=[^>]*\bproperty=["']og:image:(?:width|height)["'])[^>]*>/gi, '')
  const schema = createPageSchema(page, page.path)
  html = html.replace(
    '</head>',
    `<script id="page-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>\n</head>`,
  )

  return html.replace(
    /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${escapeAttribute(canonical)}" />`,
  )
}

const createSitemap = () => {
  const urls = uniquePages
    .map((page) => `  <url>\n    <loc>${canonicalUrl(page.path)}</loc>\n  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const sitemap = createSitemap()

const pruneDeploymentAssets = async (directory, references) => {
  let removedFiles = 0
  let removedBytes = 0

  const walk = async (currentDirectory) => {
    const entries = await readdir(currentDirectory, { withFileTypes: true })

    for (const entry of entries) {
      const filePath = path.join(currentDirectory, entry.name)

      if (entry.isDirectory()) {
        await walk(filePath)
        continue
      }

      const extension = path.extname(entry.name).toLowerCase()
      const isRedundantOriginal = ['.jpg', '.jpeg', '.png', '.svg'].includes(extension)
      const webpPath = path.join(currentDirectory, `${path.basename(entry.name, extension)}.webp`)
      let shouldRemove = entry.name === '.DS_Store'

      const publicPath = '/' + path.relative(directory, filePath).split(path.sep).join('/')
      if (isRedundantOriginal && !shouldRemove && !references.includes(publicPath)) {
        try {
          await stat(webpPath)
          shouldRemove = true
        } catch {
          // Keep originals that do not have a modern-format replacement.
        }
      }

      if (!shouldRemove) continue

      removedBytes += (await stat(filePath)).size
      removedFiles += 1
      await rm(filePath)
    }
  }

  await walk(directory)

  const unusedSourceVideo = path.join(directory, 'videos', 'varningprod.mp4')
  try {
    removedBytes += (await stat(unusedSourceVideo)).size
    removedFiles += 1
    await rm(unusedSourceVideo)
  } catch {
    // The optimized 720p video is the only version required by the app.
  }

  return { removedFiles, removedBytes }
}

if (!distOnly) {
  await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap)
}

if (!sitemapOnly) {
  const templatePath = path.join(distDir, 'index.html')
  const template = await readFile(templatePath, 'utf8')
  const manifest = JSON.parse(await readFile(path.join(distDir, '.vite/manifest.json'), 'utf8'))
  const renderer = await createServer({
    configFile: path.join(projectRoot, 'vite.config.js'),
    mode: 'production',
    server: { middlewareMode: true, hmr: false, watch: null },
    appType: 'custom',
  })
  let references = template
  const collectReferences = async (directory) => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name)
      if (entry.isDirectory()) await collectReferences(filename)
      else if (/\.(js|css)$/.test(entry.name)) references += await readFile(filename, 'utf8')
    }
  }
  await collectReferences(path.join(distDir, 'assets'))

  const renderStaticPage = async (page, render) => {
    const result = await render(page.path)
    const styles = new Set()
    const visited = new Set()
    const collectStyles = (key) => {
      if (visited.has(key)) return
      visited.add(key)
      const entry = manifest[key]
      for (const css of entry?.css || []) styles.add(css)
      for (const dependency of entry?.imports || []) collectStyles(dependency)
    }
    for (const module of result.modules) collectStyles(module)
    let html = renderPage(template, page)
      .replace(
        '<div id="app"></div>',
        () => `<div id="app" data-prerendered="${escapeAttribute(page.path)}">${result.html}</div>`,
      )
      .replace(
        '<div id="navigation"></div>',
        () => `<div id="navigation">${result.navigation}</div>`,
      )
    html = html.replace(
      '</head>',
      () =>
        [...styles]
          .filter((css) => !html.includes(`href="/${css}"`))
          .map((css) => `<link rel="stylesheet" href="/${css}" />`)
          .join('\n') + '\n</head>',
    )
    references += html
    return html
  }

  try {
    const { render } = await renderer.ssrLoadModule('/src/entry-server.js')
    for (const page of uniquePages) {
      const relativePath = page.path === '/' ? '' : page.path.replace(/^\//, '')
      const outputDir = path.join(distDir, relativePath)
      await mkdir(outputDir, { recursive: true })
      await writeFile(path.join(outputDir, 'index.html'), await renderStaticPage(page, render))
    }
    const notFoundPage = replaceMeta(
      await renderStaticPage(
        {
          path: '/404',
          title: 'Page Not Found | Varning Productions',
          description: 'This page could not be found.',
        },
        render,
      ),
      'name',
      'robots',
      'noindex,follow',
    )
    await writeFile(path.join(distDir, '404.html'), notFoundPage)
  } finally {
    await renderer.close()
  }
  await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)

  const { removedFiles, removedBytes } = await pruneDeploymentAssets(distDir, references)
  console.log(
    `Removed ${removedFiles} redundant deployment assets (${(removedBytes / 1024 / 1024).toFixed(1)} MB).`,
  )
}

console.log(`Generated sitemap with ${uniquePages.length} canonical URLs.`)

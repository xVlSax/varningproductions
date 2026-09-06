import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
assert.equal(new Set(urls).size, urls.length, 'Sitemap contains duplicates')
for (const url of urls) {
  const pathname = new URL(url).pathname
  const html = readFileSync(path.join(dist, pathname, 'index.html'), 'utf8')
  assert.ok(html.includes('data-prerendered'), `Missing pre-rendered content: ${url}`)
  assert.ok(html.includes('<h1'), `Missing primary heading: ${url}`)
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `Wrong canonical: ${url}`)
  assert.ok(!html.includes('content="noindex'), `Indexable page marked noindex: ${url}`)
  const schema = JSON.parse(
    html.match(/<script id="page-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1],
  )
  assert.equal(schema.url, url)
  const css = [...html.matchAll(/href="(\/assets\/[^"]+\.css)"/g)]
    .map(([, asset]) => readFileSync(path.join(dist, asset), 'utf8'))
    .join('\n')
  for (const [scope] of html.matchAll(/data-v-[a-f0-9]+/g)) {
    assert.ok(css.includes(scope), `Missing scoped stylesheet for ${scope}: ${url}`)
  }
  for (const [, ref] of html.matchAll(/(?:src|srcset|href)="(\/[^"]+)"/g)) {
    const assetPath = decodeURIComponent(ref.split(/[?#]/)[0])
    assert.ok(
      existsSync(path.join(dist, assetPath)),
      `Missing local link or asset: ${assetPath} on ${url}`,
    )
  }
}
const notFound = readFileSync(path.join(dist, '404.html'), 'utf8')
assert.ok(notFound.includes('content="noindex,follow"'))
assert.ok(notFound.includes('Page not found'))
console.log(
  `Passed: ${urls.length} pre-rendered pages, headings, canonicals, schemas, local assets and 404 page.`,
)

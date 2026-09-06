import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import dialogFocus from './directives/dialogFocus'
import createSiteRouter from './router'
import './assets/main.css'
import './index.css'
import { initGA } from './plugins/analytics'
import {
  canonicalUrl,
  createBandMetadata,
  createTourMetadata,
  createPageSchema,
  DEFAULT_SOCIAL_IMAGE,
} from './data/siteMetadata'

const router = createSiteRouter()

initGA()

function setMeta(selector, attrName, attrValue) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/)
    if (match) el.setAttribute(match[1], match[2])
    document.head.appendChild(el)
  }
  el.setAttribute(attrName, attrValue)
}

async function resolveRouteMetadata(to) {
  if (to.name === 'Band Profile') {
    const { getBandBySlug } = await import('./data/bands')
    const band = getBandBySlug(to.params.slug)
    if (band) return createBandMetadata(band)
    return {
      title: 'Band Not Found | Varning Productions',
      description: 'This band profile could not be found.',
      robots: 'noindex,follow',
    }
  }

  if (to.name === 'Event Description') {
    const { getTourBySlug } = await import('./data/tourEvents')
    const tour = getTourBySlug(to.params.slug)
    if (tour) return createTourMetadata(tour)
    return {
      title: 'Tour Not Found | Varning Productions',
      description: 'This tour could not be found.',
      robots: 'noindex,follow',
    }
  }

  return { title: to.meta.title, description: to.meta.description, robots: to.meta.robots }
}

router.beforeResolve(async (to) => {
  to.meta.resolvedMetadata = await resolveRouteMetadata(to)
})

router.afterEach((to, from, failure) => {
  if (failure) return
  const meta = to.meta.resolvedMetadata
  setMeta('meta[name="robots"]', 'content', meta.robots || 'index,follow')
  const socialImage = meta.image || DEFAULT_SOCIAL_IMAGE
  setMeta('meta[property="og:image"]', 'content', socialImage)
  setMeta('meta[name="twitter:image"]', 'content', socialImage)
  setMeta('meta[property="og:image:alt"]', 'content', meta.imageAlt || meta.title)
  document
    .querySelectorAll('meta[property="og:image:width"], meta[property="og:image:height"]')
    .forEach((el) => el.remove())
  let schema = document.getElementById('page-schema')
  if (!schema) {
    schema = document.createElement('script')
    schema.id = 'page-schema'
    schema.type = 'application/ld+json'
    document.head.appendChild(schema)
  }
  schema.textContent = JSON.stringify(createPageSchema(meta, to.path))

  if (meta.title) {
    document.title = meta.title
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
  }

  if (meta.description) {
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
  }

  const canonical = canonicalUrl(to.path)
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', canonical)
  setMeta('meta[property="og:url"]', 'content', canonical)
})

const renderedPath = document.querySelector('#app')?.getAttribute('data-prerendered')
const shouldHydrate =
  renderedPath !== null && canonicalUrl(renderedPath) === canonicalUrl(window.location.pathname)
// Legacy hash links and a host's fallback page can resolve to a different route.
if (!shouldHydrate) document.getElementById('navigation').replaceChildren()
const app = (shouldHydrate ? createSSRApp : createApp)(App)
app.use(router)
app.directive('dialog-focus', dialogFocus)
router.isReady().then(() => app.mount('#app'))

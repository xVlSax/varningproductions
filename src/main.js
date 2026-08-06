import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './index.css'
import { initGA } from './plugins/analytics'
import { getBandBySlug } from './data/bands'
import { getTourBySlug } from './data/tourEvents'
import { canonicalUrl, createBandMetadata, createTourMetadata } from './data/siteMetadata'

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

function resolveRouteMetadata(to) {
  if (to.name === 'Band Profile') {
    const band = getBandBySlug(to.params.slug)
    if (band) return createBandMetadata(band)
  }

  if (to.name === 'Event Description') {
    const tour = getTourBySlug(to.params.slug)
    if (tour) return createTourMetadata(tour)
  }

  return to.meta || {}
}

router.afterEach((to) => {
  const meta = resolveRouteMetadata(to)

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

createApp(App).use(router).mount('#app')

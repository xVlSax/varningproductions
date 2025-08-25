import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './index.css'

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

router.afterEach((to) => {
  const meta = to.meta || {}

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

  if (meta.canonical) {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', meta.canonical)
    setMeta('meta[property="og:url"]', 'content', meta.canonical)
  }
})

createApp(App).use(router).mount('#app')

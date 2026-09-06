import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import dialogFocus from './directives/dialogFocus'
import createSiteRouter from './router'

export async function render(url) {
  const router = createSiteRouter()
  const app = createSSRApp(App)
  app.use(router)
  app.directive('dialog-focus', dialogFocus)
  await router.push(url)
  await router.isReady()
  const context = {}
  const html = await renderToString(app, context)
  return {
    html,
    navigation: context.teleports?.['#navigation'] || '',
    modules: [...(context.modules || [])],
  }
}

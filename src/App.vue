<template>
  <div class="min-h-screen flex flex-col bg-black text-white">
    <Navbar />
    <main id="main-content" class="flex-grow" tabindex="-1">
      <router-view />
    </main>
    <SiteFooter v-if="!excludeFooterRoutes.includes($route.path.replace(/\/$/, ''))" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/Footer.vue'

export default {
  components: { Navbar, SiteFooter },
  data() {
    return {
      excludeFooterRoutes: ['/contact'],
    }
  },
}
</script>

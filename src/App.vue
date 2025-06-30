<template>
  <div class="min-h-screen flex flex-col bg-black text-white">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer v-if="!excludeFooterRoutes.includes($route.path)" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer },
  data() {
    return {
      excludeFooterRoutes: ['/contact'],
    }
  },
}
</script>

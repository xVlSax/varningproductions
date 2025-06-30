<template>
  <nav
    id="navbar"
    class="fixed top-[-50px] left-0 right-0 w-full z-50 bg-[#222] text-white shadow-lg transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <router-link to="/" class="font-punk text-lg"> VARNING </router-link>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="item in navItems"
          :key="item.id"
          :to="item.path"
          class="uppercase font-punk tracking-wider hover:text-red-400 transition text-sm md:text-base"
        >
          {{ item.label }}
        </router-link>
      </div>

      <!-- Mobile Icon -->
      <button class="md:hidden" @click="toggleMenu" aria-label="Toggle menu">
        <i class="fa fa-bars text-xl text-white"></i>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 w-full bg-[#111] text-white flex flex-col items-center md:hidden"
    >
      <router-link
        v-for="item in navItems"
        :key="item.id"
        :to="item.path"
        class="block w-full text-center py-2 hover:bg-red-700"
        @click="closeMenu"
      >
        {{ item.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'festival', label: 'Festival', path: '/festival' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu on route change
watch(() => route.path, closeMenu)

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)

const handleScroll = () => {
  const navbar = document.getElementById('navbar')
  if (!navbar) return
  if (window.scrollY > 20) {
    navbar.style.top = '0'
  } else {
    navbar.style.top = '-50px'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#navbar {
  transition: top 0.3s;
}

nav a.nav-link {
  text-decoration: none;
  display: inline-block;
  color: white;
  position: relative;
  text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
}

nav a.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ef4444;
  transition: width 0.3s ease-out;
}

nav a.nav-link:hover::after {
  width: 100%;
}

nav a.router-link-active {
  color: #ef4444;
}
</style>

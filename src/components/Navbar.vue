<template>
  <nav
    :class="{ 'opacity-0': atHeroSection, 'opacity-100': !atHeroSection }"
    class="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6 flex justify-center items-center shadow-lg transition-opacity duration-500 backdrop-blur-sm border-b border-red-500"
  >
    <div class="flex space-x-6 md:space-x-10 max-w-6xl w-full justify-center">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="uppercase font-punk tracking-wider hover:text-red-400 transition text-sm md:text-base whitespace-nowrap"
        :class="{ 'text-red-400': activeSection === item.id }"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
const atHeroSection = ref(true)

const handleScroll = () => {
  // Check if we're at hero section (first screen)
  atHeroSection.value = window.scrollY < window.innerHeight * 0.7

  // Update active nav item
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      activeSection.value = section.id
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initialize on load
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'description', label: 'About' },
  { id: 'why', label: 'Why Punk?' },
  { id: 'scene', label: 'Scene' },
  { id: 'festival', label: 'Festival' },
  { id: 'shows', label: 'Shows' },
  { id: 'contact', label: 'Contact' },
]
</script>

<style scoped>
nav {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%);
}

a {
  text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  position: relative;
}

a:hover::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ef4444;
  animation: underlineGrow 0.3s ease-out;
}

@keyframes underlineGrow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>

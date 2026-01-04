<template>
  <nav id="navbar" class="nav-root">
    <!-- Mobile top bar -->
    <div class="bar-mobile">
      <router-link to="/" class="logo-v">VARNING PRODUCTIONS</router-link>
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <i class="fa fa-bars"></i>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <router-link
        v-for="item in navItems"
        :key="item.id"
        :to="item.path"
        class="mobile-link"
        @click="closeMenu"
      >
        {{ item.label }}
      </router-link>
    </div>

    <!-- Desktop horizontal bar -->
    <div class="bar-desktop">
      <div class="desktop-container">
        <router-link to="/" class="logo-v">VARNING PRODUCTIONS</router-link>
        <div class="desktop-links">
          <router-link
            v-for="item in navItems"
            :key="item.id"
            :to="item.path"
            class="nav-item"
            active-class="nav-item-active"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  // { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'festival', label: 'Festival', path: '/festival' },
  { id: 'tours', label: 'Tours', path: '/tours' },
  { id: 'events', label: 'Events', path: '/events' },
  { id: 'services', label: 'Services', path: '/services' },
  //{ id: 'artist', label: 'Artist', path: '/artist' },
  // { id: 'things', label: 'ThingsToDo', path: '/things' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

// Close mobile menu on route change
watch(() => route.path, closeMenu)
</script>

<style scoped>
.nav-root {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 50;
  color: #fff;
  pointer-events: none;
}

.bar-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  background: rgba(34, 34, 34, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
}

.logo-v {
  font-family: 'Staatliches', sans-serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
}

.hamburger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: transparent;
  border: 0;
  font-size: 1.25rem;
  cursor: pointer;
}

.mobile-menu {
  background: rgba(34, 34, 34, 0.95);
  backdrop-filter: blur(4px);
  pointer-events: auto;
}

.mobile-link {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
}
.mobile-link:hover {
  background: #b91c1c;
}

.bar-desktop {
  display: none;
}

@media (min-width: 768px) {
  .bar-mobile,
  .mobile-menu {
    display: none;
  }

  .bar-desktop {
    display: block;
    pointer-events: auto;
    background: rgba(34, 34, 34, 0.95);
  }

  .desktop-container {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0.75rem 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }

  .desktop-links {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }

  .nav-item {
    text-transform: uppercase;
    font-family: 'Staatliches', sans-serif;
    letter-spacing: 0.15em;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      transform 0.15s ease;
    background: transparent;
    border-bottom: 2px solid transparent;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-bottom-color: #9f9f9f;
  }

  .nav-item-active {
    color: #ef4444;
    border-bottom-color: #ef4444;
  }
}
</style>

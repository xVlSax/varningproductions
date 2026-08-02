<template>
  <teleport to="body">
    <nav id="navbar" class="nav-root">
      <!-- Mobile top bar -->
      <div class="bar-mobile">
        <router-link to="/" class="logo-v" aria-label="Varning Productions home">
          <svg class="navbar-wordmark" viewBox="0 0 1500 173" aria-hidden="true" focusable="false">
            <text class="navbar-wordmark-text" transform="matrix(1.185 0 0 1.185 19.394 131.813)">
              <tspan x="0" y="0">Varning Productions</tspan>
            </text>
          </svg>
        </router-link>
        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <!-- Mobile dropdown -->
      <div v-if="isMenuOpen" class="mobile-menu">
        <div v-for="item in navItems" :key="item.id" class="mobile-nav-group">
          <button
            v-if="item.children"
            type="button"
            class="mobile-link mobile-submenu-toggle"
            :aria-expanded="openMobileSubmenu === item.id"
            @click="toggleMobileSubmenu(item.id)"
          >
            <span>{{ item.label }}</span>
            <i
              class="fa fa-angle-down submenu-chevron"
              :class="{ 'submenu-chevron-open': openMobileSubmenu === item.id }"
              aria-hidden="true"
            ></i>
          </button>
          <router-link v-else :to="item.path" class="mobile-link" @click="closeMenu">
            {{ item.label }}
          </router-link>

          <div v-if="item.children && openMobileSubmenu === item.id" class="mobile-submenu">
            <router-link
              v-for="child in item.children"
              :key="child.id"
              :to="child.path"
              class="mobile-submenu-link"
              @click="closeMenu"
            >
              {{ child.label }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Desktop horizontal bar -->
      <div class="bar-desktop">
        <div class="desktop-container">
          <router-link to="/" class="logo-v" aria-label="Varning Productions home">
            <svg
              class="navbar-wordmark"
              viewBox="0 0 1500 173"
              aria-hidden="true"
              focusable="false"
            >
              <text class="navbar-wordmark-text" transform="matrix(1.185 0 0 1.185 19.394 131.813)">
                <tspan x="0" y="0">Varning Productions</tspan>
              </text>
            </svg>
          </router-link>
          <div class="desktop-links">
            <div
              v-for="item in navItems"
              :key="item.id"
              class="desktop-nav-group"
              :class="{
                'has-submenu': item.children,
                'submenu-suppressed': closedDesktopSubmenu === item.id,
              }"
              @mouseleave="resetDesktopSubmenu(item.id)"
            >
              <router-link
                :to="item.path"
                class="nav-item"
                :class="{ 'nav-item-active': isNavItemActive(item) }"
                @click="item.children && closeDesktopSubmenu(item.id, $event)"
              >
                <span>{{ item.label }}</span>
                <i
                  v-if="item.children"
                  class="fa fa-angle-down desktop-chevron"
                  aria-hidden="true"
                ></i>
              </router-link>

              <div v-if="item.children" class="desktop-submenu">
                <router-link
                  v-for="child in item.children"
                  :key="child.id"
                  :to="child.path"
                  class="desktop-submenu-link"
                  @click="closeDesktopSubmenu(item.id, $event)"
                >
                  {{ child.label }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const openMobileSubmenu = ref(null)
const closedDesktopSubmenu = ref(null)
const route = useRoute()

const navItems = [
  // { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  {
    id: 'festival',
    label: 'Festival',
    path: '/festival',
    children: [
      { id: 'festival-overview', label: 'Festival', path: '/festival' },
      { id: 'festival-2026', label: 'Festival 2026', path: '/current-festival' },
      {
        id: 'festival-lineup',
        label: 'Lineup',
        path: '/festival-lineup',
      },
      { id: 'festival-bands', label: 'Bands', path: '/bands' },
      { id: 'festival-things', label: 'Things To Do', path: '/things' },
    ],
  },
  { id: 'tours', label: 'Tours', path: '/tours' },
  { id: 'events', label: 'Events', path: '/events' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const toggleMobileSubmenu = (id) => {
  openMobileSubmenu.value = openMobileSubmenu.value === id ? null : id
}
const closeMenu = () => {
  isMenuOpen.value = false
  openMobileSubmenu.value = null
}
const closeDesktopSubmenu = (id, event) => {
  closedDesktopSubmenu.value = id
  event?.currentTarget?.blur()
}
const resetDesktopSubmenu = (id) => {
  if (closedDesktopSubmenu.value === id) {
    closedDesktopSubmenu.value = null
  }
}
const isNavItemActive = (item) => {
  if (route.path === item.path) return true
  return item.children?.some((child) => route.path === (child.path.path || child.path)) ?? false
}

// Close mobile menu on route change
watch(() => route.fullPath, closeMenu)
</script>

<style scoped>
.nav-root {
  --nav-accent: #b6f500;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: #fff;
  pointer-events: none;
  isolation: isolate;
}

.nav-root::before {
  content: '';
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(34, 34, 34, 0.95);
  pointer-events: none;
}

.bar-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background: rgba(34, 34, 34, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
}

.logo-v {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  text-decoration: none;
}

.navbar-wordmark {
  display: block;
  width: 10rem;
  height: auto;
}

.navbar-wordmark-text {
  fill: #000;
  stroke: #fff;
  stroke-width: 10px;
  stroke-linejoin: round;
  font-family: 'VarningFromMtlWide', sans-serif;
  font-size: 122px;
  font-weight: 800;
  paint-order: stroke fill;
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
  color: #101010;
  background: var(--nav-accent);
}

.mobile-submenu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  border: 0;
  background: transparent;
  font: inherit;
  cursor: pointer;
}

.submenu-chevron {
  transition: transform 0.2s ease;
}

.submenu-chevron-open {
  transform: rotate(180deg);
}

.mobile-submenu {
  padding: 0.25rem 0 0.5rem;
  background: rgba(10, 10, 10, 0.62);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-submenu-link {
  display: block;
  padding: 0.65rem 1rem;
  color: #d7d7d7;
  font-family: 'Staatliches', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.mobile-submenu-link:hover,
.mobile-submenu-link.router-link-active {
  color: var(--nav-accent);
  background: rgba(255, 255, 255, 0.05);
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

  .navbar-wordmark {
    width: 10.75rem;
  }

  .desktop-links {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }

  .desktop-nav-group {
    position: relative;
  }

  .desktop-nav-group.has-submenu::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    height: 0.65rem;
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
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-bottom-color: #9f9f9f;
  }

  .nav-item-active {
    color: var(--nav-accent);
    border-bottom-color: var(--nav-accent);
  }

  .desktop-chevron {
    font-size: 0.72rem;
    transition: transform 0.2s ease;
  }

  .desktop-submenu {
    position: absolute;
    top: calc(100% + 0.55rem);
    left: 50%;
    min-width: 10.5rem;
    padding: 0.45rem;
    background: rgba(24, 24, 24, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 2px solid var(--nav-accent);
    border-radius: 0 0 0.35rem 0.35rem;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -0.35rem);
    transition:
      opacity 0.18s ease,
      transform 0.18s ease,
      visibility 0.18s ease;
  }

  .desktop-submenu::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 100%;
    left: 0;
    height: 0.65rem;
  }

  .desktop-nav-group:hover .desktop-submenu,
  .desktop-nav-group:focus-within .desktop-submenu {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  .desktop-nav-group.submenu-suppressed .desktop-submenu {
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -0.35rem);
    pointer-events: none;
  }

  .desktop-nav-group:hover .desktop-chevron,
  .desktop-nav-group:focus-within .desktop-chevron {
    transform: rotate(180deg);
  }

  .desktop-submenu-link {
    display: block;
    padding: 0.6rem 0.75rem;
    color: #dedede;
    font-family: 'Staatliches', sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .desktop-submenu-link:hover,
  .desktop-submenu-link.router-link-active {
    color: var(--nav-accent);
    background: rgba(255, 255, 255, 0.06);
  }
}
</style>

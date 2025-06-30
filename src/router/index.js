import { createRouter, createWebHistory } from 'vue-router'

import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import FestivalSection from '@/components/FestivalSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeSection },
  { path: '/about', name: 'About', component: AboutSection },
  { path: '/festival', name: 'Festival', component: FestivalSection },
  { path: '/contact', name: 'Contact', component: ContactSection },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

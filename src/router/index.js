import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const HomeSection = () => import('@/components/HomeSection.vue')
const AboutSection = () => import('@/components/AboutSection.vue')
const FestivalSection = () => import('@/components/FestivalSection.vue')
const CurrentFestivalSection = () => import('@/components/CurrentFestivalSection.vue')
const FestivalLineupSection = () => import('@/components/FestivalLineupSection.vue')
const PastFestivalSection = () => import('@/components/PastFestivalSection.vue')
const ToursSection = () => import('@/components/ToursSection.vue')
const PastToursSection = () => import('@/components/PastToursSection.vue')
const EventSection = () => import('@/components/EventSection.vue')
const EventDescription = () => import('@/components/EventDescription.vue')
const BandProfile = () => import('@/components/BandProfile.vue')
const PastEventsSection = () => import('@/components/PastEventsSection.vue')
const ServicesSection = () => import('@/components/ServicesSection.vue')
const ArtistSection = () => import('@/components/ArtistSection.vue')
const ContactSection = () => import('@/components/ContactSection.vue')
const ThingsToDo = () => import('@/components/ThingsToDo.vue')
const TicketsPage = () => import('@/components/TicketsPage.vue')
import { PAGE_METADATA } from '@/data/siteMetadata'

const metadataFor = (path) => PAGE_METADATA[path]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeSection,
    meta: metadataFor('/'),
  },
  {
    path: '/about',
    name: 'About',
    component: AboutSection,
    meta: metadataFor('/about'),
  },
  {
    path: '/festival',
    name: 'Festival',
    component: FestivalSection,
    meta: metadataFor('/festival'),
  },
  {
    path: '/current-festival',
    name: 'Current Festival',
    component: CurrentFestivalSection,
    meta: metadataFor('/current-festival'),
  },
  {
    path: '/festival-lineup',
    name: 'Festival Lineup',
    component: FestivalLineupSection,
    meta: metadataFor('/festival-lineup'),
  },
  {
    path: '/past-festival',
    name: 'Past Festival',
    component: PastFestivalSection,
    meta: metadataFor('/past-festival'),
  },
  {
    path: '/tours',
    name: 'Tours',
    component: ToursSection,
    meta: metadataFor('/tours'),
  },
  {
    path: '/events',
    name: 'Events',
    component: EventSection,
    meta: metadataFor('/events'),
  },
  {
    path: '/event-description/:slug',
    name: 'Event Description',
    component: EventDescription,
    meta: {
      title: 'Tour Details – Varning Productions',
      description: 'Tour routing, dates, flyer details and booking notes from Varning Productions.',
    },
  },
  {
    path: '/band-profile/:slug',
    name: 'Band Profile',
    component: BandProfile,
    meta: {
      title: 'Band Profile – Varning Productions',
      description: 'Band profile, links, booking details, and bio.',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesSection,
    meta: metadataFor('/services'),
  },
  {
    path: '/bands',
    name: 'Bands',
    component: ArtistSection,
    meta: metadataFor('/bands'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactSection,
    meta: metadataFor('/contact'),
  },
  {
    path: '/past-tours',
    name: 'Past Tours',
    component: PastToursSection,
    meta: metadataFor('/past-tours'),
  },
  {
    path: '/past-events',
    name: 'Past Events',
    component: PastEventsSection,
    meta: metadataFor('/past-events'),
  },
  {
    path: '/things',
    name: 'Things To Do',
    component: ThingsToDo,
    meta: metadataFor('/things'),
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: TicketsPage,
    meta: metadataFor('/tickets'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('@/components/NotFoundPage.vue'),
    meta: {
      title: 'Page Not Found | Varning Productions',
      description: 'This page could not be found.',
      robots: 'noindex,follow',
    },
  },
]

if (typeof window !== 'undefined' && window.location.hash.startsWith('#/')) {
  const legacyPath = window.location.hash.slice(1)
  window.history.replaceState(null, '', legacyPath)
}

export const createSiteRouter = () =>
  createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
      if (to.hash) {
        return { el: to.hash, top: 72, behavior: 'smooth' }
      }

      return { top: 0 }
    },
  })

export default createSiteRouter

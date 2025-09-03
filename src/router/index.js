import { createRouter, createWebHashHistory } from 'vue-router'

import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import EventSection from '@/components/EventSection.vue'
import FestivalSection from '@/components/FestivalSection.vue'
import ThingsToDo from '@/components/ThingsToDo.vue'
import ContactSection from '@/components/ContactSection.vue'
import PastEventsSection from '@/components/PastEventsSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeSection,
    meta: {
      title: 'Varning Productions – DIY Punk Shows, Bookings, Tour & Festival',
      description:
        'Varning Productions is a DIY punk collective booking shows, tours and A Varning From Montreal Festival since 2007.',
      canonical: 'https://www.varningproductions.com/',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutSection,
    meta: {
      title: 'About – Varning Productions',
      description:
        'Learn about Varning Productions: our history, ethos, and commitment to the DIY punk community.',
      canonical: 'https://www.varningproductions.com/#/about',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesSection,
    meta: {
      title: 'Services – Varning Productions',
      description:
        'Booking shows, tours, merch & promo with a DIY ethic. Varning Productions helps bands reach audiences worldwide.',
      canonical: 'https://www.varningproductions.com/#/services',
    },
  },
  {
    path: '/events',
    name: 'Events',
    component: EventSection,
    meta: {
      title: 'Events – Varning Productions',
      description:
        'Upcoming punk shows, flyers and festival events organized by Varning Productions.',
      canonical: 'https://www.varningproductions.com/#/events',
    },
  },
  {
    path: '/festival',
    name: 'Festival',
    component: FestivalSection,
    meta: {
      title: 'A Varning From Montreal Festival – Varning Productions',
      description: 'Official lineup, flyers, and ticket info for A Varning From Montreal Festival.',
      canonical: 'https://www.varningproductions.com/#/festival',
    },
  },
  {
    path: '/things',
    name: 'Things To Do',
    component: ThingsToDo,
    meta: {
      title: 'Things To Do in Montreal – Varning Productions',
      description:
        'Bars, restaurants and record stores to check out while attending Varning Festival in Montreal.',
      canonical: 'https://www.varningproductions.com/#/things',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactSection,
    meta: {
      title: 'Contact – Varning Productions',
      description:
        'Get in touch with Varning Productions for bookings, collaborations, and festival info.',
      canonical: 'https://www.varningproductions.com/#/contact',
    },
  },
  {
    path: '/past-events',
    name: 'Past Events',
    component: PastEventsSection,
    meta: {
      title: 'PastEvents – Varning Productions',
      description: '',
      canonical: 'https://www.varningproductions.com/#/past-events',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

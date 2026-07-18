import { createRouter, createWebHashHistory } from 'vue-router'

import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import FestivalSection from '@/components/FestivalSection.vue'
import CurrentFestivalSection from '@/components/CurrentFestivalSection.vue'
import FestivalLineupSection from '@/components/FestivalLineupSection.vue'
import PastFestivalSection from '@/components/PastFestivalSection.vue'
import ToursSection from '@/components/ToursSection.vue'
import PastToursSection from '@/components/PastToursSection.vue'
import EventSection from '@/components/EventSection.vue'
import EventDescription from '@/components/EventDescription.vue'
import BandProfile from '@/components/BandProfile.vue'
import PastEventsSection from '@/components/PastEventsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ArtistSection from '@/components/ArtistSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import ThingsToDo from '@/components/ThingsToDo.vue'

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
    path: '/current-festival',
    name: 'Current Festival',
    component: CurrentFestivalSection,
    meta: {
      title: 'A Varning From Montreal Festival – Varning Productions',
      description: 'Official lineup, flyers, and ticket info for A Varning From Montreal Festival.',
      canonical: 'https://www.varningproductions.com/#/festival',
    },
  },
  {
    path: '/festival-lineup',
    name: 'Festival Lineup',
    component: FestivalLineupSection,
    meta: {
      title: 'Festival 2026 Lineup – Varning Productions',
      description: 'The 2026 A Varning From Montreal Festival lineup and band information.',
      canonical: 'https://www.varningproductions.com/#/festival-lineup',
    },
  },
  {
    path: '/past-festival',
    name: 'Past Festival',
    component: PastFestivalSection,
    meta: {
      title: 'A Varning From Montreal Festival – Varning Productions',
      description: 'Official lineup, flyers, and ticket info for A Varning From Montreal Festival.',
      canonical: 'https://www.varningproductions.com/#/festival',
    },
  },
  {
    path: '/tours',
    name: 'Tours',
    component: ToursSection,
    meta: {
      title: 'Tours – Varning Productions',
      description:
        'Booking shows, tours, merch & promo with a DIY ethic. Varning Productions helps bands reach audiences worldwide.',
      canonical: 'https://www.varningproductions.com/#/tours',
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
    path: '/event-description/:slug',
    name: 'Event Description',
    component: EventDescription,
    meta: {
      title: 'Event Description – Varning Productions',
      description: 'Tour routing, flyer details and booking notes from Varning Productions.',
      canonical: 'https://www.varningproductions.com/#/event-description',
    },
  },
  {
    path: '/band-profile/:slug',
    name: 'Band Profile',
    component: BandProfile,
    meta: {
      title: 'Band Profile – Varning Productions',
      description: 'Band profile, links, booking details, and bio.',
      canonical: 'https://www.varningproductions.com/#/band-profile',
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
    path: '/bands',
    name: 'Bands',
    component: ArtistSection,
    meta: {
      title: 'Bands – Varning Productions',
      description:
        'Get in touch with Varning Productions for bookings, collaborations, and festival info.',
      canonical: 'https://www.varningproductions.com/#/bands',
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
    path: '/past-tours',
    name: 'Past Tours',
    component: PastToursSection,
    meta: {
      title: 'PastTours – Varning Productions',
      description: '',
      canonical: 'https://www.varningproductions.com/#/past-events',
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 72, behavior: 'smooth' }
    }

    return { top: 0 }
  },
})

export default router

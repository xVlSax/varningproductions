export const SITE_URL = 'https://varningproductions.com'

export const PAGE_METADATA = {
  '/': {
    title: 'Varning Productions – DIY Punk Shows, Tours & Festival',
    description:
      'Varning Productions books DIY punk shows and tours and presents A Varning From Montreal Festival.',
  },
  '/about': {
    title: 'About Varning Productions – DIY Punk Since 2007',
    description:
      'Read the history and ethos of Varning Productions and its commitment to independent punk culture and community.',
  },
  '/festival': {
    title: 'A Varning From Montreal Festival – Varning Productions',
    description:
      'Explore A Varning From Montreal Festival, including the current edition and flyers from previous years.',
  },
  '/current-festival': {
    title: 'A Varning From Montreal Festival 2026',
    description:
      'Festival dates, tickets, poster and essential information for A Varning From Montreal Festival 2026.',
  },
  '/festival-lineup': {
    title: 'A Varning From Montreal Festival 2026 Lineup',
    description:
      'View the complete 2026 festival lineup, daily schedule, set times, venues and ticket information.',
  },
  '/past-festival': {
    title: 'Past A Varning From Montreal Festivals',
    description:
      'Browse posters and flyers from previous editions of A Varning From Montreal Festival since 2007.',
  },
  '/tours': {
    title: 'Upcoming Punk Tours – Varning Productions',
    description:
      'See upcoming punk tours booked by Varning Productions, including routing, dates and tour flyers.',
  },
  '/events': {
    title: 'Upcoming Punk Events – Varning Productions',
    description:
      'Upcoming punk shows, event flyers, tickets and venue information from Varning Productions.',
  },
  '/services': {
    title: 'DIY Booking & Tour Services – Varning Productions',
    description:
      'Tour booking, show production, promotion and support for independent punk bands and organizers.',
  },
  '/bands': {
    title: 'Festival & Touring Bands – Varning Productions',
    description:
      'Discover bands appearing at A Varning From Montreal Festival and artists working with Varning Productions.',
  },
  '/contact': {
    title: 'Contact Varning Productions',
    description:
      'Contact Varning Productions for bookings, tours, collaborations and festival information.',
  },
  '/past-tours': {
    title: 'Past Punk Tours – Varning Productions',
    description: 'Browse flyers from previous punk tours booked by Varning Productions.',
  },
  '/past-events': {
    title: 'Past Punk Events – Varning Productions',
    description:
      'Browse flyers from previous punk shows and events organized by Varning Productions.',
  },
  '/things': {
    title: 'Things To Do in Montreal – Varning Productions',
    description:
      'A punk focused Montreal guide to bars, food, record stores and attractions near Varning Festival.',
  },
}

const normalizePath = (path = '/') => {
  const cleanPath = path.split('?')[0].split('#')[0].replace(/\/+$/, '')
  return cleanPath || '/'
}

export const canonicalUrl = (path = '/') => {
  const normalizedPath = normalizePath(path)
  return normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}/`
}

const truncateDescription = (value, limit = 160) => {
  const normalized = String(value || '')
    .replace(/\s+/g, ' ')
    .trim()

  if (normalized.length <= limit) return normalized
  return `${normalized.slice(0, limit - 1).replace(/\s+\S*$/, '')}…`
}

export const createBandMetadata = (band) => ({
  title: `${band.name} – Band Profile | Varning Productions`,
  description: truncateDescription(
    `${band.name}: ${Array.isArray(band.bio) ? band.bio[0] : band.bio || 'band profile, music and links.'}`,
  ),
})

export const createTourMetadata = (tour) => ({
  title: `${tour.title} Tour – Varning Productions`,
  description: truncateDescription(
    `${tour.title} ${tour.subtitle || 'tour dates and routing'}. ${tour.intro || ''}`,
  ),
})

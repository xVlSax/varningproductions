const TOUR_DETAILS = {
  'voltage-tour': {
    slug: 'voltage-tour',
    title: 'VOLTAGE',
    subtitle: 'EUROPEAN INFERNO TOUR',
    date: 'NOVEMBER 2026',
    alt: 'Voltage Tour flyer',
    image: '/images/events/upcoming/tours/voltage/voltage-tour-poster.webp',
    intro:
      'In collaboration with Dogma Destroyer records, Varning Productions is stoked to have helped organize this tour across central Europe.',
    paragraphs: ['', ''],
    routing: [
      {
        date: '04.11.2026',
        city: 'Leipzig, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-uppsala.webp',
      },
      {
        date: '05.11.2026',
        city: 'Hamburg, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-gbg.webp',
      },
      {
        date: '06.11.2026',
        city: 'Bremen, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-copenhagen.webp',
      },
      {
        date: '07.11.2026',
        city: 'Hannover, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-bremen.webp',
      },
      {
        date: '08.11.2026',
        city: 'Dresden, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Sekowa, PL',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Krakow, PL',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Vienna, AT',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Brno, CZ',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Bratislava, SK',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Budapest, HU',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Belgrade, SRB',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Zagreb, HR',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Rijeka, HR',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Ljubljana, SLO',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Linz, AT',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Berlin, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '08.11.2026',
        city: 'Berlin, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
    ],
    footnoteParts: [
      { type: 'text', text: 'Check more about ' },
      { type: 'band', label: 'Voltage', slug: 'voltage' },
      { type: 'text', text: '.' },
    ],
  },
}

const toCard = (slug) => {
  const tour = TOUR_DETAILS[slug]

  if (!tour) {
    return null
  }

  return {
    slug: tour.slug,
    src: tour.image,
    alt: tour.alt,
    title: tour.title,
    subtitle: tour.subtitle,
    date: tour.date,
  }
}

const TOUR_HERO_SLUGS = ['languid-tour']
const UPCOMING_TOUR_SLUGS = ['languid-tour', 'voltage-tour']

export const TOUR_HEROES = TOUR_HERO_SLUGS.map(toCard).filter(Boolean)
export const UPCOMING_TOURS = UPCOMING_TOUR_SLUGS.map(toCard).filter(Boolean)
export const tourSlugs = Object.keys(TOUR_DETAILS).sort()

export const getTourBySlug = (slug) => TOUR_DETAILS[slug]

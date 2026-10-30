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
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-bremen.webp',
      },
      {
        date: '07.11.2026',
        city: 'Hannover, DE',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-bremen.webp',
      },
      {
        date: '08.11.2026',
        city: 'Dresden, DE',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-dresden.webp',
      },
      {
        date: '10.11.2026',
        city: 'Sekowa, PL',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '11.11.2026',
        city: 'Krakow, PL',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-krakow.webp',
      },
      {
        date: '12.11.2026',
        city: 'Vienna, AT',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-vienna.webp',
      },
      {
        date: '13.11.2026',
        city: 'Brno, CZ',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '14.11.2026',
        city: 'Bratislava, SK',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '15.11.2026',
        city: 'Budapest, HU',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '16.11.2026',
        city: 'Belgrade, SRB',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '17.11.2026',
        city: 'Zagreb, HR',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-zagreb.webp',
      },
      {
        date: '18.11.2026',
        city: 'Rijeka, HR',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '19.11.2026',
        city: 'Ljubljana, SLO',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-ljublana.webp',
      },
      {
        date: '20.11.2026',
        city: 'Linz, AT',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-berlin.webp',
      },
      {
        date: '21.11.2026',
        city: 'Berlin, DE',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-berlin1.webp',
      },
      {
        date: '22.11.2026',
        city: 'Berlin, DE',
        flyer: '/images/events/upcoming/tours/voltage/events/voltage-berlin2.webp',
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

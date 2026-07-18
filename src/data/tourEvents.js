const TOUR_DETAILS = {
  'languid-tour': {
    slug: 'languid-tour',
    title: 'LANGUID',
    subtitle: 'THE ROAD TO HELL STARTS WITH BEER - SCANDINAVIA/GERMANY TOUR',
    date: 'OCTOBER 2026',
    alt: 'Languid Tour flyer',
    image: '/images/events/upcoming/tours/languid/languid-tour-poster.jpg',
    intro:
      'Varning Productions is super stoked to announce its next tour with D-beat/hardcore punk band from Edmonton, Canada LANGUID!',
    paragraphs: [
      'Do not miss them in your city they will blow your brains out!!',
      'It’s gonna be another fucking rager so share it, invite your friends and see you there!!',
    ],
    routing: [
      {
        date: '15.10.2026',
        city: 'Uppsala, Sweden',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-madrid.jpg',
      },
      {
        date: '16.10.2026',
        city: 'Stockholm, Sweden',
        flyer: '/images/events/upcoming/tours/languid/events/languid-sthml.jpg',
        links: [
          {
            label: 'Event Ticket',
            route: {
              path: '/events',
              query: { event: 'd-beat-massacre-over-stockholm' },
            },
          },
        ],
      },
      {
        date: '17.10.2026',
        city: 'Göteborg, Sweden',
        flyer: '/images/events/upcoming/tours/languid/events/languid-gbg.jpg',
      },
      {
        date: '18.10.2026',
        city: 'Copenhagen, Denmark',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-denia.jpg',
      },
      {
        date: '19.10.2026',
        city: 'Bremmen, Germany',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-denia.jpg',
      },
      {
        date: '20.10.2026',
        city: 'Berlin, Germany',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-madrid.jpg',
      },
    ],
    footnoteParts: [
      { type: 'text', text: 'Check more about ' },
      { type: 'band', label: 'Languid', slug: 'languid' },
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

const TOUR_HERO_SLUGS = ['dhk-tour']
const UPCOMING_TOUR_SLUGS = ['languid-tour']

export const TOUR_HEROES = TOUR_HERO_SLUGS.map(toCard).filter(Boolean)
export const UPCOMING_TOURS = UPCOMING_TOUR_SLUGS.map(toCard).filter(Boolean)

export const getTourBySlug = (slug) => TOUR_DETAILS[slug]

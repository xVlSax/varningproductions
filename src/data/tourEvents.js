const TOUR_DETAILS = {
  'plektani-tour': {
    slug: 'plektani-tour',
    title: 'PLEKTANI',
    subtitle: 'CANADA / US EAST COAST TOUR',
    date: 'SEPTEMBER 2026',
    alt: 'Plektani Tour flyer',
    image: '/images/events/upcoming/tours/plektani/plektani.jpg',
    intro:
      'Varning Productions is super stoked to welcome Plektani from Athens, Greece to A Varning from Montreal Festival this fall! We’re also really happy to be part of their tour after the festival, helping them hit the US East Coast.',
    paragraphs: [
      'If they’re coming through your city, don’t miss them, they’re gonna blow your fucking mind!',
    ],
    routing: [
      {
        date: '17-20.09.2026',
        city: 'Montreal, Canada (A Varning from Montreal Festival)',
        flyer: '/images/festival/current/varning-fest-friday.jpg',
      },
      {
        date: '22.09.2026',
        city: 'Boston, MA',
        flyer: '/images/events/upcoming/tours/plektani/events/plektani-boston.jpg',
      },
      {
        date: '23.09.2026',
        city: 'Philadelphia, PA',
        //flyer: '/images/events/upcoming/tours/languid/events/languid-gbg.jpg',
      },
      {
        date: '24.09.2026',
        city: 'Pitsburg, PA',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-denia.jpg',
      },
      {
        date: '25.09.2026',
        city: 'Richmond, VA',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-denia.jpg',
      },
      {
        date: '26.09.2026',
        city: 'New York, NY',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-madrid.jpg',
      },
    ],
    footnoteParts: [
      { type: 'text', text: 'Check more about ' },
      { type: 'band', label: 'Plektani', slug: 'plektani' },
      { type: 'text', text: '.' },
    ],
  },
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
  'dominacion-tour': {
    slug: 'dominacion-tour',
    title: 'Dominacion & Lumpen',
    subtitle: 'CANADA INVASION TOUR',
    date: 'SEPTEMBER 2026',
    alt: 'Dominacion/Lumpen Tour flyer',
    image: '/images/events/upcoming/tours/dominacion/dominacion-lumpen-tour-poster.jpg',
    intro:
      'Dominación & Lumpen are from Barcelona, Spain and are both playing at A Varning from Montreal Festival this fall.',
    paragraphs: [
      'Varning Productions is organizing a mini tour for them after the festival that will take place in Quebec and Ontario. Here´s the dates and venues they will play at',
      'Thank you to all promoters helping out on this one!! Support your DIY Punk international scene / bands!',
    ],
    routing: [
      {
        date: '17-19.09.2026',
        city: 'Montreal (A Varning from Montreal Festival)',
        flyer: '/images/festival/current/varning-fest-friday.jpg',
      },
      {
        date: '17-19.09.2026',
        city: 'Montreal (A Varning from Montreal Festival)',
        flyer: '/images/festival/current/varning-fest-matine-friday.jpg',
      },
      {
        date: '22.09.2026',
        city: 'Quebec city, QC',
        flyer: '/images/events/upcoming/tours/dominacion/events/dominacion-lumpen-quebec-show.jpg',
      },
      {
        date: '23.09.2026',
        city: 'Sherbrooke, QC',
        // flyer: '/images/events/upcoming/tours/languid/events/languid-gbg.jpg',
      },
      {
        date: '24.09.2026',
        city: 'Ottawa, ON',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-denia.jpg',
      },
      {
        date: '25.09.2026',
        city: 'Toronto, ON',
        // flyer: '/images/events/upcoming/tours/dhk/events/dhk-denia.jpg',
      },
      {
        date: '26.09.2026',
        city: 'Montreal',
        flyer:
          '/images/events/upcoming/tours/dominacion/events/dominacion-lumpen-montreal-show.jpg',
      },
    ],
    footnoteParts: [
      { type: 'text', text: 'Check more about ' },
      { type: 'band', label: 'Dominacion ', slug: 'dominacion' },
      { type: 'text', text: ' Check more about ' },
      { type: 'band', label: 'Lumpen', slug: 'lumpen' },
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
const UPCOMING_TOUR_SLUGS = ['plektani-tour', 'dominacion-tour', 'languid-tour']

export const TOUR_HEROES = TOUR_HERO_SLUGS.map(toCard).filter(Boolean)
export const UPCOMING_TOURS = UPCOMING_TOUR_SLUGS.map(toCard).filter(Boolean)
export const tourSlugs = Object.keys(TOUR_DETAILS).sort()

export const getTourBySlug = (slug) => TOUR_DETAILS[slug]

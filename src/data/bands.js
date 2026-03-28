const BAND_PROFILES = {
  dhk: {
    slug: 'dhk',
    name: 'DHK',
    heroImage: '/images/artists/dhk/dhk-profile.jpeg',
    heroAlt: 'DHK tour artwork',
    meta: ['FEROCIOUS D-BEAT HARDCORE PUNK', 'LIMA-PERU'],
    socials: [
      { label: 'Facebook', icon: 'fa fa-facebook', href: '' },
      { label: 'Instagram', icon: 'fa fa-instagram', href: '' },
      { label: 'Spotify', icon: 'fa fa-spotify', href: '' },
      {
        label: 'Bandcamp',
        icon: 'fa fa-bandcamp',
        href: 'https://dhk-hcpunk.bandcamp.com/album/haz-sentir-tu-odio',
      },
    ],
    // details: [
    //   { label: 'Classification', value: 'TOURING BAND' },
    //   { label: 'Territory', value: 'EUROPE 2026' },
    //   { label: 'Booking', value: 'Varning Productions' },
    // ],
    bio: [
      'DHK is a combative hardcore punk band born in March 2008, originally from the city of Lima, Peru.',
      'This punk band is not only influenced by all the Discharge noise or Scandinavian hardcore, but also by the entire underground Latin American countercultural movement from the 80’s.',
      'With political lyrics and songs, they have had the chance to tour and experience different punk scenes around the world. With several independent releases under their belt, today they are more alive than ever!',
    ],
  },
}

export const getBandBySlug = (slug) => BAND_PROFILES[slug]

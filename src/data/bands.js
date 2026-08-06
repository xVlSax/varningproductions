import { festivalLineupShows } from './festivalLineup.js'

const FESTIVAL_ASSET_ROOT = '/images/bands/festival/bandname'

const SOCIAL_ICONS = {
  bandcamp: 'fa fa-bandcamp',
  facebook: 'fa fa-facebook',
  instagram: 'fa fa-instagram',
  spotify: 'fa fa-spotify',
  website: 'fa fa-link',
  youtube: 'fa fa-youtube',
  youtubeMusic: 'fa fa-youtube',
  youtubeVideo: 'fa fa-youtube',
}

const SOCIAL_LABELS = {
  youtube: 'YouTube',
  youtubeMusic: 'YouTube Music',
  youtubeVideo: 'YouTube Video',
}

const createSocials = (links = {}) =>
  Object.entries(links).map(([platform, href]) => ({
    label: SOCIAL_LABELS[platform] || platform.charAt(0).toUpperCase() + platform.slice(1),
    icon: SOCIAL_ICONS[platform],
    href,
  }))

const createFestivalProfile = ({
  slug,
  name,
  logo,
  hero,
  heroObjectPosition = 'center 30%',
  meta,
  links,
  bio,
}) => ({
  slug,
  name,
  logoImage: logo ? `${FESTIVAL_ASSET_ROOT}/${logo}` : '',
  logoAlt: `${name} logo`,
  heroImage: hero ? `${FESTIVAL_ASSET_ROOT}/${hero}` : '',
  heroAlt: `${name} band profile`,
  heroObjectPosition,
  meta,
  socials: createSocials(links),
  details: [],
  bio: [bio],
})

const BAND_PROFILES = {
  //----Varning Festival Bands----
  abism: createFestivalProfile({
    slug: 'abism',
    name: 'Abism',
    logo: 'abism-logo.webp',
    hero: 'abism.jpg',
    meta: ['HARDCORE PUNK', 'New York-USA'],
    links: {
      bandcamp: 'https://toxicstaterecords.bandcamp.com/album/7-2025',
    },
    bio: 'Abism is a raw, driving hardcore-punk band from New York City, featuring scene veterans from groups like Crazy Spirit and Dawn of Humans. Known for their mid-paced d-beat grooves and hypnotic Spanish-language vocals, they blend catchy, dissonant riffs with a heavy, pulverizing rhythm section to tackle themes of social injustice.',
  }),
  aneantix: createFestivalProfile({
    slug: 'aneantix',
    name: 'Aneantix',
    logo: 'aneantix-logo.webp',
    hero: 'aneantix.webp',
    meta: ['D-BEAT / CRUST PUNK / DEATH METAL', 'Quebec City-Canada'],
    links: {
      facebook: 'https://www.facebook.com/profile.php?id=61559546264517',
      instagram: 'https://www.instagram.com/aneantix.band/',
      bandcamp: 'https://aneantix.bandcamp.com/album/d-mo',
    },
    bio: 'Aneantix is a fierce d-beat/crust punk band with hints of old-school death metal based in Quebec City, Canada. They are known for their raw, aggressive, and relentless live performances.',
  }),
  armistix: createFestivalProfile({
    slug: 'armistix',
    name: 'Armistix',
    logo: 'armistix-logo.webp',
    hero: 'armistix.webp',
    meta: ['RAW PUNK / D-BEAT', 'Montreal-Canada'],
    links: {
      instagram: 'https://www.instagram.com/armistixpunk/',
      youtube: 'https://youtu.be/9uvCyRRctGM?si=goCSzKuGoUVFJb_8',
    },
    bio: 'Armistix is an active raw punk and D-beat band based in Montreal, Quebec. Known for their energetic female-fronted performances, they are a prominent staple in the local DIY punk scene.',
  }),
  'bastard-idol': createFestivalProfile({
    slug: 'bastard-idol',
    name: 'Bastard Idol',
    logo: 'bastard-logo.webp',
    meta: ['D-BEAT / HARDCORE PUNK', 'Montreal / Toronto-Canada'],
    links: {
      bandcamp: 'https://brokenskull.bandcamp.com/album/demo-2025',
    },
    bio: 'Bastard Idol is a Canadian D-beat and hardcore punk band based out of the Montreal and Toronto areas. The group features musicians from other established acts like Influx and Deadbolt. They deliver a raw, fast, and gritty sound characteristic of the underground D-beat scene.',
  }),
  'black-dog': createFestivalProfile({
    slug: 'black-dog',
    name: 'Black Dog',
    meta: ['TBC'],
    bio: 'Band profile information coming soon.',
  }),
  boot: createFestivalProfile({
    slug: 'boot',
    name: 'Boot',
    logo: 'boot-logo.webp',
    hero: 'boot.jpg',
    meta: ['STREET PUNK / OI! / UK82', 'Ottawa-Canada'],
    links: {
      bandcamp: 'https://bootonourthroat.bandcamp.com/album/demo',
    },
    bio: 'Boot, sometimes stylized as B.O.O.T., is an active punk and hardcore band based in Ottawa, Ontario. They play a raw, driving brand of punk heavily rooted in traditional street punk, Oi!, and UK82 hardcore. Their sound features fast, aggressive tempos and a gritty, no-nonsense aesthetic.',
  }),
  bootlicker: createFestivalProfile({
    slug: 'bootlicker',
    name: 'Bootlicker',
    logo: 'bootlicker-logo.webp',
    hero: 'bootlicker.webp',
    meta: ['HARDCORE PUNK / UK82 / D-BEAT', 'Vancouver-Canada'],
    links: {
      instagram: 'https://www.instagram.com/bootslickers/',
      bandcamp: 'https://boot-licker.bandcamp.com/',
    },
    bio: 'Bootlicker is a raw, ferocious hardcore punk band from Vancouver, British Columbia, active since 2017. Fronted by vocalist and songwriter Lewis, the band plays relentless UK82-style D-beat hardcore mixed with classic Oi!. Their music is defined by blown-out production, aggressive guitar attack, and politically charged lyrics.',
  }),
  destruct: createFestivalProfile({
    slug: 'destruct',
    name: 'Destruct',
    logo: 'destruct-logo.webp',
    hero: 'destruct.webp',
    meta: ['D-BEAT HARDCORE PUNK', 'Richmond-USA'],
    links: {
      bandcamp: 'https://destructrva.bandcamp.com/',
    },
    bio: 'Destruct is a raw D-beat hardcore punk band from Richmond, Virginia. Known for a blistering, no-frills sound, their style draws heavy influence from 90s Japanese hardcore like Bastard, Death Side, and Disclose, as well as Swedish punk. Their sound is characterized by pummeling drums and visceral guitar noise.',
  }),
  dominacion: createFestivalProfile({
    slug: 'dominacion',
    name: 'Dominacion',
    logo: 'dominacion-logo.webp',
    hero: 'dominacion.jpg',
    meta: ['RAW PUNK / D-BEAT HARDCORE', 'Barcelona-Spain'],
    links: {
      bandcamp: 'https://dominacion.bandcamp.com/',
    },
    bio: 'Dominación is a fast-paced raw punk and D-beat hardcore band based in Barcelona, Spain. Known for their unrelenting rhythm, distorted bass, noisepunk guitar riffs, and shouted vocals, they channel the aggressive styles of classic Japanese crasher crust bands and Disclose.',
  }),
  'durs-coeurs': createFestivalProfile({
    slug: 'durs-coeurs',
    name: 'Durs Coeurs',
    logo: 'durs-coeurs-logo.webp',
    hero: 'durs-coeurs.webp',
    meta: ['FRANCOPHONE PUNK ROCK / STREET PUNK', 'Ottawa-Canada'],
    links: {
      instagram: 'https://www.instagram.com/durs.coeurs/',
      bandcamp: 'https://durscoeurs.bandcamp.com/',
    },
    bio: "Durs Cœurs is a high-energy Francophone punk rock band based in Ottawa, Ontario. They play a stripped-down, driving brand of punk that blends catchy rock 'n' roll grooves with 80s-inspired street punk.",
  }),
  'early-grave': createFestivalProfile({
    slug: 'early-grave',
    name: 'Early Grave',
    logo: 'early-grave-logo.webp',
    hero: 'early-grave.jpg',
    meta: ['HARDCORE / THRASH PUNK', 'Philadelphia-USA'],
    links: {
      bandcamp: 'https://earlygravepunk.bandcamp.com/music',
    },
    bio: 'Early Grave is a raw, underground hardcore punk band based in Philadelphia, Pennsylvania. Known for a blistering thrash punk sound, they deliver a grotesque take on hardcore that channels the slimy menace of bands like Crazy Spirit and Dawn of Humans.',
  }),
  'esprit-de-corps': createFestivalProfile({
    slug: 'esprit-de-corps',
    name: 'Esprit de Corps',
    logo: 'esprit-de-corps-logo.webp',
    hero: 'esprit-de-corps.webp',
    meta: ['OI! / STREET PUNK', 'Montreal-Canada / Gainesville-USA'],
    links: {
      instagram: 'https://www.instagram.com/espritdecorps.oi/',
      bandcamp: 'https://espritdecorpsoi.bandcamp.com/album/s-t',
    },
    bio: 'Esprit De Corps is a transcontinental Oi! and street punk band with roots in Montréal, Québec and Gainesville, Florida. Formed by veterans of the underground scene, including members of Force Majeure and Wired Up, they play punchy, melodic, and gritty street punk.',
  }),
  eulogy: createFestivalProfile({
    slug: 'eulogy',
    name: 'Eulogy',
    logo: 'eulogy-logo.webp',
    hero: 'eulogy.webp',
    meta: ['CRUST PUNK / D-BEAT', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://eulogy-crust.bandcamp.com/album/eulogy-demo-25',
    },
    bio: 'Eulogy is a raw crust punk band based in Montreal, Canada. Their music leans into the grittier, fast-paced, and highly distorted roots of hardcore and crust punk. With an abrasive sound reminiscent of Swedish bands like Totalitär, they are a staple in the local D-beat scene.',
  }),
  'extrana-humana': createFestivalProfile({
    slug: 'extrana-humana',
    name: 'Extrana Humana',
    logo: 'extrana-humana-logo.webp',
    hero: 'extrana-humana.webp',
    meta: ['RAW HARDCORE / POST-PUNK', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://extranahumana.bandcamp.com',
    },
    bio: 'Extraña Humana is an international punk band formed in Montreal, Quebec, in the winter of 2024. They inhabit the space between raw hardcore punk and atmospheric post-punk. While they utilize heavy delays and reverbs, they retain a gritty, anti-capitalist punk foundation rather than the polished veneer of many modern goth and post-punk acts. They feature musicians from various continents who crossed paths in Canada.',
  }),
  faze: createFestivalProfile({
    slug: 'faze',
    name: 'Faze',
    logo: 'faze-logo.webp',
    hero: 'faze.webp',
    meta: ['PSYCHEDELIC HARDCORE PUNK', 'Montreal-Canada'],
    links: {
      instagram: 'https://www.instagram.com/fazemtl/',
      bandcamp: 'https://fazefazefaze.bandcamp.com/album/big-upsetter',
    },
    bio: 'Faze is a Montreal-based hardcore punk band formed by members from diverse underground backgrounds like crust, psych, and hardcore. They are best known for their raw, high-energy sound that blends psychedelic rock drone with massive hardcore hooks, frequently featuring unconventional instruments like a soaring brass trombone.',
  }),
  injur: createFestivalProfile({
    slug: 'injur',
    name: 'Injur',
    logo: 'injur-logo.webp',
    hero: 'injur.jpg',
    meta: ['CRUST PUNK / D-BEAT', 'Saint-Alexis-des-Monts-Canada'],
    links: {
      bandcamp: 'https://injur.bandcamp.com/album/2026-live-demo-session',
    },
    bio: 'Injur are a new band from Saint-Alexis-des-Monts, Quebec, Canada, formed in 2024. They play crust punk and D-beat reminiscent of political crust bands from the 90s, with a high-energy female vocalist, dual catchy crusty guitar riffs, galloping bass, and pounding drums.',
  }),
  lumpen: createFestivalProfile({
    slug: 'lumpen',
    name: 'Lumpen',
    logo: 'lumpen-logo.webp',
    hero: 'lumpen.webp',
    meta: ['UK82 / HARDCORE PUNK', 'Barcelona-Spain'],
    links: {
      bandcamp: 'https://lumpenpunx.bandcamp.com/',
    },
    bio: 'Lumpen is a raw, politically charged UK82-style punk band based in Barcelona, Spain. Primarily composed of Colombian expatriates, their music combines intense Latin American punk aggression with traditional British punk guitar riffs, creating a dark, desperate, and urgent sound.',
  }),
  'military-shadow': createFestivalProfile({
    slug: 'military-shadow',
    name: 'Military Shadow',
    logo: 'military-shadow-logo.webp',
    hero: 'military-shadow.webp',
    meta: ['METALPUNK', 'Tokyo-Japan'],
    links: {
      bandcamp: 'https://militaryshadow.bandcamp.com/',
    },
    bio: 'Military Shadow is a Tokyo-based metalpunk band formed in 2017. They fuse relentless raw hardcore punk with blistering 1980s heavy metal. Their sound features thick, incendiary guitar riffs, scorching twin leads, and guttural vocals reminiscent of legendary Japanese acts like GISM, Zouo, and Gastunk.',
  }),
  'mob-47': createFestivalProfile({
    slug: 'mob-47',
    name: 'Mob 47',
    logo: 'mob-47-logo.webp',
    hero: 'mob-47.webp',
    meta: ['HARDCORE PUNK / KÄNGPUNK', 'Stockholm-Sweden'],
    links: {
      facebook: 'https://www.facebook.com/mob47',
      instagram: 'https://www.instagram.com/mob_47_official/',
      bandcamp: 'https://mob47.bandcamp.com/',
    },
    bio: 'Formed in Täby, Stockholm in 1982, Mob 47 is a pioneering Swedish hardcore punk and kängpunk band. Known as one of the fastest D-beat groups, they play ultra-tight, short, and politically charged songs, coining their own frantic style as mangel. They are still active and amazing live.',
  }),
  mueco: createFestivalProfile({
    slug: 'mueco',
    name: 'Mueco',
    logo: 'mueco-logo.webp',
    hero: 'mueco.webp',
    meta: ['D-BEAT / RAW HARDCORE PUNK', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://runstatetapes.bandcamp.com/album/mueco-ideation',
    },
    bio: 'Mueco is a relentless Canadian D-beat and raw hardcore punk band based in Montréal, Québec. Known for their abrasive, fuzzy, and distortion-drenched sound, the group draws heavy inspiration from legendary acts like Discharge and Disclose. Their music features barking, rabid vocals paired with a fast, unrelenting rhythm.',
  }),
  'nuclear-family': createFestivalProfile({
    slug: 'nuclear-family',
    name: 'Nuclear Family',
    logo: 'nuclear-family-logo.webp',
    hero: 'nuclear-family.jpg',
    meta: ['PUNK / POWER POP', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://nuclearfamilymtl.bandcamp.com/album/no-thanks-demo-2025',
    },
    bio: 'Nuclear Family is a Montréal-based punk band known for blending raw, hard-hitting punk radiation with infectious power-pop melodies. The group features a dynamic, multinational lineup composed of Hector, Lisa, Mauricio, and Qutaybah. Their energetic live shows deliver fast-paced but catchy music tailored for intimate, sweaty club environments.',
  }),
  'phantom-rider': createFestivalProfile({
    slug: 'phantom-rider',
    name: 'Phantom Rider',
    logo: 'phantom-rider-logo.webp',
    hero: 'phantom-rider.webp',
    meta: ['CROSSOVER THRASH / METALPUNK', 'Boston-USA'],
    links: {
      bandcamp: 'https://phantomriderbos.bandcamp.com/album/quest-from-the-devil',
    },
    bio: 'Based in Boston, Phantom Rider is an active, unsigned crossover thrash and metalpunk band. Known for their raw, thrashy, and aggressive sound, they are a well-known act in the local New England crust and hardcore scenes.',
  }),
  plektani: createFestivalProfile({
    slug: 'plektani',
    name: 'Plektani',
    logo: 'plektani-logo.webp',
    hero: 'plektani.webp',
    meta: ['HARDCORE / D-BEAT PUNK', 'Athens-Greece'],
    links: {
      bandcamp: 'https://plektani.bandcamp.com/album/-',
    },
    bio: 'Πλεκτάνη, or Plektani, meaning plot or scheme, is a hard-hitting DIY hardcore and D-beat punk band based in Athens, Greece. Formed by veterans of the local underground scene, with members from Chain Cult, Lifewreck, and Χωρίς Οίκτο, the band delivers fast, guitar-driven käng punk with nimble twin-guitar attacks, a heavy rhythm section, hoarse vocals, and desperate shouts.',
  }),
  'psycho-terrorist-despair-system': createFestivalProfile({
    slug: 'psycho-terrorist-despair-system',
    name: 'Psycho Terrorist Despair System',
    logo: 'ptds-logo.webp',
    hero: 'ptds.webp',
    meta: ['DIY CRUST / HARDCORE PUNK', 'New York City-USA'],
    links: {
      youtubeVideo: 'https://www.youtube.com/watch?v=hDoFlqDN5Vk',
      youtubeMusic: 'https://www.youtube.com/watch?v=ND2mV60A7Oo',
    },
    bio: 'Psycho Terrorist Despair System (P.T.D.S.) is a DIY crust and hardcore punk band from New York City. Delivering relentless walls of Konton Crasher-style guitar distortion, pummeling D-beats, and raw, screaming, pissed-off vocals, the band channels uncompromising noise and aggression. Their self-titled debut demo cassette was released in 2026.',
  }),
  'portal-tomb': createFestivalProfile({
    slug: 'portal-tomb',
    name: 'Portal Tomb',
    logo: 'portal-tomb-logo.webp',
    hero: 'portal-tomb.webp',
    meta: ['STENCHCORE / CRUST PUNK', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://portaltomb.bandcamp.com/music',
    },
    bio: 'Portal Tomb is a Montreal-based stenchcore punk band formed in early 2024 by scene veterans. Known for a harsh, doomy, and crusty sound, their music pairs rumbling bass tones and sweeping guitars with guttural vocals, tackling themes of societal oppression and anti-capitalism.',
  }),
  'salvaje-punk': createFestivalProfile({
    slug: 'salvaje-punk',
    name: 'Salvaje Punk',
    logo: 'salvaje-punk-logo.webp',
    hero: 'salvaje-punk.webp',
    meta: ['HARDCORE PUNK / D-BEAT', 'New York-USA'],
    links: {
      bandcamp: 'https://toxicstaterecords.bandcamp.com/album/salvaje-punk-lp-2023',
    },
    bio: 'Salvaje Punk, often stylized as Salvaje Punx, is a New York City-based hardcore punk band renowned for their pummeling, uncompromising style and fiery Spanish-language vocals. Heavily tied to the NYC DIY and squatted underground scene, they blend intense metallic D-beat with raw, high-energy aggression.',
  }),
  'synaptic-isolation-syndrome': createFestivalProfile({
    slug: 'synaptic-isolation-syndrome',
    name: 'Synaptic Isolation Syndrome',
    logo: 'sis-logo.webp',
    hero: 'sis.webp',
    meta: ['CRASHER CRUST / HARDCORE PUNK', 'Montreal-Canada'],
    links: {
      website: 'https://2025.demo-fest.org/synaptic-isolation-syndrome/',
    },
    bio: 'Synaptic Isolation Syndrome is a raw crasher crust and hardcore punk band based in Montreal. Featuring ex and current members of notable local acts like Warkrusher, Ballast, Mueco, and Dark Circles, they play aggressive, noisy punk heavily influenced by the Japanese D-beat and stenchcore scenes.',
  }),
  skullnbone: createFestivalProfile({
    slug: 'skullnbone',
    name: 'Skull’n’Bone',
    logo: 'skull-n-bone-logo.webp',
    hero: 'skull-n-bone.webp',
    meta: ["STREET PUNK / ROCK 'N' ROLL", 'Montreal-Canada'],
    links: {
      bandcamp: 'https://skullnbone.bandcamp.com/',
    },
    bio: "Skull N Bone, or Skull'n'bone, is a Canadian street punk and rock 'n' roll band formed in Montreal by veterans of the legendary hardcore punk act Inepsy. Fronted by Chany on vocals with Sam on drums, both Inepsy alumni, Pat on bass, and Dan86 on guitar, they play fast, authentic 80s-style UK82 punk.",
  }),
  spirokete: createFestivalProfile({
    slug: 'spirokete',
    name: 'Spirokete',
    logo: 'spirokete-logo.webp',
    hero: 'spirokete.webp',
    meta: ['RAW PUNK / D-BEAT', 'New York-USA'],
    links: {
      instagram: 'https://www.instagram.com/spirokete_rawpunk/',
      bandcamp: 'https://spirokete.bandcamp.com/music',
    },
    bio: 'Spirokete, formerly known as Unknown Liberty, is a New York-based raw punk band known for their chaotic, filth-encrusted, and abrasive sound. They are prominent figures in the underground DIY scene, delivering apocalyptic råpunk and heavy D-beat characterized by blistering distortion and raw feedback.',
  }),
  'total-nada': createFestivalProfile({
    slug: 'total-nada',
    name: 'Total Nada',
    logo: 'total-nada-logo.webp',
    hero: 'total-nada.webp',
    meta: ['HARDCORE PUNK', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://totalnada.bandcamp.com/album/aqu-y-ahora',
    },
    bio: 'Total Nada is a blistering Spanish-language hardcore punk band based in Montreal, Canada. Led by a Colombian vocalist, they combine the raw, fast, and dark ferocity of 80s Latin American hardcore with the post-punk and anarcho-punk sounds of 80s European and British bands.',
  }),
  'ultimate-disaster': createFestivalProfile({
    slug: 'ultimate-disaster',
    name: 'Ultimate Disaster',
    logo: 'ultimate-disaster-logo.webp',
    hero: 'ultimate-disaster.webp',
    meta: ['D-BEAT HARDCORE PUNK', 'Richmond-USA'],
    links: {
      bandcamp: 'https://ultimatedisaster.bandcamp.com/music',
    },
    bio: 'Ultimate Disaster is a hardcore punk band from Richmond, Virginia, delivering relentless D-beat inspired by the raw power of Discharge and Disclose. Their debut LP, For Progress... (2025), unleashes a furious blend of crushing riffs, pounding rhythms, and politically charged lyrics confronting war, fascism, and environmental destruction. Fast, uncompromising, and unapologetic, Ultimate Disaster embodies the enduring spirit of hardcore punk.',
  }),
  'uniformed-service': createFestivalProfile({
    slug: 'uniformed-service',
    name: 'Uniformed Service',
    logo: 'uniformed-service-logo.webp',
    hero: 'uniformed-service.webp',
    meta: ['HARDCORE PUNK', 'Boston-USA'],
    links: {
      youtube: 'https://www.youtube.com/watch?v=Ybo9MtslTN8',
    },
    bio: 'Uniformed Service is a Boston punk band delivering raw, urgent energy rooted in the city’s long tradition of loud, uncompromising underground music. Blending sharp guitars, driving rhythms, and a fierce DIY attitude, the band channels the spirit of classic punk while bringing its own modern edge to the scene. Members have also played in The Massacred and Savageheads.',
  }),
  warkrusher: createFestivalProfile({
    slug: 'warkrusher',
    name: 'Warkrusher',
    logo: 'warkrusher-logo.webp',
    hero: 'warkrusher.webp',
    meta: ['CRUST PUNK / STENCHCORE', 'Montreal-Canada'],
    links: {
      bandcamp: 'https://inbattlethereisnosobriety.bandcamp.com/music',
    },
    bio: 'Warkrusher is a Montreal-based crust punk and stenchcore band formed in 2019. Known for an apocalyptic, heavy sound that merges primitive D-beat with thick death metal-style guitar tones, their punishing style is frequently compared to Bolt Thrower and Deviated Instinct.',
  }),
  'young-blades': createFestivalProfile({
    slug: 'young-blades',
    name: 'Young Blades',
    logo: 'young-blade-logo.webp',
    hero: 'young-blade.webp',
    meta: ["STREET PUNK / OI! / ROCK 'N' ROLL", 'Montreal-Canada'],
    links: {
      instagram: 'https://www.instagram.com/youngbladesofficial/',
      bandcamp: 'https://youngbladesofficial.bandcamp.com/',
    },
    bio: "Young Blades is a punk band from Montreal, Quebec, delivering a fierce mix of street punk, Oi!, and rock 'n' roll with equal parts grit and melody. Their latest album, Wreckage (2025), captures the band's evolution through driving rhythms, razor-sharp guitars, and anthemic singalongs that confront themes of struggle, resilience, loss, and standing together in the face of adversity. They remain rooted in the DIY spirit and working-class tradition of punk.",
  }),
  //-----Touring Bands----
  dhk: {
    slug: 'dhk',
    name: 'DHK',
    logoImage: '',
    logoAlt: 'DHK',
    heroImage: '/images/artists/dhk/dhk-profile.jpeg',
    heroAlt: 'DHK band profile',
    meta: ['FEROCIOUS D-BEAT HARDCORE PUNK', 'LIMA-PERU'],
    socials: [
      { label: 'Facebook', icon: 'fa fa-facebook', href: '' },
      { label: 'Instagram', icon: 'fa fa-instagram', href: '' },
      {
        label: 'Spotify',
        icon: 'fa fa-spotify',
        href: 'https://open.spotify.com/album/1hkN9rA2DnWXIKjk08DbqG?si=odyrYGG-RY68azPtUdH6kw',
      },
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
  // laguid band
  languid: {
    slug: 'languid',
    name: 'Languid',
    heroImage: '/images/artists/languid/languid.jpg',
    heroAlt: 'Languid tour artwork',
    heroObjectPosition: 'center 28%',
    meta: ['RAW FEROCIOUS D-BEAT HARDCORE PUNK', 'EDMONTON-CANADA'],
    socials: [
      { label: 'Facebook', icon: 'fa fa-facebook', href: '' },
      { label: 'Instagram', icon: 'fa fa-instagram', href: '' },
      {
        label: 'Spotify',
        icon: 'fa fa-spotify',
        href: '',
      },
      {
        label: 'Bandcamp',
        icon: 'fa fa-bandcamp',
        href: 'https://languidpunk.bandcamp.com/music',
      },
    ],
    // details: [
    //   { label: 'Classification', value: 'TOURING BAND' },
    //   { label: 'Territory', value: 'EUROPE 2026' },
    //   { label: 'Booking', value: 'Varning Productions' },
    // ],
    bio: [
      'Languid is a highly-regarded Canadian D-beat/hardcore punk band from Edmonton, Canada',
      'Known for their raw, ferocious, yet melodic sound, highlighting their powerful D-beat rhythms, heavy riffs, and political/nihilistic themes',
      'They are often compared to classic Swedish D-beat bands like Dischange and Disfear and live its a complete earth-destroying-bomb performance!',
    ],
  },
}

const slugifyBandName = (name) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const festivalBandNames = [
  ...new Set(festivalLineupShows.flatMap((show) => show.bands.map((band) => band.name))),
]
  .filter((name) => !name.toLowerCase().startsWith('special guest'))
  .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))

const FESTIVAL_BAND_PROFILES = Object.fromEntries(
  festivalBandNames.map((name) => {
    const slug = slugifyBandName(name)

    return [
      slug,
      {
        slug,
        name,
        heroImage: '',
        heroAlt: `${name} band profile`,
        meta: ['UP THE PUNX!'],
        socials: [
          { label: 'Facebook', icon: 'fa fa-facebook', href: '' },
          { label: 'Instagram', icon: 'fa fa-instagram', href: '' },
          {
            label: 'Spotify',
            icon: 'fa fa-spotify',
            href: '',
          },
          {
            label: 'Bandcamp',
            icon: 'fa fa-bandcamp',
            href: '',
          },
        ],
        details: [],
        bio: ['Band profile information coming soon.'],
      },
    ]
  }),
)

export const festivalArtists = festivalBandNames.map((name) => {
  const slug = slugifyBandName(name)

  return {
    slug,
    name,
    image: BAND_PROFILES[slug]?.heroImage || '',
  }
})

export const bandProfileSlugs = [
  ...new Set([...Object.keys(BAND_PROFILES), ...Object.keys(FESTIVAL_BAND_PROFILES)]),
].sort()

export const getBandBySlug = (slug) => BAND_PROFILES[slug] || FESTIVAL_BAND_PROFILES[slug]

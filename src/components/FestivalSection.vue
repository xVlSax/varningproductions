<template>
  <section id="festival" class="festival-container snap-start min-h-screen bg-black text-white">
    <div class="container mx-auto py-20 px-4 flex flex-col items-center gap-20">
      <!-- Festival Logo -->
      <img
        src="/images/festival/VarningFestLogoPartXVII.svg"
        alt="Varning Fest Logo"
        class="festival-resp w-full max-w-xl mb-10"
      />

      <!-- Intro Text -->
      <div class="festival-font text-center text-gray-200 space-y-2">
        <h3 class="text-2xl md:text-4xl font-bold">A Varning From Montreal Festival 2025</h3>
        <h4 class="text-lg md:text-xl">
          Tickets/passes are available
          <a
            href="https://thepointofsale.com/tickets/py4250911001"
            target="_blank"
            class="underline hover:text-red-400"
            >here</a
          >
        </h4>
        <h4 class="text-lg md:text-xl">
          Things to
          <router-link to="/things">
            <a target="_blank" class="underline hover:text-red-400">do</a>
          </router-link>
          in Montreal
        </h4>
      </div>

      <!-- Flyer Blocks -->
      <div
        v-for="(flyer, index) in festivalFlyers"
        :key="index"
        class="w-full max-w-4xl flex flex-col items-center text-center gap-4 animate-fade-in"
      >
        <!-- Flyer Image -->
        <img
          :src="flyer.src"
          :alt="flyer.alt"
          loading="lazy"
          class="w-full max-w-[900px] lg:max-h-[900px] object-contain rounded shadow"
        />

        <!-- Event Info -->
        <div class="festival-font text-sm md:text-base leading-relaxed">
          <h3 class="text-xl md:text-2xl font-bold">
            {{ flyer.title }}
          </h3>
          <p>{{ flyer.location }}</p>
          <p>{{ flyer.details }}</p>
        </div>

        <!-- Band Lineup -->
        <ul
          class="festival-lineup text-left w-full max-w-[900px] text-sm md:text-base text-gray-300 p-4 shadow-md rounded-lg"
        >
          <li
            v-for="(band, i) in flyer.lineup"
            :key="i"
            class="flex justify-between items-center border-b border-gray-700 py-1 last:border-none"
          >
            <a
              :href="band.link"
              target="_blank"
              class="underline hover:text-red-400 transition-colors"
            >
              {{ band.name }}
            </a>
            <span class="festival-font text-gray-400">{{ band.time }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const festivalFlyers = [
  {
    src: '/images/festival/flyers/MainPoster.jpg',
    alt: 'Main Flyer',
    title: '',
    location: '',
    details: '',
    lineup: [],
  },
  {
    src: '/images/festival/flyers/thursday-flyer.jpg',
    alt: 'Thursday Flyer',
    title: 'Thursday Show – September 11th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
    details: '$35 / Doors: 6:30pm – Show: 7:00pm SHARP!',
    lineup: [
      { name: 'Träume', time: '00:00 - 00:00am', link: 'https://traumepunk.bandcamp.com/' },
      {
        name: 'Flower',
        time: '00:00 - 00:00pm',
        link: 'https://flowernewyorkcity.bandcamp.com/album/hardly-a-dream',
      },
      {
        name: 'Extensive Slaughter',
        time: '00:00 - 00:00pm',
        link: 'https://extensiveslaughter.bandcamp.com/album/a-fated-demise',
      },
      {
        name: 'Warkrusher',
        time: '00:00 - 00:00pm',
        link: 'https://inbattlethereisnosobriety.bandcamp.com/',
      },
      {
        name: 'Shooting Pain',
        time: '00:00 - 00:00pm',
        link: 'https://shootingpain.bandcamp.com/album/demo-2024',
      },
      {
        name: 'Schenectavoidz',
        time: '00:00 - 00:00pm',
        link: 'https://schenectavoidz.bandcamp.com/',
      },
      {
        name: 'Spleen',
        time: '00:00 - 00:00pm',
        link: 'https://roachlegrecords.bandcamp.com/album/demo-14',
      },
    ],
  },
  {
    src: '/images/festival/flyers/matine-friday-flyer.jpg',
    alt: 'Friday Matine Show Flyer',
    title: 'Friday Matine Show – September 12th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
    details: '$20 / Doors: 12:30pm – Show: 1:00pm',
    lineup: [
      {
        name: 'Invertebrates',
        time: '00:00 - 00:00pm',
        link: 'https://beachimpedimentrecords.bandcamp.com/album/sick-to-survive',
      },
      {
        name: 'Reaktöri',
        time: '00:00 - 00:00pm',
        link: 'https://reaktori.bandcamp.com/album/demo',
      },
      {
        name: 'Highanxiety',
        time: '00:00 - 00:00pm',
        link: 'https://highanxietypunk.bandcamp.com/album/your-dreams-are-caught-in-war',
      },
      {
        name: 'Boot',
        time: '00:00 - 00:00pm',
        link: '',
      },
    ],
  },
  {
    src: '/images/festival/flyers/VarningFlyer-Friday.jpg',
    alt: 'Friday Flyer',
    title: 'Friday Show – September 12th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (2nd floor)',
    details: '$35 / Doors: 6:30pm – Show: 7:00pm',
    lineup: [
      { name: 'Varukers', time: '00:00 - 00:00am', link: 'https://thevarukers.bandcamp.com/music' },
      { name: 'Languid', time: '00:00 - 00:00pm', link: 'https://languidpunk.bandcamp.com/music' },
      {
        name: 'Innocent',
        time: '00:00 - 00:00am',
        link: 'https://innocentpunk.bandcamp.com/album/architects-of-despair',
      },
      {
        name: 'Puffer',
        time: '00:00 - 00:00pm',
        link: 'https://puffpuffpuff.bandcamp.com/album/demo',
      },
      {
        name: 'Mirage',
        time: '00:00 - 00:00pm',
        link: 'https://roachlegrecords.bandcamp.com/album/immagini-postume',
      },
      {
        name: 'Epaulet',
        time: '00:00 - 00:00pm',
        link: 'https://epaulet.bandcamp.com/album/cries-from-bondage',
      },
      {
        name: 'Psychic Armour',
        time: '00:00 - 00:00pm',
        link: 'https://psychicarmour.bandcamp.com/',
      },
      {
        name: 'Venenö',
        time: '00:00 - 00:00pm',
        link: 'https://nofusstapes.bandcamp.com/album/venen-demo-mmxxiv',
      },
      {
        name: 'Gulogy',
        time: '00:00 - 00:00pm',
        link: '',
      },
    ],
  },
  {
    src: '/images/festival/flyers/MatineShow.png',
    alt: 'Saturday Matine Show Flyer',
    title: 'Saturday Matine Show + DIY Punk Market – September 13th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
    details: '$20 / Doors: 12:30pm – Show: 1:00pm SHARP!',
    lineup: [
      {
        name: 'Cross',
        time: '00:00 - 00:00pm',
        link: 'https://roachlegrecords.bandcamp.com/album/no-beginning-no-end',
      },
      { name: 'Cell Deth', time: '00:00 - 00:00pm', link: 'https://celldeth.bandcamp.com/' },
      { name: 'Endform', time: '00:00 - 00:00pm', link: 'https://endform.bandcamp.com/' },
      {
        name: 'Pied-de-Biche',
        time: '00:00 - 00:00pm',
        link: 'https://pied-de-biche.bandcamp.com/',
      },
    ],
  },
  {
    src: '/images/festival/flyers/VarningFlyer -Sat.jpg',
    alt: 'Saturday Flyer',
    title: 'Saturday Show – September 13th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (2nd floor)',
    details: '$35 / Doors: 6:00pm – Show: 6:30pm SHARP!',
    lineup: [
      {
        name: 'Disturd',
        time: '00:00 - 00:00am',
        link: 'https://www.youtube.com/watch?v=2tORDiudB80',
      },
      { name: 'Lifelessdark', time: '00:00 - 00:00pm', link: 'https://lifelessdark.bandcamp.com/' },
      {
        name: 'Yellowcake',
        time: '00:00 - 00:00pm',
        link: 'https://yellowcakephx.bandcamp.com/album/can-you-see-the-future',
      },
      {
        name: 'Metallian',
        time: '00:00 - 00:00pm',
        link: 'https://metalian.bandcamp.com/album/beyond-the-wall',
      },
      {
        name: 'Hedonist',
        time: '00:00 - 00:00pm',
        link: 'https://hedonistsl.bandcamp.com/album/scapulimancy',
      },
      {
        name: 'Portal Tomb',
        time: '00:00 - 00:00pm',
        link: 'https://portaltomb.bandcamp.com/album/last-frost-demo',
      },
      {
        name: 'Sistema de Muerte',
        time: '00:00 - 00:00pm',
        link: 'https://sistemademuerte.bandcamp.com/album/sistema-de-muerte',
      },
    ],
  },
  {
    src: '/images/festival/flyers/saturday-aftershow-flyer.jpg',
    alt: 'Saturday After Show Flyer',
    title: 'Saturday After Show – September 13th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (2nd floor)',
    details: '$20 / Doors: 12:00am – Show: 12:30am',
    lineup: [
      {
        name: 'Flores Nucleares',
        time: '00:00 - 00:00pm',
        link: 'https://doomsdayrecords.bandcamp.com/album/flores-nucleares',
      },
      {
        name: 'Bloodied Angels',
        time: '00:00 - 00:00pm',
        link: 'https://bloodiedangels.bandcamp.com/album/demo',
      },
      { name: 'Trenchraid', time: '00:00 - 00:00am', link: 'https://trenchraid.bandcamp.com/' },
      {
        name: 'xheliesinruinx',
        time: '00:00 - 00:00am',
        link: 'https://heliesinruin.bandcamp.com/',
      },
    ],
  },
]
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.festival-lineup {
  background-color: rgba(75, 85, 99, 0.3);
}
</style>

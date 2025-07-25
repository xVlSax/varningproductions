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
              class="band-font underline hover:text-red-400 transition-colors"
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
    details: '$35 / Doors: 6:30pm – Show: 7:30pm SHARP!',
    lineup: [
      { name: 'Träume', time: '12:00 - 12:40am', link: 'https://traumepunk.bandcamp.com/' },
      {
        name: 'Flower',
        time: '11:10 - 11:45pm',
        link: 'https://flowernewyorkcity.bandcamp.com/album/hardly-a-dream',
      },
      {
        name: 'Extensive Slaughter',
        time: '10:25 - 10:55pm',
        link: 'https://extensiveslaughter.bandcamp.com/album/a-fated-demise',
      },
      {
        name: 'Warkrusher',
        time: '9:40 - 10:10pm',
        link: 'https://inbattlethereisnosobriety.bandcamp.com/',
      },
      {
        name: 'Shooting Pain',
        time: '8:55 - 9:25pm',
        link: 'https://shootingpain.bandcamp.com/album/demo-2024',
      },
      {
        name: 'Schenectavoidz',
        time: '8:10 - 8:40pm',
        link: 'https://schenectavoidz.bandcamp.com/',
      },
      {
        name: 'Spleen',
        time: '7:30 - 7:55pm',
        link: 'https://roachlegrecords.bandcamp.com/album/demo-14',
      },
    ],
  },
  {
    src: '/images/festival/flyers/matine-friday-flyer.jpg',
    alt: 'Friday Matine Show Flyer',
    title: 'Friday Matine Show – September 12th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
    details: '$20 / Doors: 12:30pm – Show: 1:30pm SHARP!',
    lineup: [
      {
        name: 'Invertebrates',
        time: '3:30 - 4:10pm',
        link: 'https://beachimpedimentrecords.bandcamp.com/album/sick-to-survive',
      },
      {
        name: 'Reaktöri',
        time: '2:45 - 3:15pm',
        link: 'https://reaktori.bandcamp.com/album/demo',
      },
      {
        name: 'Highanxiety',
        time: '2:05 - 2:30pm',
        link: 'https://highanxietypunk.bandcamp.com/album/your-dreams-are-caught-in-war',
      },
      {
        name: 'Boot',
        time: '1:30 - 1:50pm',
        link: '',
      },
    ],
  },
  {
    src: '/images/festival/flyers/VarningFlyer-Friday.jpg',
    alt: 'Friday Flyer',
    title: 'Friday Show – September 12th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (2nd floor)',
    details: '$35 / Doors: 7:00pm – Show: 7:30pm SHARP! Dance party after the show!',
    lineup: [
      { name: 'Varukers', time: '12:55 - 01:45am', link: 'https://thevarukers.bandcamp.com/music' },
      { name: 'Languid', time: '12:00 - 12:40am', link: 'https://languidpunk.bandcamp.com/music' },
      {
        name: 'Innocent',
        time: '11:10 - 11:40pm',
        link: 'https://innocentpunk.bandcamp.com/album/architects-of-despair',
      },
      {
        name: 'Puffer',
        time: '10:25 - 10:55pm',
        link: 'https://puffpuffpuff.bandcamp.com/album/demo',
      },
      {
        name: 'Epaulet',
        time: '9:40 - 10:10pm',
        link: 'https://epaulet.bandcamp.com/album/cries-from-bondage',
      },
      {
        name: 'Venenö',
        time: '8:55 - 9:25pm',
        link: 'https://nofusstapes.bandcamp.com/album/venen-demo-mmxxiv',
      },
      {
        name: 'Psychic Armour',
        time: '8:10 - 8:40pm',
        link: 'https://psychicarmour.bandcamp.com/',
      },
      {
        name: 'Eulogy',
        time: '7:30 - 7:55pm',
      },
    ],
  },
  {
    src: '/images/festival/flyers/MatineShow.png',
    alt: 'Saturday Matine Show Flyer',
    title: 'Saturday Matine Show + DIY Punk Market – September 13th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
    details: '$20 / Doors: 12:30pm – Show: 1:30pm SHARP!',
    lineup: [
      {
        name: 'Mirage',
        time: '3:35 - 4:15pm',
        link: 'https://roachlegrecords.bandcamp.com/album/immagini-postume',
      },
      // {
      //   name: 'Cross',
      //   time: '3:35 - 4:15pm',
      //   link: 'https://roachlegrecords.bandcamp.com/album/no-beginning-no-end',
      // },
      { name: 'Cell Deth', time: '2:50 - 3:10pm', link: 'https://celldeth.bandcamp.com/' },
      { name: 'Endform', time: '2:05 - 2:35pm', link: 'https://endform.bandcamp.com/' },
      {
        name: 'Pied-de-Biche',
        time: '1:30 - 1:50pm',
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
        time: '11:10 - 11:50pm',
        link: 'https://www.youtube.com/watch?v=2tORDiudB80',
      },
      { name: 'Lifelessdark', time: '10:20 - 10:55pm', link: 'https://lifelessdark.bandcamp.com/' },
      {
        name: 'Alement',
        time: '9:25 - 10:05pm',
        link: 'https://alement.bandcamp.com/album/banished-sphere',
      },
      {
        name: 'Metalian',
        time: '8:40 - 9:10pm',
        link: 'https://metalian.bandcamp.com/album/beyond-the-wall',
      },
      {
        name: 'Hedonist',
        time: '7:55 - 8:25pm',
        link: 'https://hedonistsl.bandcamp.com/album/scapulimancy',
      },
      {
        name: 'Portal Tomb',
        time: '7:10 - 7:40pm',
        link: 'https://portaltomb.bandcamp.com/album/last-frost-demo',
      },
      {
        name: 'Sistema de Muerte',
        time: '6:30 - 6:55pm',
        link: 'https://sistemademuerte.bandcamp.com/album/sistema-de-muerte',
      },
    ],
  },
  {
    src: '/images/festival/flyers/saturday-aftershow-flyer.jpg',
    alt: 'Saturday After Show Flyer',
    title: 'Saturday After Show – September 13th',
    location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
    details: '$20 / Doors: 12:00am – Show: 12:30am SHARP!',
    lineup: [
      {
        name: 'Flores Nucleares',
        time: '02:40 - 03:15am',
        link: 'https://doomsdayrecords.bandcamp.com/album/flores-nucleares',
      },
      {
        name: 'Bloodied Angels',
        time: '01:55 - 02:25am',
        link: 'https://bloodiedangels.bandcamp.com/album/demo',
      },
      { name: 'Trenchraid', time: '01:10 - 01:40am', link: 'https://trenchraid.bandcamp.com/' },
      {
        name: 'xheliesinruinx',
        time: '12:30 - 12:55am',
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

.band-font {
  color: #9d2828;
}
</style>

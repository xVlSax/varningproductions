<template>
  <section id="festival" class="festival-container snap-start min-h-screen bg-black text-white">
    <div class="container mx-auto py-20 px-4 flex flex-col items-center gap-20">
      <div class="festival-countdown-hero">
        <!-- Festival Logo -->
        <img
          src="/images/festival/VarningFestLogoPartXVIII.svg"
          alt="Varning Fest Logo"
          class="festival-logo"
        />

        <!-- Festival countdown -->
        <section class="festival-countdown" :aria-label="countdownAriaLabel">
          <p class="countdown-heading">Festival starts in</p>
          <div class="countdown-grid">
            <div v-for="unit in countdownUnits" :key="unit.label" class="countdown-unit">
              <span class="countdown-value">{{ unit.value }}</span>
              <span class="countdown-label">{{ unit.label }}</span>
            </div>
          </div>
          <p class="countdown-date">September 17, 2026 · 6:00 PM · Montreal</p>
        </section>
      </div>

      <!-- Intro Text -->
      <div class="festival-font text-center text-gray-200 space-y-2">
        <h3 class="text-2xl md:text-4xl font-bold">A Varning From Montreal Festival 2026</h3>
        <h4 class="text-lg md:text-xl">
          Tickets/passes are available
          <a
            href="https://thepointofsale.com/tickets/py4260917001"
            target="_blank"
            class="underline"
            >here</a
          >
        </h4>
        <h4 class="text-lg md:text-xl">
          Things to
          <router-link to="/things">
            <a target="_blank" class="underline">do</a>
          </router-link>
          in Montreal
        </h4>
      </div>
      <!-- COUNTDOWN -->

      <!-- Flyer Blocks -->
      <div
        v-for="(flyer, index) in festivalFlyers"
        :key="index"
        class="w-full max-w-4xl flex flex-col items-center text-center gap-4 animate-fade-in"
      >
        <!-- Flyer Image with modern format fallbacks -->
        <picture>
          <source :srcset="flyer.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
          <source :srcset="flyer.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
          <img
            :src="flyer.src"
            :alt="flyer.alt"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            class="w-full max-w-[900px] lg:max-h-[900px] object-contain rounded shadow"
          />
        </picture>

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
            <a :href="band.link" target="_blank" class="band-font">
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
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const FESTIVAL_START = new Date('2026-09-17T18:00:00-04:00').getTime()
const remainingTime = ref(Math.max(0, FESTIVAL_START - Date.now()))
let countdownInterval

const countdown = computed(() => {
  const totalSeconds = Math.floor(remainingTime.value / 1000)

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
})

const countdownUnits = computed(() => [
  { label: 'Days', value: String(countdown.value.days).padStart(2, '0') },
  { label: 'Hours', value: String(countdown.value.hours).padStart(2, '0') },
  { label: 'Minutes', value: String(countdown.value.minutes).padStart(2, '0') },
  { label: 'Seconds', value: String(countdown.value.seconds).padStart(2, '0') },
])

const countdownAriaLabel = computed(() => {
  const { days, hours, minutes, seconds } = countdown.value
  return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds until the festival`
})

const updateCountdown = () => {
  remainingTime.value = Math.max(0, FESTIVAL_START - Date.now())
}

onMounted(() => {
  updateCountdown()
  countdownInterval = window.setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  window.clearInterval(countdownInterval)
})

const festivalFlyers = [
  // {
  //   src: '/images/festival/flyers/MainPoster.jpg',
  //   alt: 'Main Flyer',
  //   title: '',
  //   location: '',
  //   details: '',
  //   lineup: [],
  // },
  // {
  //   src: '/images/festival/flyers/thursday-flyer.jpg',
  //   alt: 'Thursday Flyer',
  //   title: 'Thursday Show – September 11th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
  //   details: '$35 / Doors: 6:30pm – Show: 7:30pm SHARP!',
  //   lineup: [
  //     { name: 'Träume', time: '12:00 - 12:40am', link: 'https://traumepunk.bandcamp.com/' },
  //     {
  //       name: 'Beton Arme',
  //       time: '11:10 - 11:45pm',
  //       link: 'https://betonarmeoimtl.bandcamp.com/album/renaissance-2',
  //     },
  //     {
  //       name: 'Extensive Slaughter',
  //       time: '10:25 - 10:55pm',
  //       link: 'https://extensiveslaughter.bandcamp.com/album/a-fated-demise',
  //     },
  //     {
  //       name: 'Warkrusher',
  //       time: '9:40 - 10:10pm',
  //       link: 'https://inbattlethereisnosobriety.bandcamp.com/',
  //     },
  //     {
  //       name: 'Shooting Pain',
  //       time: '8:55 - 9:25pm',
  //       link: 'https://shootingpain.bandcamp.com/album/demo-2024',
  //     },
  //     {
  //       name: 'Schenectavoidz',
  //       time: '8:10 - 8:40pm',
  //       link: 'https://schenectavoidz.bandcamp.com/',
  //     },
  //     {
  //       name: 'Spleen',
  //       time: '7:30 - 7:55pm',
  //       link: 'https://roachlegrecords.bandcamp.com/album/demo-14',
  //     },
  //   ],
  // },
  // {
  //   src: '/images/festival/flyers/matine-friday-flyer.jpg',
  //   alt: 'Friday Matine Show Flyer',
  //   title: 'Friday Matine Show – September 12th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
  //   details: '$20 / Doors: 12:30pm – Show: 1:30pm SHARP!',
  //   lineup: [
  //     {
  //       name: 'Invertebrates',
  //       time: '3:30 - 4:10pm',
  //       link: 'https://beachimpedimentrecords.bandcamp.com/album/sick-to-survive',
  //     },
  //     {
  //       name: 'Reaktöri',
  //       time: '2:45 - 3:15pm',
  //       link: 'https://reaktori.bandcamp.com/album/demo',
  //     },
  //     {
  //       name: 'Highanxiety',
  //       time: '2:05 - 2:30pm',
  //       link: 'https://highanxietypunk.bandcamp.com/album/your-dreams-are-caught-in-war',
  //     },
  //     {
  //       name: 'Boot',
  //       time: '1:30 - 1:50pm',
  //       link: '',
  //     },
  //   ],
  // },
  // {
  //   src: '/images/festival/flyers/VarningFlyer-Friday.jpg',
  //   alt: 'Friday Flyer',
  //   title: 'Friday Show – September 12th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (2nd floor)',
  //   details: '$35 / Doors: 6:30pm – Show: 7:30pm SHARP! Dance party after the show!',
  //   lineup: [
  //     { name: 'Varukers', time: '12:55 - 01:45am', link: 'https://thevarukers.bandcamp.com/music' },
  //     { name: 'Languid', time: '12:00 - 12:40am', link: 'https://languidpunk.bandcamp.com/music' },
  //     {
  //       name: 'Innocent',
  //       time: '11:10 - 11:40pm',
  //       link: 'https://innocentpunk.bandcamp.com/album/architects-of-despair',
  //     },
  //     {
  //       name: 'Ultrarat',
  //       time: '10:25 - 10:55pm',
  //       link: 'https://ultrarat.bandcamp.com/album/s-t-ep',
  //     },
  //     {
  //       name: 'Epaulet',
  //       time: '9:40 - 10:10pm',
  //       link: 'https://epaulet.bandcamp.com/album/cries-from-bondage',
  //     },
  //     {
  //       name: 'Venenö',
  //       time: '8:55 - 9:25pm',
  //       link: 'https://nofusstapes.bandcamp.com/album/venen-demo-mmxxiv',
  //     },
  //     {
  //       name: 'Psychic Armour',
  //       time: '8:10 - 8:40pm',
  //       link: 'https://psychicarmour.bandcamp.com/',
  //     },
  //     {
  //       name: 'Eulogy',
  //       time: '7:30 - 7:55pm',
  //     },
  //   ],
  // },
  // {
  //   src: '/images/festival/flyers/punkmarket.jpg',
  //   alt: 'Saturday Punk Market Flyer',
  //   title: 'Saturday Matine DIY Punk Market – September 13th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (Outside)',
  //   details: 'FREE / All ages / 1:00pm',
  //   lineup: [],
  // },
  // {
  //   src: '/images/festival/flyers/MatineShow.png',
  //   alt: 'Saturday Matine Show Flyer',
  //   title: 'Saturday Matine Show + DIY Punk Market – September 13th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
  //   details: '$20 / Doors: 12:30pm – Show: 1:30pm SHARP!',
  //   lineup: [
  //     {
  //       name: 'Cell Deth',
  //       time: '3:35 - 4:15pm',
  //       link: 'https://celldeth.bandcamp.com/',
  //     },
  //     { name: 'Endform', time: '2:50 - 3:10pm', link: 'https://endform.bandcamp.com/' },
  //     {
  //       name: 'Poison Spear',
  //       time: '2:05 - 2:35pm',
  //       link: 'https://poisonspear514.bandcamp.com/album/institutional-trust',
  //     },
  //     {
  //       name: 'Pied-de-Biche',
  //       time: '1:30 - 1:50pm',
  //       link: 'https://pied-de-biche.bandcamp.com/',
  //     },
  //   ],
  // },
  // {
  //   src: '/images/festival/flyers/VarningFlyer-Sat.jpg',
  //   alt: 'Saturday Flyer',
  //   title: 'Saturday Show – September 13th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (2nd floor)',
  //   details: '$35 / Doors: 6:00pm – Show: 6:30pm SHARP!',
  //   lineup: [
  //     {
  //       name: 'Disturd',
  //       time: '11:10 - 11:50pm',
  //       link: 'https://www.youtube.com/watch?v=2tORDiudB80',
  //     },
  //     {
  //       name: 'Lifeless dark',
  //       time: '10:20 - 10:55pm',
  //       link: 'https://lifelessdark.bandcamp.com/',
  //     },
  //     {
  //       name: 'Hedonist',
  //       time: '9:25 - 10:05pm',
  //       link: 'https://hedonistsl.bandcamp.com/album/scapulimancy',
  //     },
  //     {
  //       name: 'Alement',
  //       time: '8:40 - 9:10pm',
  //       link: 'https://alement.bandcamp.com/album/banished-sphere',
  //     },
  //     {
  //       name: 'Metalian',
  //       time: '7:55 - 8:25pm',
  //       link: 'https://metalian.bandcamp.com/album/beyond-the-wall',
  //     },
  //     {
  //       name: 'Portal Tomb',
  //       time: '7:10 - 7:40pm',
  //       link: 'https://portaltomb.bandcamp.com/album/last-frost-demo',
  //     },
  //     {
  //       name: 'Sistema de Muerte',
  //       time: '6:30 - 6:55pm',
  //       link: 'https://sistemademuerte.bandcamp.com/album/sistema-de-muerte',
  //     },
  //   ],
  // },
  // {
  //   src: '/images/festival/flyers/saturday-aftershow-flyer.jpg',
  //   alt: 'Saturday After Show Flyer',
  //   title: 'Saturday After Show – September 13th',
  //   location: 'Piranha Bar - 680 W. Saint-Catherine St. (Basement)',
  //   details: '$20 / Doors: 12:00am – Show: 12:30am SHARP!',
  //   lineup: [
  //     {
  //       name: 'Bloodied Angels',
  //       time: '01:55 - 02:25am',
  //       link: 'https://bloodiedangels.bandcamp.com/album/demo',
  //     },
  //     {
  //       name: 'Total Nada',
  //       time: '02:40 - 03:15am',
  //       link: 'https://totalnada.bandcamp.com/album/aqu-y-ahora',
  //     },
  //     { name: 'Trenchraid', time: '01:10 - 01:40am', link: 'https://trenchraid.bandcamp.com/' },
  //     {
  //       name: 'xheliesinruinx',
  //       time: '12:30 - 12:55am',
  //       link: 'https://heliesinruin.bandcamp.com/',
  //     },
  //   ],
  // },
]
</script>

<style scoped>
.festival-container {
  padding-top: calc(50px + 1rem);
}

.festival-countdown-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 760px);
  gap: clamp(2rem, 5vw, 3.5rem);
}

.festival-logo {
  display: block;
  width: min(76vw, 630px);
  height: auto;
}

.festival-countdown {
  width: min(100%, 680px);
  text-align: center;
}

.countdown-heading,
.countdown-date {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: 'TypeWriter1', sans-serif;
  text-transform: uppercase;
}

.countdown-heading {
  margin-bottom: 0.8rem;
  font-size: clamp(0.85rem, 1.5vw, 1.1rem);
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 3vw, 2.5rem);
  align-items: start;
}

.countdown-unit {
  position: relative;
  display: grid;
  justify-items: center;
  min-width: 0;
}

.countdown-unit:not(:last-child)::after {
  content: ':';
  position: absolute;
  top: 0.03em;
  right: calc(clamp(0.75rem, 3vw, 2.5rem) / -2 - 0.13em);
  color: #ff9800;
  font-family: 'Courier New', monospace;
  font-size: clamp(2.1rem, 5.5vw, 4.5rem);
  font-weight: 700;
  line-height: 1;
}

.countdown-value {
  color: #ff9800;
  font-family: 'Courier New', monospace;
  font-size: clamp(2.1rem, 5.5vw, 4.5rem);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 0.95;
  letter-spacing: 0;
  text-shadow: 0 0 8px rgba(255, 152, 0, 0.3);
  transform: skewX(-3deg) scaleY(1.08);
}

.countdown-label {
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.72);
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.65rem, 1.4vw, 0.9rem);
  letter-spacing: 0;
  text-transform: uppercase;
}

.countdown-date {
  margin-top: 1rem;
  font-size: clamp(0.68rem, 1.2vw, 0.88rem);
}

@media (max-width: 640px) {
  .festival-countdown-hero {
    gap: 2.25rem;
  }

  .festival-logo {
    width: min(72vw, 310px);
  }

  .countdown-grid {
    gap: 0.45rem;
  }

  .countdown-unit:not(:last-child)::after {
    right: -0.27em;
    font-size: clamp(1.8rem, 10vw, 2.8rem);
  }

  .countdown-value {
    font-size: clamp(1.8rem, 10vw, 2.8rem);
  }

  .countdown-label {
    margin-top: 0.55rem;
  }
}

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
  background-color: rgba(35, 35, 35, 0.5);
  margin-right: 2rem;
}

.band-font,
.underline {
  color: #fbfbfb;
}

.festival-lineup a {
  text-decoration: none;
}
</style>

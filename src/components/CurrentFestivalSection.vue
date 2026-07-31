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
              <div class="countdown-value" aria-hidden="true">
                <span
                  v-for="(digit, digitIndex) in unit.value.split('')"
                  :key="`${unit.label}-${digitIndex}`"
                  class="digital-digit"
                >
                  <span
                    v-for="segment in digitalSegments"
                    :key="segment"
                    class="digital-segment"
                    :class="[
                      `digital-segment--${segment}`,
                      { 'is-active': isSegmentActive(digit, segment) },
                    ]"
                  ></span>
                </span>
              </div>
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
        <!-- <h4 class="text-lg md:text-xl">
          <router-link to="/festival-lineup" class="underline">Lineup</router-link>
          <span aria-hidden="true"> · </span>
          <router-link to="/bands" class="underline">Bands</router-link>
        </h4> -->
      </div>
      <!-- COUNTDOWN -->

      <!-- Flyer Blocks -->
      <div id="lineup" class="festival-lineup-section">
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
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const FESTIVAL_START = new Date('2026-09-17T18:00:00-04:00').getTime()
const remainingTime = ref(Math.max(0, FESTIVAL_START - Date.now()))
let countdownInterval

const digitalSegments = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const digitSegmentMap = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'd', 'e', 'g'],
  3: ['a', 'b', 'c', 'd', 'g'],
  4: ['b', 'c', 'f', 'g'],
  5: ['a', 'c', 'd', 'f', 'g'],
  6: ['a', 'c', 'd', 'e', 'f', 'g'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'd', 'f', 'g'],
}

const isSegmentActive = (digit, segment) => digitSegmentMap[digit]?.includes(segment)

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

const festivalFlyers = []
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
  --countdown-color: #b6f500;

  width: min(100%, 680px);
  text-align: center;
}

.festival-lineup-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5rem;
  scroll-margin-top: 72px;
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
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 3vw, 2.5rem);
  align-items: start;
  padding: clamp(1rem, 2.5vw, 1.5rem) clamp(0.75rem, 2.5vw, 1.4rem) 0.9rem;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 24%), #070a05;
  border: 0;
  border-radius: 0.4rem;
  box-shadow:
    inset 0 0 24px rgba(0, 0, 0, 0.95),
    0 0 20px rgba(182, 245, 0, 0.12);
}

.countdown-grid::before {
  content: '';
  position: absolute;
  z-index: 0;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0 3px,
    rgba(182, 245, 0, 0.025) 3px 4px
  );
  pointer-events: none;
}

.countdown-unit {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  min-width: 0;
}

.countdown-unit:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 26%;
  right: calc(clamp(0.75rem, 3vw, 2.5rem) / -2 - 0.18rem);
  width: 0.36rem;
  height: 1.6rem;
  background:
    radial-gradient(circle, var(--countdown-color) 0 38%, transparent 43%) center top / 100% 50%
      no-repeat,
    radial-gradient(circle, var(--countdown-color) 0 38%, transparent 43%) center bottom / 100% 50%
      no-repeat;
  filter: drop-shadow(0 0 5px rgba(182, 245, 0, 0.8));
}

.countdown-value {
  display: flex;
  justify-content: center;
  gap: clamp(0.12rem, 0.45vw, 0.3rem);
}

.digital-digit {
  position: relative;
  display: block;
  width: clamp(1.25rem, 3.8vw, 2.8rem);
  aspect-ratio: 0.56;
}

.digital-segment {
  position: absolute;
  display: block;
  background: rgba(182, 245, 0, 0.065);
  transition:
    background-color 120ms linear,
    box-shadow 120ms linear;
}

.digital-segment.is-active {
  background: var(--countdown-color);
  box-shadow:
    0 0 5px rgba(182, 245, 0, 0.9),
    0 0 12px rgba(182, 245, 0, 0.48);
}

.digital-segment--a,
.digital-segment--d,
.digital-segment--g {
  left: 17%;
  width: 66%;
  height: 8%;
  clip-path: polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%);
}

.digital-segment--a {
  top: 1%;
}

.digital-segment--g {
  top: 46%;
}

.digital-segment--d {
  bottom: 1%;
}

.digital-segment--b,
.digital-segment--c,
.digital-segment--e,
.digital-segment--f {
  width: 11%;
  height: 40%;
  clip-path: polygon(50% 0, 100% 9%, 100% 91%, 50% 100%, 0 91%, 0 9%);
}

.digital-segment--b,
.digital-segment--c {
  right: 3%;
}

.digital-segment--e,
.digital-segment--f {
  left: 3%;
}

.digital-segment--b,
.digital-segment--f {
  top: 5%;
}

.digital-segment--c,
.digital-segment--e {
  bottom: 5%;
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
    padding: 0.9rem 0.35rem 0.7rem;
  }

  .countdown-unit:not(:last-child)::after {
    right: -0.4rem;
    width: 0.25rem;
    height: 1.15rem;
  }

  .digital-digit {
    width: clamp(0.95rem, 4.7vw, 1.45rem);
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

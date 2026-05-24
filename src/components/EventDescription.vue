<template>
  <section id="event-description" class="event-description-page">
    <div class="event-description-wrap">
      <RouterLink to="/tours" class="back-link">← Back to tours</RouterLink>

      <header class="event-header">
        <h1 class="event-title">{{ event.title }}</h1>
        <h2 class="event-subtitle">{{ event.subtitle }}</h2>
        <p class="event-date">{{ event.date }}</p>
      </header>

      <div class="event-copy">
        <p class="event-intro">{{ event.intro }}</p>

        <p
          v-for="(paragraph, index) in event.paragraphs"
          :key="`paragraph-${index}`"
          class="event-paragraph"
        >
          {{ paragraph }}
        </p>

        <ul class="event-routing">
          <li
            v-for="stop in event.routing"
            :key="typeof stop === 'string' ? stop : `${stop.date}-${stop.city}`"
          >
            <template v-if="typeof stop === 'string'">
              {{ stop }}
            </template>
            <template v-else>
              <span>{{ stop.date }} — </span>
              <button
                v-if="stop.flyer"
                type="button"
                class="routing-city-button"
                @click="openCityFlyer(stop)"
              >
                {{ stop.city }}
              </button>
              <span v-else>{{ stop.city }}</span>
              <template v-if="stop.links?.length">
                <RouterLink
                  v-for="link in stop.links"
                  :key="link.label"
                  class="routing-event-link"
                  :to="link.route"
                >
                  {{ link.label }}
                </RouterLink>
              </template>
            </template>
          </li>
        </ul>

        <p v-if="event.footnoteParts?.length" class="event-footnote">
          <template v-for="(part, index) in event.footnoteParts" :key="`footnote-${index}`">
            <span v-if="part.type === 'text'">{{ part.text }}</span>
            <RouterLink
              v-else-if="part.type === 'band'"
              class="event-footnote-link"
              :to="{ name: 'Band Profile', params: { slug: part.slug } }"
            >
              {{ part.label }}
            </RouterLink>
          </template>
        </p>
        <p v-else-if="event.footnote" class="event-footnote">{{ event.footnote }}</p>
      </div>

      <picture class="event-flyer">
        <source :srcset="event.image.replace(/\.jpg$/i, '.avif')" type="image/avif" />
        <source :srcset="event.image.replace(/\.jpg$/i, '.webp')" type="image/webp" />
        <img :src="event.image" :alt="event.title" loading="lazy" decoding="async" />
      </picture>

      <transition name="fade">
        <div
          v-if="activeCityFlyer"
          class="city-flyer-modal"
          role="dialog"
          aria-modal="true"
          :aria-label="`${activeCityFlyer.city} flyer`"
          @click.self="closeCityFlyer"
        >
          <div class="city-flyer-dialog">
            <button
              type="button"
              class="city-flyer-close"
              @click="closeCityFlyer"
              aria-label="Close"
            >
              ✕
            </button>

            <picture class="city-flyer-picture">
              <source
                :srcset="activeCityFlyer.flyer.replace(/\.jpg$/i, '.avif')"
                type="image/avif"
              />
              <source
                :srcset="activeCityFlyer.flyer.replace(/\.jpg$/i, '.webp')"
                type="image/webp"
              />
              <img :src="activeCityFlyer.flyer" :alt="`${activeCityFlyer.city} flyer`" />
            </picture>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getTourBySlug } from '@/data/tourEvents'

const route = useRoute()
const activeCityFlyer = ref(null)

const event = computed(() => {
  return (
    getTourBySlug(route.params.slug) || {
      title: 'Event Not Found',
      date: '',
      postedOn: 'today',
      category: 'Tours',
      image: '/images/events/upcoming/tours/dhk/new-dhk.jpg',
      intro: 'This event page has not been filled in yet.',
      paragraphs: ['Add the final event description, routing, and flyer details here.'],
      routing: ['Routing details coming soon.'],
      footnoteParts: [],
      footnote: '',
    }
  )
})

const openCityFlyer = (stop) => {
  activeCityFlyer.value = stop
}

const closeCityFlyer = () => {
  activeCityFlyer.value = null
}

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    closeCityFlyer()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.event-description-page {
  min-height: 100vh;
  background: #000;
  color: #efefef;
  padding: 7rem 1rem 4rem;
}

.event-description-wrap {
  width: min(100%, 980px);
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: rgba(239, 239, 239, 0.88);
  text-decoration: none;
  font-family: 'TypeWriter1', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.event-header {
  text-align: center;
  margin-bottom: 2rem;
}

.event-title {
  margin: 0;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  letter-spacing: 0.04em;
  line-height: 0.95;
  text-transform: uppercase;
}

.event-date {
  margin: 0.4rem 0 0;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(1.15rem, 2vw, 1.9rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.event-meta {
  margin: 0.9rem 0 0;
  color: rgba(239, 239, 239, 0.62);
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  text-transform: lowercase;
}

.event-copy {
  max-width: 900px;
  margin: 0 auto;
  color: rgba(239, 239, 239, 0.82);
  font-size: 0.98rem;
  line-height: 1.8;
  font-family: 'Lucky', sans-serif;
}

.event-intro,
.event-paragraph,
.event-footnote {
  margin: 0 0 1rem;
}

.event-routing {
  margin: 1.25rem 0;
  padding-left: 1.1rem;
  color: #fff;
}

.event-routing li {
  margin-bottom: 0.35rem;
}

.routing-city-button {
  appearance: none;
  border: 0;
  padding: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 0.16em;
  cursor: pointer;
}

.routing-city-button:hover {
  color: #ef4444;
}

.routing-event-link {
  display: inline-block;
  margin-left: 0.75rem;
  color: #ef4444;
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}

.routing-event-link:hover {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.event-footnote-link {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.event-footnote-link:hover {
  color: #ef4444;
}

.event-flyer {
  display: block;
  width: min(100%, 900px);
  margin: 2rem auto 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.5);
}

.event-flyer img {
  width: 100%;
  height: auto;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.city-flyer-modal {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.85);
}

.city-flyer-dialog {
  position: relative;
  width: min(92vw, 700px);
  max-height: 90vh;
  padding: 2.75rem 1rem 1rem;
  background: rgba(12, 12, 12, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 65px rgba(0, 0, 0, 0.55);
  overflow: auto;
}

.city-flyer-close {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.city-flyer-picture img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 640px) {
  .event-description-page {
    padding: 6.5rem 1rem 3rem;
  }

  .event-copy {
    font-size: 0.92rem;
    line-height: 1.7;
  }
}
</style>

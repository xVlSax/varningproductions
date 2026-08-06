<template>
  <section id="events" class="events-root">
    <div class="events-wrap">
      <!-- Events -->
      <h2 class="events-title">Events</h2>
      <div class="flyers-grid events-main-grid">
        <article v-for="(f, i) in eventsFlyers" :key="i" class="flyer-card events-main-card">
          <button class="flyer-btn" @click="openModal(f)">
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
            </picture>
          </button>
        </article>
      </div>

      <!-- Upcoming Events-->
      <h3 class="events-subtitle">Upcoming Events</h3>
      <div class="flyers-grid">
        <article v-for="(f, i) in upcomingEventsFlyers" :key="i" class="flyer-card">
          <button class="flyer-btn" @click="openModal(f)">
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
            </picture>
          </button>
        </article>
      </div>

      <!-- Link to Past Events -->
      <router-link to="/past-events" class="past-events-link">
        <span>Past Events</span>
        <img src="/images/events/knife.svg" alt="Past Events" class="past-events-icon" />
      </router-link>
    </div>

    <!-- Lightbox modal -->
    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="active.alt || 'Flyer preview'"
        @click.self="closeModal"
      >
        <div class="modal-content">
          <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>

          <picture class="modal-picture">
            <source :srcset="active.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
            <source :srcset="active.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
            <img :src="active.src" :alt="active.alt" class="modal-img" />
          </picture>

          <ModalEventDescriptionSection
            v-if="active.modalDetails"
            :details="active.modalDetails"
            class="modal-description"
          />
          <p v-else class="modal-caption">{{ active.alt }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import ModalEventDescriptionSection from '@/components/ModalEventDescriptionSection.vue'
import { EVENTS_FLYERS, UPCOMING_EVENTS_FLYERS } from '@/data/eventFlyers'

export default {
  name: 'EventSection',
  components: {
    ModalEventDescriptionSection,
  },
  data() {
    return {
      eventsFlyers: EVENTS_FLYERS,
      upcomingEventsFlyers: UPCOMING_EVENTS_FLYERS,
      isModalOpen: false,
      active: { src: '', alt: '' },
    }
  },
  methods: {
    openModal(f) {
      this.active = f
      this.isModalOpen = true
      document.documentElement.classList.add('no-scroll')
      window.addEventListener('keydown', this.onKey)
    },
    openModalBySlug(slug) {
      if (!slug) return

      const event = [...this.eventsFlyers, ...this.upcomingEventsFlyers].find((flyer) => {
        return flyer.slug === slug
      })

      if (event) {
        this.openModal(event)
      }
    },
    closeModal() {
      this.isModalOpen = false
      document.documentElement.classList.remove('no-scroll')
      window.removeEventListener('keydown', this.onKey)

      if (this.$route.query.event) {
        const query = { ...this.$route.query }
        delete query.event
        this.$router.replace({ path: this.$route.path, query })
      }
    },
    onKey(e) {
      if (e.key === 'Escape') this.closeModal()
    },
  },
  mounted() {
    this.openModalBySlug(this.$route.query.event)
  },
  watch: {
    '$route.query.event'(slug) {
      this.openModalBySlug(slug)
    },
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKey)
    document.documentElement.classList.remove('no-scroll')
  },
}
</script>

<style scoped>
:root {
  --header-h: 64px;
}

/* page layout */
.events-root {
  min-height: 100vh;
  background: #000;
  color: #e9e9e9;
  padding: calc(var(--header-h) + 3rem) 1rem 3rem;
  margin-top: 5rem;
  scroll-margin-top: var(--header-h);
}
.events-wrap {
  width: 100%;
  max-width: 1640px;
  margin: 0 auto;
  text-align: center;
}

/* logo + headings */
.logo-varning {
  width: min(70%, 360px);
  height: auto;
  margin-inline: auto;
  display: block;
  margin-bottom: 0.75rem;
}
.events-title,
.events-subtitle {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px 0 rgba(182, 245, 0, 0.38);
  text-transform: uppercase;
  padding: 1.5rem;
}
.events-title {
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
}
.events-subtitle {
  font-size: clamp(1rem, 2vw, 1.35rem);
  margin-top: 1.5rem;
}

/* main poster */
.main-poster {
  display: block;
  margin: 0.75rem auto 0;
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}
.main-poster img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* grid */
.flyers-grid {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}

.events-main-grid {
  grid-template-columns: minmax(0, 1fr);
}

.events-main-card {
  max-width: 560px;
}

/* Past Events Link */
.past-events-link {
  margin-top: 3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #e9e9e9;
  font-family: 'TypeWriter1', sans-serif;
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.past-events-link:hover {
  color: #ef4444;
  transform: translateY(-2px);
}

.past-events-icon {
  width: 50px;
  height: 50px;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;
}

.past-events-icon {
  width: 8rem;
  height: 8rem;
}

.past-events-link:hover .past-events-icon {
  filter: brightness(1.4);
  transform: scale(1.1);
}
@media (min-width: 768px) {
  .flyers-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
  .events-main-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (min-width: 1024px) {
  .flyers-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.75rem 1.15rem;
    padding-inline: clamp(2.5rem, 4.5vw, 5rem);
  }
  .events-main-grid {
    grid-template-columns: minmax(0, 1fr);
    padding-inline: 0;
  }
}

/* cards */
.flyer-card {
  width: 100%;
  max-width: 430px;
  background: transparent;
  border: 0;
  border-radius: 0;
  overflow: visible;
  box-shadow: none;
}
.flyer-card:hover {
  transform: none;
  box-shadow: none;
}

.flyer-btn {
  all: unset;
  cursor: zoom-in;
  display: block;
  width: 100%;
}
.flyer-img {
  width: 100%;
  aspect-ratio: 3 / 4.6;
  object-fit: contain;
  display: block;
  background: #050505;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.4);
}

.no-scroll {
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.75);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.modal-content {
  position: relative;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: auto;
  width: min(90vw, 700px);
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 3rem 1.1rem 1.1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}
.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 38px;
  height: 38px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
}
.modal-picture {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.1rem;
}
.modal-img {
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
  display: block;
}

.modal-description {
  padding: 0 0.2rem;
}

.modal-caption {
  width: 100%;
  margin: 0.75rem 0 0;
  color: #d8d8d8;
  font-size: 0.95rem;
  text-align: center;
}

/* mobile tweaks */
@media (max-width: 640px) {
  .modal-content {
    width: 92vw;
    margin: auto;
    max-height: 85vh;
    padding: 2.75rem 0.75rem 0.75rem;
  }
  .modal-close {
    width: 34px;
    height: 34px;
    font-size: 1rem;
  }
  .modal-caption {
    font-size: 0.9rem;
  }
}
</style>

<template>
  <section id="events" class="events-root">
    <div class="events-wrap">
      <!-- Logo -->
      <img
        src="/images/events/varning-font.svg"
        alt="Varning Productions Logo Font"
        class="logo-varning"
      />

      <!-- title -->
      <h2 class="events-title">Events</h2>
      <!-- Main poster -->
      <picture class="main-poster">
        <source srcset="/images/festival/flyers/MainPoster.avif" type="image/avif" />
        <source srcset="/images/festival/flyers/MainPoster.webp" type="image/webp" />
        <img src="/images/festival/flyers/MainPoster.jpg" alt="Main Event Poster" loading="lazy" />
      </picture>

      <!-- Upcoming -->
      <h3 class="events-subtitle">Upcoming Events</h3>
      <div class="flyers-grid">
        <article v-for="(f, i) in upcomingFlyers" :key="i" class="flyer-card">
          <button class="flyer-btn" @click="openModal(f)">
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
            </picture>
          </button>
        </article>
      </div>

      <!-- Tours -->
      <h3 class="events-subtitle">Tours</h3>
      <div class="flyers-grid">
        <article v-for="(f, i) in tourFlyers" :key="i" class="flyer-card">
          <button class="flyer-btn" @click="openModal(f)">
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
            </picture>
          </button>
        </article>
      </div>

      <!-- Link to PastEvents -->
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

          <p class="modal-caption">{{ active.alt }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'EventSection',
  data() {
    return {
      upcomingFlyers: [],
      tourFlyers: [
        { src: '/images/events/upcoming/tours/traume.jpg', alt: 'traume-na-tour' },
        { src: '/images/events/upcoming/tours/warkrusher.jpg', alt: 'warkrusher-euro-tour' },
      ],
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
    closeModal() {
      this.isModalOpen = false
      document.documentElement.classList.remove('no-scroll')
      window.removeEventListener('keydown', this.onKey)
    },
    onKey(e) {
      if (e.key === 'Escape') this.closeModal()
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
  margin-top: 3rem;
  scroll-margin-top: var(--header-h);
}
.events-wrap {
  width: 100%;
  max-width: 1200px;
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
  text-transform: uppercase;
  margin: 0.25rem 0 0.75rem;
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
}
@media (min-width: 1024px) {
  .flyers-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

/* cards */
.flyer-card {
  background: rgba(25, 25, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}
.flyer-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}

.flyer-btn {
  all: unset;
  cursor: zoom-in;
  display: block;
  width: 100%;
}
.flyer-img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
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
  overflow: hidden;
  width: min(50vw, 555px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
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
  flex: 1 1 auto;
  display: block;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.modal-caption {
  margin: 0.5rem 0.9rem 0.9rem;
  color: #d8d8d8;
  font-size: 0.95rem;
  text-align: center;
}

/* mobile tweaks */
@media (max-width: 640px) {
  .modal-content {
    width: 90vw;
    margin: auto;
    max-height: 80vh;
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

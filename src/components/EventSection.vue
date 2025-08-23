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
          <picture>
            <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
            <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
            <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
          </picture>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventSection',
  data() {
    return {
      upcomingFlyers: [
        { src: '/images/events/upcoming/traume.jpg', alt: 'Traume' },
        { src: '/images/events/upcoming/warkrusher.jpg', alt: 'Warkrusher' },
      ],
    }
  },
}
</script>

<style scoped>
:root {
  --header-h: 64px;
}

.events-root {
  min-height: 100vh;
  background: #000;
  color: #e9e9e9;
  padding: calc(var(--header-h) + 3rem) 1rem 3rem; /* increased top space */
  margin-top: 3rem;
  scroll-margin-top: var(--header-h);
}

.events-wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.logo-varning {
  width: min(70%, 360px);
  height: auto;
  margin-inline: auto;
  display: block;
  margin-bottom: 0.4rem;
}

.events-title,
.events-subtitle {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: -1rem 0 0.75rem;
}

.events-title {
  font-size: clamp(1.1rem, 2.2vw, 1.75rem);
}

.events-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-top: 1.75rem;
}

.main-poster {
  display: block;
  margin: 0.85rem auto 0;
  width: 100%;
  max-width: 550px;
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

.flyers-grid {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
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

.flyer-img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}
</style>

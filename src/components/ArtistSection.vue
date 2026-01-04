<template>
  <section id="artists" class="artists-root">
    <div class="artists-wrap">
      <div class="artists-title-wrap">
        <h3 class="artists-title">Artists</h3>
      </div>

      <div class="artists-grid">
        <RouterLink
          v-for="a in artists"
          :key="a.slug"
          :to="`/artists/${a.slug}`"
          class="artist-card"
          :aria-label="`Open artist page: ${a.name}`"
        >
          <div
            class="artist-bg"
            :style="{ backgroundImage: `url(${a.image})` }"
            role="img"
            :aria-label="a.name"
          />

          <div class="artist-overlay">
            <span class="artist-name">{{ a.name }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const artists = [
  { slug: 'abysmal-grief', name: 'ABYSMAL GRIEF', image: '/images/artists/abysmal-grief.jpg' },
]
</script>

<style scoped>
:root {
  --header-h: 64px;
}

.artists-root {
  min-height: 100vh;
  background: #000;
  color: #e9e9e9;
  padding: calc(var(--header-h) + 1rem) 1rem 4rem;
  scroll-margin-top: var(--header-h);
}

.artists-wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.artists-title-wrap {
  position: sticky;
  top: var(--header-h);
  z-index: 10;

  padding: 5rem 0 0.75rem;
  margin-bottom: 1rem;

  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.artists-title {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(2.2rem, 5vw, 4rem);
  margin: 0 0 1rem;
}

.artists-intro {
  max-width: 900px;
  margin: 0 auto 2.25rem;
  color: #cfcfcf;
  line-height: 1.7;
  font-family: 'Lucky', sans-serif;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
}

.artists-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 900px) {
  .artists-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
  }
}

.artist-card {
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.45);
  transform: translateZ(0);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.artist-bg {
  width: 100%;
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
  filter: grayscale(1) contrast(1.08) brightness(0.85);
  transition:
    transform 0.22s ease,
    filter 0.22s ease;
}

.artist-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.72) 0%,
    rgba(0, 0, 0, 0.18) 50%,
    rgba(0, 0, 0, 0.55) 100%
  );
}

.artist-name {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(1rem, 1.6vw, 1.35rem);
  padding: 0.25rem 0.6rem;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.75);
}

.artist-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.14);
}
.artist-card:hover .artist-bg {
  transform: scale(1.03);
  filter: grayscale(1) contrast(1.15) brightness(0.95);
}

.artist-card:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.35);
  outline-offset: 4px;
}
</style>

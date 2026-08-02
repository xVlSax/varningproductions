<template>
  <section class="lineup-root">
    <div class="lineup-content">
      <div class="lineup-heading">
        <p class="lineup-kicker">September 17–19 · Montreal</p>
        <h1>Festival Lineup 2026</h1>
        <p class="lineup-status">Daily schedule and set times</p>
      </div>
      <div class="show-list">
        <article v-for="show in festivalLineupShows" :key="show.id" class="show-card">
          <div class="show-main">
            <picture class="show-flyer">
              <img :src="show.flyer" :alt="show.flyerAlt" loading="lazy" decoding="async" />
            </picture>

            <div class="show-schedule">
              <h2 class="show-title">{{ show.event }}</h2>
              <ul v-if="show.bands.length" class="band-list">
                <li
                  v-for="(band, bandIndex) in show.bands"
                  :key="`${show.id}-${band.name}-${bandIndex}`"
                  class="band-row"
                >
                  <a
                    v-if="band.link"
                    :href="band.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="band-name"
                  >
                    {{ band.name }}
                  </a>
                  <span v-else class="band-name">{{ band.name }}</span>
                  <time class="band-time">{{ band.time }}</time>
                </li>
              </ul>
              <p v-else class="no-bands">DIY labels, records, art, merch, and community tables.</p>
            </div>
          </div>

          <footer class="show-details">
            <div class="detail-block">
              <span class="detail-label">Day</span>
              <strong>{{ show.day }}</strong>
            </div>
            <div class="detail-block detail-place">
              <span class="detail-label">Place</span>
              <strong>{{ show.place }}</strong>
            </div>
            <div class="detail-block">
              <span class="detail-label">Price</span>
              <strong>{{ show.price }}</strong>
              <small>{{ show.details }}</small>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { festivalLineupShows } from '@/data/festivalLineup'
</script>

<style scoped>
.lineup-root {
  --lineup-accent: #b6f500;

  min-height: 100vh;
  padding: 7.5rem 1.25rem 4rem;
  color: #f4f4f4;
  background: radial-gradient(circle at 50% 35%, rgba(182, 245, 0, 0.12), transparent 34rem), #000;
}

.lineup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 78rem);
  margin: 0 auto;
  text-align: center;
}

.lineup-logo {
  display: block;
  width: min(72vw, 30rem);
  height: auto;
}

.lineup-heading {
  margin-top: clamp(0.5rem, 1.5vw, 1rem);
}

.lineup-kicker,
.lineup-status {
  margin: 0;
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lineup-kicker {
  color: var(--lineup-accent);
  font-size: clamp(1.15rem, 2.5vw, 1.75rem);
}

h1 {
  margin: 0.75rem 0 1.25rem;
  font-family: 'VarningFromMtlWide', 'TypeWriter1', sans-serif;
  font-weight: 800;
  font-size: clamp(2.25rem, 6vw, 5rem);
  letter-spacing: 0.06em;
  line-height: 1;
  text-transform: uppercase;
  color: #050505;
  -webkit-text-fill-color: #050505;
  -webkit-text-stroke: 6px #fff;
  paint-order: stroke fill;
}

.lineup-status {
  color: #bcbcbc;
  font-size: clamp(1rem, 2vw, 1.25rem);
}

.show-list {
  display: grid;
  width: 100%;
  margin-top: clamp(3.5rem, 7vw, 6rem);
  gap: clamp(2.5rem, 5vw, 4.5rem);
}

.show-card {
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.045), transparent 42%), #090909;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.65);
}

.show-main {
  display: grid;
  grid-template-columns: minmax(18rem, 0.85fr) minmax(0, 1.25fr);
  align-items: stretch;
  min-height: 30rem;
}

.show-flyer {
  display: grid;
  place-items: center;
  min-width: 0;
  padding: clamp(1rem, 2.5vw, 2rem);
  background: #000;
}

.show-flyer img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 34rem;
  object-fit: contain;
}

.show-schedule {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  text-align: left;
}

.show-title {
  margin: 0 0 1.5rem;
  color: var(--lineup-accent);
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
}

.band-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.band-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.65rem 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.16);
}

.band-row:last-child {
  border-bottom: 0;
}

.band-name,
.band-time {
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.band-name {
  color: #f5f5f5;
  font-size: clamp(1.05rem, 2vw, 1.45rem);
  text-decoration: none;
}

a.band-name:hover {
  color: var(--lineup-accent);
}

.band-time {
  color: #aaa;
  font-size: clamp(0.78rem, 1.4vw, 1rem);
  white-space: nowrap;
}

.no-bands {
  margin: auto 0;
  color: #bcbcbc;
  font-family: 'TypeWriter1', sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  line-height: 1.7;
}

.show-details {
  display: grid;
  grid-template-columns: 1fr minmax(18rem, 1.6fr) 1fr;
  gap: 1.5rem;
  padding: 1.4rem clamp(1.25rem, 3vw, 2.5rem);
  border-top: 2px solid var(--lineup-accent);
  background: #151515;
  text-align: left;
}

.detail-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.detail-label {
  color: var(--lineup-accent);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
}

.detail-block strong {
  color: #f1f1f1;
  font-size: clamp(0.9rem, 1.4vw, 1.08rem);
  font-weight: 400;
}

.detail-block small {
  color: #9f9f9f;
  font-size: 0.72rem;
}

@media (max-width: 640px) {
  .lineup-root {
    padding-top: 6rem;
  }

  h1 {
    -webkit-text-stroke-width: 5px;
  }

  .lineup-logo {
    width: min(78vw, 20rem);
  }

  .show-main {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .show-flyer {
    min-height: 22rem;
  }

  .show-flyer img {
    max-height: 30rem;
  }

  .show-schedule {
    padding: 1.5rem 1.15rem 2rem;
  }

  .band-row {
    gap: 0.75rem;
  }

  .show-details {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .detail-place {
    order: 3;
  }
}
</style>

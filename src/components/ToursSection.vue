<template>
  <section id="tours" class="tours-root">
    <div class="tours-wrap">
      <!-- Tours -->
      <h2 class="tours-title">Tours</h2>
      <!-- <div class="flyers-grid tours-grid">
        <article v-for="(f, i) in tourFlyers" :key="i" class="flyer-card tours-card">
          <router-link
            class="flyer-frame tours-frame flyer-link"
            :to="{ name: 'Event Description', params: { slug: f.slug } }"
          >
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
            </picture>
          </router-link>
        </article>
      </div> -->

      <!-- Upcoming Tours -->
      <h3 class="tours-subtitle">Upcoming Tours</h3>
      <div class="upcoming-tours-grid">
        <article v-for="(f, i) in upcomingFlyers" :key="i" class="upcoming-tour-card">
          <router-link
            class="flyer-frame upcoming-tour-frame flyer-link"
            :to="{ name: 'Event Description', params: { slug: f.slug } }"
          >
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img
                :src="f.src"
                :alt="f.alt"
                loading="lazy"
                decoding="async"
                class="flyer-img upcoming-tour-img"
              />
            </picture>
          </router-link>

          <div class="upcoming-tour-meta">
            <h4 class="upcoming-tour-name">{{ f.title }}</h4>
            <p v-if="f.date" class="upcoming-tour-date">{{ f.date }}</p>
          </div>
        </article>
      </div>

      <!-- Link to Past Tours -->
      <router-link to="/past-tours" class="past-tours-link">
        <span>Past Tours</span>
        <img src="/images/events/knife.svg" alt="Past tours" class="past-tours-icon" />
      </router-link>
    </div>
  </section>
</template>

<script>
import { TOUR_HEROES, UPCOMING_TOURS } from '@/data/tourEvents'

export default {
  name: 'ToursSection',
  data() {
    return {
      tourFlyers: TOUR_HEROES,
      upcomingFlyers: UPCOMING_TOURS,
    }
  },
}
</script>

<style scoped>
/* page layout */
.tours-root {
  --header-h: 64px;
  min-height: calc(100vh - 56px);
  background: #000;
  color: #e9e9e9;
  padding: calc(var(--header-h) + 1rem) 1rem 1.75rem;
  margin-top: 0;
  scroll-margin-top: var(--header-h);
  display: flex;
  align-items: center;
}
.tours-wrap {
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
.tours-title,
.tours-subtitle {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px 0 rgba(182, 245, 0, 0.38);
  text-transform: uppercase;
  padding: 0.6rem;
}
.tours-title {
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
}
.tours-subtitle {
  font-size: clamp(1rem, 2vw, 1.35rem);
  margin-top: 0.45rem;
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

.tours-grid {
  grid-template-columns: minmax(0, 1fr);
  justify-items: center;
}

.tours-card {
  width: 100%;
  max-width: 560px;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.upcoming-tours-grid {
  margin-top: 0.85rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.35rem 1rem;
  justify-items: center;
}

.upcoming-tour-card {
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.15rem;
}

.flyer-frame {
  width: 100%;
  display: block;
}

.flyer-link {
  color: inherit;
  text-decoration: none;
}

.upcoming-tour-img {
  aspect-ratio: 3 / 4.6;
  background: #050505;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.4);
}

.upcoming-tour-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.upcoming-tour-name {
  margin: 0;
  color: #f5f5f5;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  letter-spacing: 0.05em;
  line-height: 1;
  text-align: center;
}

.upcoming-tour-date {
  margin: 0;
  color: rgba(233, 233, 233, 0.82);
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.9rem, 1.3vw, 1.1rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
}

/* Past Events Link */
.past-tours-link {
  margin-top: 1.5rem;
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

.past-tours-link:hover {
  color: #ef4444;
  transform: translateY(-2px);
}

.past-tours-icon {
  width: 50px;
  height: 50px;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;
}

.past-tours-icon {
  width: 6.25rem;
  height: 6.25rem;
}

.past-tours-link:hover .past-tours-icon {
  filter: brightness(1.4);
  transform: scale(1.1);
}
@media (min-width: 768px) {
  .flyers-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
  .tours-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .upcoming-tours-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.75rem 1.5rem;
  }
}
@media (min-width: 1024px) {
  .flyers-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  .tours-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .upcoming-tours-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.85rem 1rem;
    padding-inline: clamp(2.5rem, 4.5vw, 5rem);
    align-items: start;
  }
}

/* cards */
.flyer-card {
  background: rgba(25, 25, 25, 0.6);
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

.tours-card:hover {
  transform: none;
  box-shadow: none;
}

.flyer-img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: contain;
  display: block;
}
</style>

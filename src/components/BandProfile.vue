<template>
  <section class="band-profile-page">
    <div class="band-profile-wrap">
      <!-- <RouterLink to="/tours" class="back-link">← Back to tours</RouterLink> -->

      <picture v-if="band.heroImage" class="band-hero">
        <img
          :src="band.heroImage"
          :alt="band.heroAlt || band.name"
          :style="{ objectPosition: band.heroObjectPosition || 'center center' }"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <header class="band-header">
        <h1 class="band-title">
          <img
            v-if="band.logoImage"
            :src="band.logoImage"
            :alt="band.logoAlt || `${band.name} logo`"
            class="band-logo"
            loading="eager"
            decoding="async"
          />
          <span v-else>{{ band.name }}</span>
        </h1>
        <p v-if="band.meta?.length" class="band-meta">
          <span v-for="(item, index) in band.meta" :key="`${item}-${index}`">
            <span v-if="index" class="band-meta-separator">|</span>{{ item }}
          </span>
        </p>
      </header>

      <div v-if="band.socials?.length" class="band-socials">
        <component
          v-for="social in band.socials"
          :key="social.label"
          :is="social.href ? 'a' : 'span'"
          :href="social.href || undefined"
          class="band-social-link"
          :class="{ 'is-placeholder': !social.href }"
          target="_blank"
          rel="noreferrer"
          :aria-label="social.label"
          :title="social.label"
        >
          <i :class="social.icon" aria-hidden="true"></i>
        </component>
      </div>

      <div v-if="band.details?.length" class="band-details">
        <p v-for="detail in band.details" :key="detail.label" class="band-detail-line">
          <span class="band-detail-label">{{ detail.label }}:</span>
          <span class="band-detail-value">{{ detail.value }}</span>
        </p>
      </div>

      <div class="band-bio">
        <p v-for="(paragraph, index) in band.bio" :key="`bio-${index}`" class="band-bio-paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBandBySlug } from '@/data/bands'

const route = useRoute()

const band = computed(() => {
  return (
    getBandBySlug(route.params.slug) || {
      name: 'Band Not Found',
      heroImage: '/images/events/upcoming/tours/dhk/dhk-tour.jpg',
      heroAlt: 'Band profile placeholder',
      meta: ['PROFILE NOT AVAILABLE'],
      socials: [],
      details: [],
      bio: [
        'This band profile has not been created yet. Add a matching entry in src/data/bands.js.',
      ],
    }
  )
})
</script>

<style scoped>
.band-profile-page {
  min-height: 100vh;
  background: #000;
  color: #f0f0f0;
  padding: 7rem 1rem 4rem;
}

.band-profile-wrap {
  width: min(100%, 1120px);
  margin: 0 auto;
  text-align: center;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: rgba(240, 240, 240, 0.88);
  text-decoration: none;
  font-family: 'TypeWriter1', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.band-hero {
  display: block;
  width: min(100%, 860px);
  margin: 0 auto;
  overflow: hidden;
  background: #0b0b0b;
  aspect-ratio: 16 / 7;
}

.band-hero img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.08);
}

.band-header {
  margin-top: 2rem;
}

.band-title {
  margin: 0;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  letter-spacing: 0.05em;
  line-height: 0.95;
  text-transform: uppercase;
}

.band-logo {
  display: block;
  width: min(82vw, 650px);
  max-height: 180px;
  margin: 0 auto;
  object-fit: contain;
}

.band-meta {
  margin: 0.8rem 0 0;
  color: rgba(240, 240, 240, 0.75);
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.9rem, 1.6vw, 1.3rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.band-meta-separator {
  display: inline-block;
  margin: 0 0.55rem;
  opacity: 0.45;
}

.band-socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.4rem;
}

.band-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  text-decoration: none;
}

.band-social-link.is-placeholder {
  opacity: 0.72;
}

.band-details {
  margin: 2rem auto 0;
  max-width: 980px;
  color: rgba(240, 240, 240, 0.84);
  font-size: 0.98rem;
  line-height: 1.8;
}

.band-detail-line {
  margin: 0;
}

.band-detail-label {
  font-weight: 700;
  text-transform: uppercase;
}

.band-detail-value {
  margin-left: 0.35rem;
}

.band-bio {
  max-width: 980px;
  margin: 2rem auto 0;
  color: rgba(240, 240, 240, 0.86);
  font-size: 1rem;
  line-height: 1.85;
  font-family: 'Lucky', sans-serif;
}

.band-bio-paragraph {
  margin: 0 0 1.15rem;
}

@media (max-width: 640px) {
  .band-profile-page {
    padding: 6.5rem 1rem 3rem;
  }

  .band-details,
  .band-bio {
    font-size: 0.92rem;
    line-height: 1.75;
  }
}
</style>

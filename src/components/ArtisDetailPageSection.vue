<template>
  <section class="artist-page">
    <div class="artist-page-wrap">
      <RouterLink to="/artists" class="back-link">← Back to roster</RouterLink>

      <h1 class="artist-title">{{ artist.name }}</h1>

      <picture class="artist-hero">
        <img :src="artist.image" :alt="artist.name" loading="lazy" decoding="async" />
      </picture>

      <p class="artist-desc">
        {{ artist.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const ARTISTS = [
  {
    slug: 'abysmal-grief',
    name: 'ABYSMAL GRIEF',
    image: '/images/artists/abysmal-grief.jpg',
    description: 'Add bio / links / contact info here.',
  },
  {
    slug: 'abyssal',
    name: 'ABYSSAL',
    image: '/images/artists/abyssal.jpg',
    description: 'Add bio / links / contact info here.',
  },
  {
    slug: 'altars',
    name: 'ALTARS',
    image: '/images/artists/altars.jpg',
    description: 'Add bio / links / contact info here.',
  },
  {
    slug: 'anatomia',
    name: 'ANATOMIA',
    image: '/images/artists/anatomia.jpg',
    description: 'Add bio / links / contact info here.',
  },
  {
    slug: 'antediluvian',
    name: 'ANTEDILUVIAN',
    image: '/images/artists/antediluvian.jpg',
    description: 'Add bio / links / contact info here.',
  },
  {
    slug: 'aphotic',
    name: 'APHOTIC',
    image: '/images/artists/aphotic.jpg',
    description: 'Add bio / links / contact info here.',
  },
]

const artist = computed(() => {
  const found = ARTISTS.find((a) => a.slug === route.params.slug)
  return (
    found || {
      name: 'Artist not found',
      image: '/images/events/varning-font.svg',
      description: 'This artist page does not exist.',
    }
  )
})
</script>

<style scoped>
:root {
  --header-h: 64px;
}

.artist-page {
  min-height: 100vh;
  background: #000;
  color: #e9e9e9;
  padding: calc(var(--header-h) + 3rem) 1rem 4rem;
}

.artist-page-wrap {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.25rem;
  text-decoration: underline;
  color: #e9e9e9;
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.artist-title {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  margin: 0 0 1rem;
}

.artist-hero {
  display: block;
  margin: 0 auto 1rem;
  width: 100%;
  max-width: 760px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.55);
}

.artist-hero img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  filter: grayscale(1) contrast(1.1);
}

.artist-desc {
  color: #d7d7d7;
  font-family: 'Lucky', sans-serif;
  line-height: 1.8;
  font-size: 1rem;
  max-width: 760px;
  margin: 0 auto;
}
</style>

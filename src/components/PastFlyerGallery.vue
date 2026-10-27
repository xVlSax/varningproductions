<template>
  <div class="past-gallery">
    <div class="past-gallery-grid">
      <article v-for="flyer in flyers" :key="flyer.src" class="archive-card">
        <button
          type="button"
          class="archive-button"
          :aria-label="`Open ${flyer.alt}`"
          @click="$emit('select', flyer)"
        >
          <picture>
            <source
              :srcset="flyer.src.replace(/\.(jpe?g|png|webp)$/i, '.avif')"
              type="image/avif"
            />
            <source
              :srcset="flyer.src.replace(/\.(jpe?g|png|webp)$/i, '.webp')"
              type="image/webp"
            />
            <img :src="flyer.src" :alt="flyer.alt" loading="lazy" decoding="async" />
          </picture>
        </button>
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({ flyers: { type: Array, required: true } })
defineEmits(['select'])
</script>

<style scoped>
.past-gallery {
  min-height: 0;
}
.past-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.archive-card {
  min-width: 0;
  min-height: 0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  background: rgba(25, 25, 25, 0.6);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
}
.archive-button {
  all: unset;
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
  border-radius: inherit;
}
.archive-button picture {
  display: block;
  height: 100%;
}
.archive-button img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: contain;
  border-radius: 12px;
}
.archive-button:focus-visible {
  outline: 2px solid #b6f500;
  outline-offset: 3px;
}
@media (min-width: 768px) {
  .past-gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
}
@media (min-width: 1024px) {
  .past-gallery-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: start;
    gap: 1.5rem;
  }
  .archive-button,
  .archive-button picture {
    height: auto;
  }
  .archive-button img {
    height: auto;
    aspect-ratio: auto;
    border-radius: 0;
  }
}
</style>

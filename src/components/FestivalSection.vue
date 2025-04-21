<template>
  <section id="festival" class="snap-start min-h-screen bg-black bg-texture">
    <div class="container mx-auto py-20 px-4 flex flex-col items-center">
      <img
        v-for="(img, index) in festivalImages"
        :key="index"
        :src="img.src"
        :alt="img.alt"
        class="w-full max-w-4xl mb-20 last:mb-0 animate-fade-in"
      />
    </div>
  </section>
</template>

<script setup>
const festivalImages = [
  { src: '/images/festival/festival1.png', alt: 'Festival Poster 1' },
  { src: '/images/festival/festival2.png', alt: 'Festival Poster 2' },
  { src: '/images/festival/festival3.png', alt: 'Festival Poster 3' },
]
</script>

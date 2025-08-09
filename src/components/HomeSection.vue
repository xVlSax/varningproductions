<template>
  <section class="hero-full">
    <video
      class="bgvid"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/images/festival/VarningFestLogo.svg"
    >
      <source src="/videos/varningprod.mp4" type="video/mp4" />
    </video>

    <div class="overlay">
      <router-link to="/festival" class="cta-link">
        <span class="cta-text">ENTER THE FESTIVAL</span>
        <span class="cta-arrow">➜</span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  mounted() {
    // Preload only the most critical flyers
    const flyers = [
      '/images/festival/flyers/MainPoster.webp',
      '/images/festival/flyers/thursday-flyer.webp',
      '/images/festival/flyers/VarningFlyer-Flyer.webp',
      '/images/contact/framtid.webp',
    ]

    flyers.forEach((src) => {
      const img = new Image()
      img.decoding = 'async'
      img.loading = 'eager'
      img.src = src
    })
  },
}
</script>

<style scoped>
.hero-full {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #000;
  margin: 0;
  padding: 0;
}

.bgvid {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75);
}

.overlay {
  position: absolute;
  bottom: 8%; /* slightly closer to bottom */
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.9rem; /* smaller size */
  border: 2px solid #fff;
  border-radius: 9999px;
  text-decoration: none;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.75rem, 1.3vw, 1.1rem); /* smaller font */
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  animation: fadeInUp 1.2s ease forwards;
}

.cta-link:hover {
  background-color: rgba(255, 0, 0, 0.4);
  transform: translateY(-1px) scale(1.03);
}

.cta-arrow {
  display: inline-block;
  animation: arrowMove 1s ease-in-out infinite;
}

/* Arrow pulsing */
@keyframes arrowMove {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6px);
  }
}

/* Fade in + slide up */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Accessibility: no motion */
@media (prefers-reduced-motion: reduce) {
  .cta-arrow {
    animation: none;
  }
}
</style>

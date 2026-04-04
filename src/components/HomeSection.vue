<template>
  <section class="hero-full">
    <video
      class="bgvid"
      :class="{ 'is-ready': videoReady }"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      @loadeddata="onVideoReady"
      @error="onVideoReady"
    >
      <source src="/videos/varningprod.mp4" type="video/mp4" />
    </video>

    <!-- freepalestine svg overlay  -->
    <img class="side-art side-art--right" src="/images/free-pal.svg" alt="" aria-hidden="true" />

    <!-- Varning logo bottom-left overlay -->
    <img class="side-art side-art--left" src="/images/logoVarning.svg" alt="" aria-hidden="true" />

    <!-- <div class="overlay">
      <router-link to="/festival" class="cta-link">
        <span class="cta-text">ENTER THE FESTIVAL</span>
        <span class="cta-arrow">➜</span>
      </router-link>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  data() {
    return { videoReady: false, fallbackTimer: null }
  },
  mounted() {
    // Preload a couple of critical images
    ;[
      '/images/festival/flyers/MainPoster.webp',
      '/images/festival/flyers/thursday-flyer.webp',
      '/images/contact/framtid.webp',
    ].forEach((src) => {
      const img = new Image()
      img.decoding = 'async'
      img.loading = 'eager'
      img.src = src
    })

    this.fallbackTimer = setTimeout(() => (this.videoReady = true), 1500)
  },
  beforeUnmount() {
    clearTimeout(this.fallbackTimer)
  },
  methods: {
    onVideoReady() {
      this.videoReady = true
      clearTimeout(this.fallbackTimer)
    },
  },
}
</script>

<style scoped>
.hero-full {
  --footer-h: 52px;
  position: relative;
  height: calc(100vh - var(--footer-h));
  min-height: calc(100vh - var(--footer-h));
  height: calc(100dvh - var(--footer-h));
  min-height: calc(100dvh - var(--footer-h));
  overflow: hidden;
  margin: 0;
  padding: 0;

  /* svg fallback, it will "fade out" visually as the video fades in */
  background: #000 url('/images/festival/VarningFestLogo.svg') center / contain no-repeat;
}

@media (min-width: 768px) {
  .hero-full {
    --footer-h: 56px;
  }
}

/* Video covers the section but starts transparent */
.bgvid {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: brightness(0.75) blur(6px); */
  transform: scale(1.04);
  transform-origin: center;

  opacity: 0;
  transition: opacity 800ms ease;
}
.bgvid.is-ready {
  opacity: 1;
}

.overlay {
  position: absolute;
  bottom: 8%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.9rem;
  border: 2px solid #fff;
  border-radius: 9999px;
  text-decoration: none;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.75rem, 1.3vw, 1.1rem);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.cta-link:hover {
  background-color: rgba(255, 0, 0, 0.4);
  transform: translateY(-1px) scale(1.03);
}

.cta-arrow {
  display: inline-block;
  animation: arrowMove 1s ease-in-out infinite;
}
@keyframes arrowMove {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6px);
  }
}

/* Base style for overlays */
.side-art {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  height: auto;
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.6));
  opacity: 0.85;
}

/* Right-bottom overlay */
.side-art--right {
  right: 2rem;
  bottom: 1%;
  max-width: clamp(100px, 18vw, 220px);
}

/* Left-bottom overlay */
.side-art--left {
  left: 1rem;
  bottom: 3%;
  max-width: clamp(65px, 7vw, 165px);
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .overlay {
    bottom: 16%;
  }
  .side-art--right {
    display: none;
  }
  .side-art--left {
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2%;
    max-width: clamp(48px, 15vw, 78px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bgvid {
    transition: none;
  }

  .cta-arrow {
    animation: none;
  }
}
</style>

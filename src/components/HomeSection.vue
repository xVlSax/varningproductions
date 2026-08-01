<template>
  <section class="hero-full">
    <video
      ref="heroVideo"
      class="bgvid"
      :class="{ 'is-ready': videoReady }"
      :src="videoSrc || undefined"
      poster="/images/VarningFestLogo-home.webp"
      autoplay
      muted
      loop
      playsinline
      preload="none"
      @loadeddata="onVideoReady"
      @error="onVideoReady"
    ></video>

    <!-- freepalestine svg overlay  -->
    <img
      class="side-art side-art--right"
      src="/images/free-pal.webp"
      width="440"
      height="178"
      alt=""
      decoding="async"
      aria-hidden="true"
    />

    <!-- Varning logo bottom-left overlay -->
    <img
      class="side-art side-art--left"
      src="/images/logoVarning1.webp"
      width="330"
      height="326"
      alt="logo-varning"
      decoding="async"
      aria-hidden="true"
    />

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
    return {
      videoReady: false,
      videoSrc: '',
      fallbackTimer: null,
      videoStartHandle: null,
      videoStartUsesIdleCallback: false,
    }
  },
  mounted() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveDataEnabled = navigator.connection?.saveData

    if (prefersReducedMotion || saveDataEnabled) {
      this.videoReady = true
      return
    }

    const startVideo = () => {
      this.videoStartHandle = null
      this.videoSrc = '/videos/varningprod-720p.mp4'

      this.$nextTick(() => {
        const video = this.$refs.heroVideo
        video?.load()
        video?.play().catch(() => {})
      })
    }

    if ('requestIdleCallback' in window) {
      this.videoStartUsesIdleCallback = true
      this.videoStartHandle = window.requestIdleCallback(startVideo, { timeout: 600 })
    } else {
      this.videoStartHandle = window.setTimeout(startVideo, 100)
    }

    this.fallbackTimer = window.setTimeout(() => (this.videoReady = true), 1800)
  },
  beforeUnmount() {
    window.clearTimeout(this.fallbackTimer)

    if (this.videoStartHandle === null) return

    if (this.videoStartUsesIdleCallback) {
      window.cancelIdleCallback(this.videoStartHandle)
    } else {
      window.clearTimeout(this.videoStartHandle)
    }
  },
  methods: {
    onVideoReady() {
      this.videoReady = true
      window.clearTimeout(this.fallbackTimer)
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
  background: #000 url('/images/VarningFestLogo-home.webp') center / contain no-repeat;
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

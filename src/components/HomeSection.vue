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

    <!-- <div class="hero-flyers" :class="{ 'is-ready': videoReady }" aria-label="Featured festival flyers">
      <div class="hero-flyer hero-flyer--left">
        <picture class="hero-flyer-frame">
          <source srcset="/images/festival/flyers/MainPoster.avif" type="image/avif" />
          <source srcset="/images/festival/flyers/MainPoster.webp" type="image/webp" />
          <img src="/images/festival/flyers/MainPoster.jpg" alt="Varning Festival main poster" />
        </picture>
      </div>

      <div class="hero-flyer hero-flyer--right">
        <picture class="hero-flyer-frame">
          <source srcset="/images/festival/flyers/thursday-flyer.avif" type="image/avif" />
          <source srcset="/images/festival/flyers/thursday-flyer.webp" type="image/webp" />
          <img src="/images/festival/flyers/thursday-flyer.jpg" alt="Varning Festival Thursday flyer" />
        </picture>
      </div>
    </div> -->

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
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;

  /* svg fallback, it will "fade out" visually as the video fades in */
  background: #000 url('/images/festival/VarningFestLogo.svg') center / contain no-repeat;
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
/*
.hero-flyers {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 6vw, 5rem);
  padding: 2rem;
  pointer-events: none;
}

.hero-flyer {
  width: min(28vw, 290px);
  opacity: 0;
  will-change: transform, opacity;
  transition:
    opacity 900ms ease,
    transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-flyer--left {
  transform: translate3d(2.5rem, 2rem, 0) rotate(-8deg) scale(0.9);
}

.hero-flyer--right {
  transform: translate3d(-2.5rem, -2rem, 0) rotate(8deg) scale(0.9);
  transition-delay: 140ms;
}

.hero-flyers.is-ready .hero-flyer--left {
  opacity: 1;
  transform: translate3d(0, 0.5rem, 0) rotate(-5deg) scale(1);
}

.hero-flyers.is-ready .hero-flyer--right {
  opacity: 1;
  transform: translate3d(0, -0.5rem, 0) rotate(5deg) scale(1);
}

.hero-flyer-frame {
  display: block;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(15, 15, 15, 0.45);
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.hero-flyer--left .hero-flyer-frame {
  animation: flyerFloatLeft 8s ease-in-out infinite 1.1s;
}

.hero-flyer--right .hero-flyer-frame {
  animation: flyerFloatRight 8s ease-in-out infinite 1.4s;
}

.hero-flyer-frame img {
  display: block;
  width: 100%;
  height: auto;
} */

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

/* @keyframes flyerFloatLeft {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.015);
  }
}

@keyframes flyerFloatRight {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(10px) scale(1.015);
  }
} */

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
  /* .hero-flyers {
    padding: 1.25rem;
    gap: 1rem;
  }
  .hero-flyer {
    width: min(40vw, 180px);
  }
  .hero-flyer--left {
    transform: translate3d(1.25rem, 1rem, 0) rotate(-6deg) scale(0.92);
  }
  .hero-flyer--right {
    transform: translate3d(-1.25rem, -1rem, 0) rotate(6deg) scale(0.92);
  }
  .hero-flyers.is-ready .hero-flyer--left {
    transform: translate3d(0, 0.35rem, 0) rotate(-4deg) scale(1);
  }
  .hero-flyers.is-ready .hero-flyer--right {
    transform: translate3d(0, -0.35rem, 0) rotate(4deg) scale(1);
  } */
  .overlay {
    bottom: 16%;
  }
  .side-art--right {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4%;
    max-width: clamp(90px, 50vw, 150px);
  }
  .side-art--left {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bgvid {
    transition: none;
  }
  /* .hero-flyer {
    transition: none;
  }
  .hero-flyer-frame {
    animation: none;
  } */
  .cta-arrow {
    animation: none;
  }
}
</style>

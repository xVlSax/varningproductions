<template>
  <!-- Page 1: About us -->
  <section
    id="about"
    class="about-root min-h-screen relative flex flex-col md:flex-row items-center justify-center p-4"
  >
    <!-- Bottom-left skulls -->
    <img
      src="/images/about/AboutImage.svg"
      alt="skull punks"
      class="about-img float-slow fade-in-left"
    />

    <!-- Text Right side: About us -->
    <div class="about-text fade-in-right">
      <h4 class="title">About us</h4>
      <p class="copy">
        Varning Productions is a booking event project founded by Janick in 2006 with the opening of
        her co-managed venue The Katacombes in Montreal, Canada. Since then, Varning Productions has
        organized over 250 punk shows, tours and its own festival: A VARNING FROM MONTREAL FESTIVAL
        that has been bringing bands from across the globe since 2007. VARNING FESTIVAL is more than
        just a punk festival—it’s a gathering of passionate people from around the world, united by
        loud music, D.I.Y. spirit, and a shared love for underground culture. The festival was
        launched in 2007 to celebrate the first anniversary of Katacombes, a legendary cooperative
        venue in Montreal that became a home for countless artists, outsiders, and communities.
        Though Katacombes closed in 2020, its legacy lives on through every edition of A VARNING
        FROM MONTREAL FESTIVAL.
        <br /><br />
        We believe punk is more than music—it’s about community and is a space where everyone is
        welcome. We stand firmly against racism, fascism, sexism, homophobia, and all forms of
        exclusion. It’s a place to connect, create, express, built on solidarity, noise, and
        respect. UP THE PUNX TABARNAK!
      </p>
    </div>
  </section>

  <!-- Page 2: Why we do it + world map -->
  <section
    id="why"
    class="why-root min-h-screen relative flex flex-col md:flex-row items-center justify-center p-4"
  >
    <!-- world map bottom right-->
    <img
      src="/images/about/world-map.svg"
      alt="world map"
      class="world-img float-slow fade-in-right"
    />
    <!-- Left side text -->
    <div class="why-text fade-in-left">
      <h4 class="title">Why we do it</h4>
      <h5 class="sub-title">Promoting bands internationally</h5>
      <p class="copy">
        VARNING PRODUCTION is focused on both uncovering emerging talent and creating opportunities
        for collaboration between new and established bands within the underground music scene. That
        way, it can foster creative synergy and help develop the next wave of artists while also
        supporting those with a larger following. The genres —punk metal, post-punk, pop punk, synth
        punk—are all part of the broader underground scene that often values authenticity and
        experimentation. By connecting new bands with more established acts, VARNING PRODUCTION can
        create a space where both groups can influence and inspire each other, leading to fresh
        sounds and innovative musical expressions.
      </p>
      <h5 class="sub-title">Creating a underground network</h5>
      <p class="copy">
        VARNING PRODUCTIONS has some exciting ambitions to grow its underground network and expand
        internationally, which can provide a lot of opportunities for both bands and promoters.
      </p>
    </div>
  </section>
</template>

<script>
export default { name: 'AboutSection' }
</script>

<style scoped>
/* Desktop-first layout */
.about-root {
  /* reserve left space for skull image so text doesn’t overlap */
  padding-left: clamp(320px, 28vw, 420px);
}

.about-img {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  width: clamp(275px, 51vw, 570px);
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.6));
}

.about-text {
  margin-top: -5rem;
  margin-left: auto;
  margin-right: clamp(1rem, 4vw, 3rem);
  max-width: 750px;
  text-align: justify;
}

.about-text .title {
  text-align: right;
}

/* ---------------- Page 2 (Why) ---------------- */
.why-root {
  /* reserve right space for world map */
  padding-right: clamp(320px, 28vw, 420px);
}

/* World map bottom-right */
.world-img {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  width: clamp(305px, 81vw, 650px);
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.6));
}

/* Left column: Why we do it (vertically centered, left-ish) */
.why-text {
  margin-top: -5rem;
  margin-left: 3rem;
  margin-right: auto;
  max-width: 750px;
}

.title {
  color: #e9e9e9;
  font-weight: 800;
  font-size: clamp(1.2rem, 3.2vw, 2.1rem);
  letter-spacing: 0.02em;
  margin: 0 0 0.5rem 0;
  font-family: 'TypeWriter1', sans-serif;
}

.sub-title {
  color: #e9e9e9;
  margin: 0.75rem 0 0.25rem 0;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.15rem);
  font-family: 'TypeWriter1', sans-serif;
}

.copy {
  font-family: sans-serif;
  color: #d7d7d7;
  line-height: 1.7;
  font-size: clamp(0.98rem, 1.25vw, 1.08rem);
  font-family: 'Lucky', sans-serif;
}

/* Tablet “in-between” fix (avoid overlap before mobile) */
@media (max-width: 1100px) {
  .about-root {
    padding-left: clamp(160px, 22vw, 300px);
  }
  .about-img {
    width: clamp(220px, 32vw, 380px);
    bottom: 1rem;
    left: 1rem;
  }
  .about-text {
    margin-right: 1.25rem;
    max-width: 640px;
  }
}

/* Switch to stacked layout earlier (tablet) to guarantee no collisions */
@media (max-width: 900px) {
  .about-root {
    padding-left: 0;
  }

  .about-img {
    position: static;
    order: 2;
    margin-top: 1.25rem;
    align-self: center;
    width: clamp(260px, 70vw, 520px);
    opacity: 0.95;
  }

  .about-text {
    margin: 0 auto;
    text-align: center;
    max-width: 720px;
    order: 1;
  }

  .why-root {
    padding-right: 0;
  }

  .why-text {
    margin: 0 auto;
    max-width: 720px;
    text-align: center;
    order: 1;
  }

  .world-img {
    position: static;
    order: 2;
    align-self: center;
    margin-top: 1.25rem;
    width: clamp(260px, 70vw, 520px);
    opacity: 0.95;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .title {
    font-size: 2rem;
  }

  .about-text .title {
    text-align: center;
  }

  .about-text,
  .why-text {
    text-align: center;
    margin-top: 5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .about-img,
  .world-img {
    align-self: center;
    width: clamp(220px, 85vw, 340px);
    margin-top: 1rem;
  }
  .world-img {
    width: clamp(240px, 105vw, 360px);
  }
}

/* Subtle motion */
.float-slow {
  animation: floatY 5.5s ease-in-out infinite;
}
@keyframes floatY {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.fade-in-left {
  opacity: 0;
  transform: translateX(-18px);
  animation: fadeLeft 0.7s ease-out forwards 0.1s;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(18px);
  animation: fadeRight 0.7s ease-out forwards 0.18s;
}
@keyframes fadeLeft {
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeRight {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .float-slow,
  .fade-in-left,
  .fade-in-right {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>

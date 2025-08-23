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
      <h4 class="title">ABOUT US</h4>
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
  <!-- <section
    id="why"
    class="why-root min-h-screen relative flex flex-col md:flex-row items-center justify-center p-4"
  > -->
  <!-- world map bottom right-->
  <!-- <img
      src="/images/about/world-map.svg"
      alt="world map"
      class="world-img float-slow fade-in-right"
    /> -->
  <!-- Left side text -->
  <!-- <div class="why-text fade-in-left">
      <h4 class="title">WHY WE DO IT</h4>
      <h5 class="sub-title">PROMOTING BANDS INTERNATIONALLY</h5>
      <p class="copy">
        VARNING PRODUCTION is focused on both uncovering emerging talent and creating opportunities
        for collaboration between new and established bands within the underground music scene. That
        way, it can foster creative synergy and help develop the next wave of artists while also
        supporting those with a larger following. The genres - punk, metal, post-punk, pop punk,
        synth punk — are all part of the broader underground scene that often values authenticity
        and experimentation. By connecting new bands with more established acts, VARNING PRODUCTION
        can create a space where both groups can influence and inspire each other, leading to fresh
        sounds and innovative musical expressions.
      </p>
      <h5 class="sub-title">NEW DIRECTIONS FOR VARNING PRODUCTIONS</h5>
      <p class="copy">
        We are growing our underground network and expanding internationally and we want to provide
        more opportunities for promoting bands that we like and we have decided to add a
        touring/driving service for bands that don’t have time nor the contacts to organize their
        tour themselves. As of 2025, VARNING PRODUCTIONS is offering a turnkey service of organizing
        and driving bands on tour in Northern Europe (comes with a 9 seater van, a driver and a full
        backline). The itinerary will bring bands to Scandinavia, the Baltics, northern Poland and
        northern Germany. We will provide a second itinerary option in the year to come.
      </p>
    </div>
  </section> -->

  <!-- Page 3: About us profile -->
  <section id="profile" class="profile-root min-h-screen relative p-4">
    <h2 class="title">IN THE SCENE / FOR THE SCENE</h2>
    <div class="profile-grid">
      <!-- LEFT: Janick -->
      <article class="profile-card fade-in-left">
        <!-- <img
          src="/images/about/janick.jpg"
          alt="Janick Varning"
          class="profile-img"
          loading="lazy"
          decoding="async"
        /> -->
        <picture class="profile-img">
          <source srcset="/images/about/janick.avif" type="image/avif" />
          <source srcset="/images/about/janick.webp" type="image/webp" />
          <img
            src="/images/about/janick.jpg"
            class="profile-img"
            alt="Janick Varning"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="profile-text">
          <h5 class="sub-title">JANICK VARNING</h5>
          <p class="profile-info">
            From Montreal, Canada, Janick is a passionate music lover and has been in the punk scene
            for the past 30 years. She has played in numerous bands since she was 18years old
            (Fierce, Hellbound, After The Bombs, Parasytes, Fractured, etc.). In 1998 she started a
            live music venue called L’X and started booking shows and organizing tours. In 2006, she
            opened another venue that ended up being one of the most established and influential
            punk metal venues in Canada: The Katacombes (2006-2020) that led her to putting up one
            of the longest lasting punk festivals in the world: A Varning from Montreal Festival
            (2007 - present).
          </p>
        </div>
      </article>

      <!-- RIGHT: Vlad -->
      <article class="profile-card fade-in-right">
        <!-- <img
          src="/images/about/vlad.jpg"
          alt="Vlad Sant"
          class="profile-img"
          loading="lazy"
          decoding="async"
        /> -->
        <picture class="profile-img">
          <source srcset="/images/about/vlad.avif" type="image/avif" />
          <source srcset="/images/about/vlad.webp" type="image/webp" />
          <img
            src="/images/about/vlad.jpg"
            class="profile-img"
            alt="Vlad Sant"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="profile-text">
          <h5 class="sub-title">VLAD SANT</h5>
          <p class="profile-info">
            From Lima, Peru, Vlad has been involved in the punk scene since his early teens, playing
            in bands, organizing shows and touring across South America. He moved to Stockholm over
            many years ago, where he continued playing and supporting the DIY punk community while
            also expanding his technical expertise. Vlad has developed strong IT skills, working
            with coding, internet platforms, and IT solutions for companies. He has recently joined
            the Varning Productions team and his skills makes him a particularly great asset and
            will ensure its presence on the net as well as taking care of the technical and
            logistical aspects of management.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default { name: 'AboutSection' }
</script>

<style scoped>
.about-root {
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

.why-root {
  padding-right: clamp(320px, 28vw, 420px);
}

.world-img {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  width: clamp(305px, 81vw, 650px);
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.6));
}

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
  font-weight: 800;
  font-size: clamp(1.3rem, 2vw, 1.15rem);
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.copy {
  font-family: sans-serif;
  color: #d7d7d7;
  line-height: 1.7;
  font-size: clamp(0.98rem, 1.25vw, 1.08rem);
  font-family: 'Lucky', sans-serif;
}

.profile-root {
  background: #000;
  color: #e9e9e9;
  display: grid;
  place-items: center;
  padding: 5rem 1rem;
}

.profile-grid {
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  align-items: start;
  padding: 0 1rem;
}

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

@media (max-width: 1200px) {
  .about-root {
    padding-left: clamp(200px, 22vw, 300px);
  }
  .about-img {
    width: clamp(220px, 34vw, 360px);
  }
  .about-text {
    margin-right: 1.25rem;
    max-width: 540px;
  }
}

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
  .title {
    font-size: 2rem;
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

@media (max-height: 700px) {
  .about-text {
    margin-top: 4rem;
    max-width: 640px;
  }
  .copy {
    font-size: 0.9rem;
  }
  .about-img {
    width: clamp(220px, 34vw, 330px);
  }
}

@media (min-width: 900px) {
  .title {
    font-size: 2rem;
  }
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    /* max-width: 1200px; */
    align-items: stretch;
  }
  .profile-root .title {
    margin-bottom: 2rem;
  }

  .profile-root {
    padding: 3rem 2rem;
  }
}

.profile-card {
  background: rgba(25, 25, 25, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.profile-img {
  width: 100%;
  aspect-ratio: 8 / 8;
  /* object-fit: cover;
  object-position: 50% 60%; */
}

.profile-text {
  flex: 1;
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.profile-root .title {
  margin: 0 0 3rem 0;
  text-align: center;
}

.profile-info {
  color: #d7d7d7;
  line-height: 1.7;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  font-family: 'Lucky', sans-serif;
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
  .profile-root {
    padding: 5rem 1rem;
  }
  .profile-grid {
    padding: 0 0.5rem;
    max-width: 100%;
    gap: 2rem;
  }
  .profile-card {
    width: 100%;
  }
  .profile-text {
    padding: 0.9rem 0.95rem 1.1rem;
  }
}

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

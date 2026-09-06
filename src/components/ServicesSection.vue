<template>
  <section id="services" class="services-root">
    <h1 class="sr-only">Punk tour booking, show production and promotion services</h1>
    <div class="services-grid">
      <!-- Card 1 -->
      <article class="service-card">
        <picture>
          <!-- New formats first -->
          <source srcset="/images/services/stage.avif" type="image/avif" />
          <source srcset="/images/services/stage.webp" type="image/webp" />
          <!-- Fallback JPG -->
          <img src="/images/services/stage.webp" alt="Booking" loading="lazy" class="service-img" />
        </picture>
        <h5 class="service-title">BOOKING YOUR BAND AND/OR YOUR VENUE</h5>
        <p class="service-text">
          <strong>Varning Productions</strong> has booked over 250 shows since its inception in
          2007, working with an average of 600 bands from North America, Central America, South
          America, Europe, Japan, and Australia. Whether you're a band looking for representation or
          an agent seeking to book acts, we can handle the process for you—whether it's for shows in
          North, Central, or South America, or Europe.
        </p>
      </article>

      <!-- Card 2 -->
      <article class="service-card">
        <picture>
          <!-- New formats first -->
          <source srcset="/images/services/endofpollution.avif" type="image/avif" />
          <source srcset="/images/services/endofpollution.webp" type="image/webp" />
          <!-- Fallback JPG -->
          <img
            src="/images/services/endofpollution.webp"
            alt="Varning Festival"
            loading="lazy"
            class="service-img"
          />
        </picture>
        <h5 class="service-title">A VARNING FROM MONTREAL FESTIVAL</h5>
        <p class="service-text">
          One of <strong>Varning Productions</strong>' annual events is A Varning From Montreal
          Festival. As of 2025, the festival is celebrating its 17th edition, a testament to the
          dedication and passion behind the event. Over the years, the festival has become an
          important platform for showcasing both emerging talent and established acts from a wide
          range of genres, often with a focus on underground, punk, metal, and other alternative
          subcultures. The festival and <strong>Varning Productions</strong> as a whole have
          contributed significantly to the growth of Montreal's reputation as a hub for live music
          and alternative culture.
        </p>
      </article>

      <!-- Card 3 -->
      <article class="service-card">
        <picture>
          <!-- New formats first -->
          <source srcset="/images/services/stagecase.avif" type="image/avif" />
          <source srcset="/images/services/stagecase.webp" type="image/webp" />
          <!-- Fallback JPG -->
          <img
            src="/images/services/stagecase.webp"
            alt="Tours"
            loading="lazy"
            class="service-img"
          />
        </picture>
        <h5 class="service-title">BOOKING TOURS</h5>
        <p class="service-text">
          <strong>Varning Productions</strong> has been organizing tours almost exclusively for
          bands playing its festival to help cover travel expenses, accommodation, and other
          logistical needs while also giving them exposure across multiple cities and venues. We
          have built a solid foundation with promoters in U.S.A. and Canada and we also have a lot
          of contacts outside America and are now looking to expand that service to full tours
          across Europe, Scandinavia and the Baltics. Let us help you book your next tour and ensure
          a smooth and professional experience from start to finish.
        </p>
      </article>

      <!-- Card 4 -->
      <article class="service-card">
        <picture>
          <!-- New formats first -->
          <source srcset="/images/services/merch.avif" type="image/avif" />
          <source srcset="/images/services/merch.webp" type="image/webp" />
          <!-- Fallback JPG -->
          <img src="/images/services/merch.webp" alt="Merch" loading="lazy" class="service-img" />
        </picture>
        <h5 class="service-title">MERCH & PROMO</h5>
        <p class="service-text">
          We can take care of getting your band’s merch made, shirts, posters, pins, patches,
          stickers, and more. All crafted with local folks and artists who live the same D.I.Y.
          ethic. Underground promo, made by the scene, for the scene.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
}
</script>

<style scoped>
/* Section */
.services-root {
  min-height: 100vh;
  background: #000;
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
  color: #e9e9e9;
}

/* Grid */
.services-grid {
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 1.75rem;
  grid-template-columns: 1fr;
  margin-top: 4rem;
}

/* 2 columns on tablets */
@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6rem;
  }
}

/* 3 columns on desktop */
@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 6rem;
  }
}

/* Card */
.service-card {
  background: rgba(25, 25, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.45);
}

/* Image */
.service-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

/* Text */
.service-title {
  margin: 1.3rem 1rem 1rem 1rem;
  font-family: 'Lucky', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  color: #ffffff;
}

.service-text {
  margin: 0 1rem 1rem 1rem;
  color: #d2d2d2;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.6vw, 1rem);
  font-family: 'sans-serif', sans-serif;
}

/* Small spacing tweak on very small screens */
@media (max-width: 360px) {
  .service-title {
    margin: 0.75rem 0.75rem 0.2rem;
  }
  .service-text {
    margin: 0 0.75rem 0.75rem;
  }
}
</style>

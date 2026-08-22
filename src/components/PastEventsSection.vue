<template>
  <section id="events" class="events-root">
    <div class="events-wrap">
      <!-- Past Events -->
      <h2 class="events-title">Past Events</h2>
      <div class="flyers-grid">
        <article v-for="f in sortedPastEventsFlyers" :key="f.src" class="flyer-card">
          <button class="flyer-btn" @click="openModal(f)">
            <picture>
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
              <source :srcset="f.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
              <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" class="flyer-img" />
            </picture>
          </button>
        </article>
      </div>
    </div>

    <!-- Lightbox modal -->
    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="active.alt || 'Flyer preview'"
        @click.self="closeModal"
      >
        <div class="modal-content">
          <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>

          <picture class="modal-picture">
            <source :srcset="active.src.replace(/\.(jpg|png)$/i, '.avif')" type="image/avif" />
            <source :srcset="active.src.replace(/\.(jpg|png)$/i, '.webp')" type="image/webp" />
            <img :src="active.src" :alt="active.alt" class="modal-img" />
          </picture>

          <p class="modal-caption">{{ active.alt }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'EventSection',
  data() {
    return {
      pastEventsFlyers: [
        {
          src: '/images/events/past/events/varning-benefit-july.jpg',
          alt: 'Varning XVIII benefit show volume two',
          date: '2026-07-04',
        },
        {
          src: '/images/events/past/events/dhk-sthlm-june.jpg',
          alt: 'DHK Stockholm show',
          date: '2026-06-16',
        },
        {
          src: '/images/events/past/events/varning-benefit-may.jpg',
          alt: 'Varning XVIII benefit show volume one',
          date: '2026-05-01',
        },
        {
          src: '/images/events/past/events/dishonor-stockholm-2026.jpg',
          alt: 'Dishonor Stockholm show',
          date: '2026-04-21',
        },
        {
          src: '/images/events/past/events/stockholm-gig-flyer.jpg',
          alt: 'Misanthropic and Dissekerad Stockholm show',
          date: '2024-04-24',
        },
        {
          src: '/images/events/past/events/enzyme-agus26-2023.jpg',
          alt: 'Enzyme',
          date: '2023-08-26',
        },
        {
          src: '/images/events/past/events/la-fraction-june-29th-2023.jpg',
          alt: 'La Fraction',
          date: '2023-06-29',
        },
        {
          src: '/images/events/past/events/schedule1-mtlposter-fullres.jpg',
          alt: 'Schedule 1 Montreal show',
          date: '2023-05-20',
        },
        {
          src: '/images/events/past/events/lifeless-dark-2023.jpg',
          alt: 'Lifeless Dark Montreal show',
          date: '2023-04-15',
        },
        {
          src: '/images/events/past/events/poster-longknife.jpg',
          alt: 'Long Knife Montreal show',
          date: '2022-11-12',
        },
        {
          src: '/images/events/past/events/poster-memorial.jpg',
          alt: 'Dropdead memorial show for Steve',
          date: '2022-10-22',
        },
        {
          src: '/images/events/past/events/hellshock-poster.jpg',
          alt: 'Hellshock Montreal show',
          date: '2022-08-14',
        },
        {
          src: '/images/events/past/events/absolut-june18-2022.jpg',
          alt: 'Absolut',
          date: '2022-06-18',
        },
        {
          src: '/images/events/past/events/mtlposter-v3.jpg',
          alt: 'Napalm Raid Montreal show',
          date: '2022-05-25',
        },
        {
          src: '/images/events/past/events/restarts-flyer-june-26th-2020.jpg',
          alt: 'The Restarts Montreal show',
          date: '2020-06-26',
        },
        {
          src: '/images/events/past/events/cartridge-january28-2020.jpg',
          alt: 'Cartridge',
          date: '2020-01-28',
        },
        {
          src: '/images/events/past/events/voivod-katacombes-lowres.jpg',
          alt: 'Voivod at Katacombes',
          date: '2019-12-28',
        },
        {
          src: '/images/events/past/events/flyer-metalian-sept-20th-2019.jpg',
          alt: 'Metalian Montreal show',
          date: '2019-09-20',
        },
        {
          src: '/images/events/past/events/flyer-swordwielder-aug-24th-2019.jpg',
          alt: 'Swordwielder Montreal show',
          date: '2019-08-24',
        },
        {
          src: '/images/events/past/events/flyer-frantic-28-juillet-2019.jpg',
          alt: 'Frantic Montreal show',
          date: '2019-07-28',
        },
        {
          src: '/images/events/past/events/varukers-june22-2019.jpg',
          alt: 'The Varukers',
          date: '2019-06-22',
        },
        {
          src: '/images/events/past/events/flyer-parasytes-last-show-may-24th-2019.jpg',
          alt: 'Parasytes last show',
          date: '2019-05-24',
        },
        {
          src: '/images/events/past/events/decomp-april16-2019.jpg',
          alt: 'Decomp',
          date: '2019-04-16',
        },
        {
          src: '/images/events/past/events/flyer-dark-thoughts-march-3rd-2019.jpg',
          alt: 'Dark Thoughts Montreal show',
          date: '2019-03-03',
        },
        {
          src: '/images/events/past/events/flyer-last-agony-feb-9th-2019.jpg',
          alt: 'Last Agony Montreal show',
          date: '2019-02-09',
        },
        {
          src: '/images/events/past/events/oipolloi-nov17-2018.jpg',
          alt: 'Oi Polloi',
          date: '2018-11-17',
        },
        {
          src: '/images/events/past/events/muro-flyer-katacombes-2018.png',
          alt: 'Muro at Katacombes',
          date: '2018-10-27',
        },
        {
          src: '/images/events/past/events/flyer-pms-84-aug-22nd-2018.jpg',
          alt: 'PMS 84 Montreal show',
          date: '2018-08-22',
        },
        {
          src: '/images/events/past/events/flyer-gs-final-aug-5th-2018.jpg',
          alt: 'Gasmiasma Montreal show',
          date: '2018-08-05',
        },
        {
          src: '/images/events/past/events/flyer-fragment-april-21th-2018.jpg',
          alt: 'Fragment Montreal show',
          date: '2018-04-21',
        },
        {
          src: '/images/events/past/events/articflowers-march4-2018.jpg',
          alt: 'Arctic Flowers',
          date: '2018-03-04',
        },
        {
          src: '/images/events/past/events/flyer-nye-decade-dec-31st-2017.jpg',
          alt: 'New Year Eve decade show',
          date: '2017-12-31',
        },
        {
          src: '/images/events/past/events/subhumanz-nov24-2017.jpg',
          alt: 'Subhumans',
          date: '2017-11-24',
        },
        {
          src: '/images/events/past/events/flyer-hardcharger-aug-11th-2017.jpg',
          alt: 'Hard Charger Montreal show',
          date: '2017-08-11',
        },
        {
          src: '/images/events/past/events/flyer-july-13th-2017.jpg',
          alt: 'Montreal punk show July 13',
          date: '2017-07-13',
        },
        {
          src: '/images/events/past/events/flyer-e-n-t-june-29th-2017.jpg',
          alt: 'Extreme Noise Terror Montreal show',
          date: '2017-06-29',
        },
        {
          src: '/images/events/past/events/flyer-disterror-may-21st-2017.jpg',
          alt: 'Dist Error Montreal show',
          date: '2017-05-21',
        },
        {
          src: '/images/events/past/events/flyer-hatewolf-may-11th-2017.jpg',
          alt: 'Hatewolf Montreal show',
          date: '2017-05-11',
        },
        {
          src: '/images/events/past/events/nye-dec31-2016.jpg',
          alt: 'New Year Eve show',
          date: '2016-12-31',
        },
        {
          src: '/images/events/past/events/ryuketsu-blizzard-2016.jpg',
          alt: 'Ryuketsu Blizzard Montreal show',
          date: '2016-09',
        },
        {
          src: '/images/events/past/events/screamdead-flyer.jpg',
          alt: 'Screaming Dead Montreal show',
          date: '2016-06-17',
        },
        {
          src: '/images/events/past/events/flyer-pox-9-avril-2016.jpg',
          alt: 'Pox Montreal show',
          date: '2016-04-09',
        },
        {
          src: '/images/events/past/events/sonny-vincent-poster-mtl-tempo.jpg',
          alt: 'Sonny Vincent at Katacombes',
          date: '2015-10-17',
        },
        {
          src: '/images/events/past/events/doa-sept22-2015.jpg',
          alt: 'DOA',
          date: '2015-09-22',
        },
        {
          src: '/images/events/past/events/warcry-flyer-nov-18th-2014.jpg',
          alt: 'Warcry Montreal show',
          date: '2014-11-18',
        },
        {
          src: '/images/events/past/events/flyer-kicker-bon.jpg',
          alt: 'Kicker at Katacombes',
          date: '2014-09-26',
        },
        {
          src: '/images/events/past/events/bellicoseminds-sept13-2014.jpg',
          alt: 'The Bellicose Minds',
          date: '2014-09-13',
        },
        {
          src: '/images/events/past/events/flyer-gs-august-7th-2014.jpg',
          alt: 'Gasmiasma Montreal show',
          date: '2014-08-07',
        },
        {
          src: '/images/events/past/events/flyer-pmma-show-mtl-july-8th-2014.jpg',
          alt: 'P.M.M.A. Montreal show',
          date: '2014-07-08',
        },
        {
          src: '/images/events/past/events/flyer-cress-july-5th-2014.jpg',
          alt: 'Cress Montreal show',
          date: '2014-07-05',
        },
        {
          src: '/images/events/past/events/cress-april-2014.jpg',
          alt: 'Cress North American tour',
          date: '2014-07-05',
        },
        {
          src: '/images/events/past/events/anasazi-june28-2014.jpg',
          alt: 'Anasazi',
          date: '2014-06-28',
        },
        {
          src: '/images/events/past/events/flyer-eus-arse-tinted-version.jpg',
          alt: 'Eus Arse Montreal show',
          date: '2014-05-18',
        },
        {
          src: '/images/events/past/events/flyer-wankys-new.jpg',
          alt: 'The Wankys at Katacombes',
          date: '2014-05-10',
        },
        {
          src: '/images/events/past/events/flyer-the-blood-montreal-dec-1st-bon-2012.jpg',
          alt: 'The Blood Montreal show',
          date: '2012-12-01',
        },
        {
          src: '/images/events/past/events/flyer-forward-good.jpg',
          alt: 'Forward at Katacombes',
          date: '2012-11-03',
        },
        {
          src: '/images/events/past/events/dclone-oct13-2012.jpg',
          alt: 'D-Clone',
          date: '2012-10-13',
        },
        {
          src: '/images/events/past/events/avengers-aug1-2010.jpg',
          alt: 'Avengers',
          date: '2010-08-01',
        },
      ],
      isModalOpen: false,
      active: { src: '', alt: '' },
    }
  },
  computed: {
    sortedPastEventsFlyers() {
      return [...this.pastEventsFlyers].sort((a, b) => b.date.localeCompare(a.date))
    },
  },
  methods: {
    openModal(f) {
      this.active = f
      this.isModalOpen = true
      document.documentElement.classList.add('no-scroll')
      window.addEventListener('keydown', this.onKey)
    },
    closeModal() {
      this.isModalOpen = false
      document.documentElement.classList.remove('no-scroll')
      window.removeEventListener('keydown', this.onKey)
    },
    onKey(e) {
      if (e.key === 'Escape') this.closeModal()
    },
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKey)
    document.documentElement.classList.remove('no-scroll')
  },
}
</script>

<style scoped>
:root {
  --header-h: 64px;
}

/* page layout */
.events-root {
  min-height: 100vh;
  background: #000;
  color: #e9e9e9;
  padding: calc(var(--header-h) + 3rem) 1rem 3rem;
  margin-top: 5rem;
  scroll-margin-top: var(--header-h);
}
.events-wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* logo + headings */
.logo-varning {
  width: min(70%, 360px);
  height: auto;
  margin-inline: auto;
  display: block;
  margin-bottom: -1rem;
}
.events-title {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px 0 rgba(182, 245, 0, 0.38);
  text-transform: uppercase;
  margin: 1.5rem 0 1.5rem;
}
.events-title {
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
}
.events-subtitle {
  font-size: clamp(1rem, 2vw, 1.35rem);
  margin-top: 1.5rem;
}

/* main poster */
.main-poster {
  display: block;
  margin: 0.75rem auto 0;
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}
.main-poster img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* grid */
.flyers-grid {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 768px) {
  .flyers-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}
@media (min-width: 1024px) {
  .flyers-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

/* cards */
.flyer-card {
  background: rgba(25, 25, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}
.flyer-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}

.flyer-btn {
  all: unset;
  cursor: zoom-in;
  display: block;
  width: 100%;
}
.flyer-img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
}

.no-scroll {
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.75);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.modal-content {
  position: relative;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  width: min(50vw, 555px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}
.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 38px;
  height: 38px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
}
.modal-picture {
  width: 100%;
  flex: 1 1 auto;
  display: block;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.modal-caption {
  margin: 0.5rem 0.9rem 0.9rem;
  color: #d8d8d8;
  font-size: 0.95rem;
  text-align: center;
}

/* mobile tweaks */
@media (max-width: 640px) {
  .modal-content {
    width: 90vw;
    margin: auto;
    max-height: 80vh;
  }
  .modal-close {
    width: 34px;
    height: 34px;
    font-size: 1rem;
  }
  .modal-caption {
    font-size: 0.9rem;
  }
}
</style>

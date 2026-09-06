<template>
  <section class="things-page">
    <div class="things-noise" aria-hidden="true"></div>

    <header class="things-hero">
      <h1 class="things-title" aria-label="Things to do in Montreal">
        <span>Things to do in</span>
        <strong aria-hidden="true">
          <img src="/images/thingstodo/montreal-v-font.svg" alt="" />
        </strong>
      </h1>
      <div class="things-intro">
        <span aria-hidden="true">Eat // Drink // Music // See</span>
      </div>
    </header>
    <nav class="category-switcher" aria-label="Filter Montreal recommendations">
      <button
        type="button"
        class="category-switch"
        :class="{ 'is-active': activeCategory === 'all' }"
        @click="activeCategory = 'all'"
      >
        <span class="switch-number">00</span>
        <span>All spots</span>
      </button>

      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="category-switch"
        :class="{ 'is-active': activeCategory === category.id }"
        @click="activeCategory = category.id"
      >
        <span class="switch-number">{{ category.number }}</span>
        <span>{{ category.shortTitle }}</span>
      </button>
    </nav>

    <TransitionGroup name="category-list" tag="div" class="category-stack" aria-live="polite">
      <article
        v-for="section in visibleCategories"
        :id="section.id"
        :key="section.id"
        class="things-category"
      >
        <header class="category-heading">
          <div class="category-number" aria-hidden="true">{{ section.number }}</div>
          <div class="category-copy">
            <p>{{ section.tagline }}</p>
            <h2>{{ section.title }}</h2>
          </div>
          <span class="category-count">{{ section.places.length }} spots</span>
        </header>

        <div class="places-grid">
          <template v-for="(place, placeIndex) in section.places" :key="place.name">
            <h3 v-if="startsNewArea(section.places, placeIndex)" class="area-divider">
              {{ place.area }}
            </h3>
            <a
              class="place-card"
              :href="
                place.mapUrl ||
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`
              "
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${place.name} in Google Maps`"
            >
              <span class="place-index" aria-hidden="true">
                {{ section.number }}.{{ String(placeIndex + 1).padStart(2, '0') }}
              </span>

              <div class="place-copy">
                <h3>{{ place.name }}</h3>
                <p class="place-address">{{ place.address }}</p>
                <p v-if="place.description" class="place-description">{{ place.description }}</p>
              </div>

              <span class="map-action" aria-hidden="true">
                Map
                <span class="material-icons map-action-icon">open_in_new</span>
              </span>
            </a>
          </template>
        </div>
      </article>
    </TransitionGroup>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeCategory = ref('all')

const categories = [
  {
    id: 'alcohol',
    number: '01',
    shortTitle: 'Drink',
    title: 'Bars',
    tagline: 'Cold pints / cheap cans',
    places: [
      //HOCHELAGA AREA
      {
        name: "L'Espace Public",
        address: '3632 Ontario St E',
        description: 'Neighbourhood brew pub in Hochelaga Village',
        area: 'Hochelaga Area',
      },
      {
        name: 'CAFÉ LA LIGNE VERTE',
        address: '2531, East Ontario street, Montréal',
        description:
          ' ´Underground´ collective runned bar with terrace in Center East near Hochelaga in front of the green line subway station Frontenac (a few stations to the Pirahna Bar).',
        area: 'Hochelaga Area',
      },
      {
        name: 'MUTOÏDE',
        address: '3135,  Hochelaga street, Montréal',
        description:
          ' ’Underground’ collective runned bar with terrace in Hochelaga in front of the green line subway station Prefontaine (a few stations to the Pirahna Bar).',
        area: 'Hochelaga Area',
      },
      {
        name: 'BRASSERIE DES PATRIOTES',
        address: '3363, East Ontario street, Montréal',
        description:
          'Cheap dive bar, reminiscence of what the borough used to be in the 70’s-90’s before gentrification.',
        area: 'Hochelaga Area',
      },
      {
        name: 'CAFÉ ATOMIC',
        address: '3606, East Ontario street, Montréal',
        description:
          'Retro café-bar established by young people from the ‘’underground’’ community proposing food and microbrewed beers at a fair price.',
        area: 'Hochelaga Area',
      },
      {
        name: 'Street Drinking',
        address: 'Montreal',
        description: 'Cheaper option but be discreet',
        area: 'Hochelaga Area',
      },
      //DOWNTOWN AREA
      {
        name: 'Cheval Blanc',
        address: '809 Ontario St E',
        description: 'Great brew pub in downtown. Friendly staff',
        area: 'Downtown Area',
      },
      {
        name: 'TURBO HAUS',
        address: '2040, Saint-Denis street, Montréal',
        description:
          'Punk bar with terrace and good selection of beers and cocktails, located on the famous Montreal’s ’terrace street’ ',
        area: 'Downtown Area',
      },
      {
        name: 'FOUFOUNES',
        address: '87, East Sainte-Catherine street, Montréal',
        description:
          ' `Underground’ bar established since the 80’s with more commercial type of beers but nice big terraces and not so far from Pirahna bar, right downtown and nostalgic spot where the punks used to hang in the 80’s-2000’s.',
        area: 'Downtown Area',
      },
    ],
  },
  {
    id: 'food',
    number: '02',
    shortTitle: 'Eat',
    title: 'Food & Poutine',
    tagline: 'Fuel before the noise',
    places: [
      //HOCHELAGA AREA
      {
        name: 'Yogi',
        address: '3976 Ontario St E',
        description: 'Great Indian restaurant in Hochelaga',
        area: 'Hochelaga Area',
      },
      {
        name: 'Le Trèfle Hochelaga',
        address: '3971 Ontario St E',
        description: 'Vegan brunch available Sat/Sun before 2pm',
        area: 'Hochelaga Area',
      },
      {
        name: 'Resto-Bar Le Pick-Up',
        address: '3739 Ontario St E',
        description: 'Burger/Fries/Tacos -Punk Latinos Friends work there',
        area: 'Hochelaga Area',
      },
      // { name: 'Lafleur', address: '2120 Ontario St E', description: 'Poutine' },
      {
        name: 'Gerry’s',
        address: '3982 Rue Ontario E',
        description: 'Old dinner (breakfast, pizzas, poutine) in Hochelaga borough',
        area: 'Hochelaga Area',
      },
      {
        name: 'La Belle Place',
        address: '3251 Rue Ontario E',
        description:
          'Cheap fast food with Poutine, vegetarian pitas and jumbo veggie dogs + cheap breakfast',
        area: 'Hochelaga Area',
      },
      {
        name: 'Boustan',
        address: '3417 Ontario St E',
        description: 'Classic Lebanese food',
        area: 'Hochelaga Area',
      },
      //DOWTOWN AREA( NEAR PIRANHA BAR)
      {
        name: 'Copper Branch',
        address: '1180, W. Boul. de Maisonneuve',
        description: 'Vegan & vegetarian food (not far from where the festival is held)',
        area: 'Downtown Area / Near Piranha Bar',
      },
      {
        name: 'Shawarmaz',
        address: '1340 St-Catherine W',
        description: 'Best Shawarmas/Falafel (not far from where the festival is held)',
        area: 'Downtown Area / Near Piranha Bar',
      },
      {
        name: 'Bloom Sushi',
        address: '288 Saint-Catherine St W',
        description: 'Vegetariand & vegan sushis',
        area: 'Downtown Area / Near Piranha Bar',
      },
      {
        name: 'LES 3 BRASSEURS',
        address: '732, West Sainte-Catherine street, Montréal',
        description: '',
        area: 'Downtown Area / Near Piranha Bar',
      },
      {
        name: 'ZHONGHUA NOODLES',
        address: '908, West Sherbrooke street Montréal',
        description: '',
        area: 'Downtown Area / Near Piranha Bar',
      },
      {
        name: 'OH DUMPLINGS EXPRESS',
        address: '2065 B, Bishop street, Montréal',
        description: '',
        area: 'Downtown Area / Near Piranha Bar',
      },

      // {
      //   name: 'Pizzeria Zac',
      //   address: '8 Duluth Ave E',
      //   description:
      //     'Vegan pizza place (on the Plateau Mont-Royal, a bit far from the venue where the fest is held)',
      // },
    ],
  },
  {
    id: 'records',
    number: '03',
    shortTitle: 'Music',
    title: 'Record Stores',
    tagline: 'Crates / noise / rare finds',
    places: [
      { name: 'Sonik', address: '4050 Rue Berri', description: 'THE punk record store' },
      {
        name: 'Cheap Thrills',
        address: '2044 Metcalfe',
        description: 'Oldest record store with diverse selection',
      },
      {
        name: 'Beatnick Records',
        address: '3770 Saint Denis St',
        description: 'Oldschool store with knowledgeable staff',
      },
      {
        name: 'Le Pick-up / LeBackstore',
        address: '169 Ave des Pins',
        description: 'Two great stores under one roof, lots of rare punk rock',
      },
      {
        name: 'Pump Up the Volume (Marche Noir)',
        address: '1359 Ontario E',
        description: 'Record shop inside a vintage store',
      },
      {
        name: 'Sound Central',
        address: '4486 Coloniale Ave',
        description: 'Run by Sean (Dopethrone), big selection',
      },
      {
        name: 'Aux 33 Tours',
        address: '1373 Mont-Royal Ave E',
        description: 'The biggest record store',
      },
      {
        name: 'BOÎTE À MUSIQUE',
        address: '2000, East Notre Dame street - Local #201, Montréal',
        description:
          'Record store run by punks and also selling bass & guitar strings, drumsticks, etc.Also rehearsal space to rent by the hour.',
      },
    ],
  },
  {
    id: 'attractions',
    number: '04',
    shortTitle: 'See',
    title: 'Things to See - Attractions',
    tagline: 'Landmarks / neighbourhoods / city views',
    places: [
      {
        name: 'Chinese District',
        address: 'Chinatown, Montréal',
        description: '',
        mapUrl: 'https://maps.app.goo.gl/1WBhcqPUXhJqS6Fy5',
      },
      {
        name: 'Quartier des Spectacles',
        address: 'Quartier des Spectacles, Montréal',
        description:
          'Area where the city holds big festivals and art exhibitions. Nice to check out on the way to Piranha Bar if you exit one station before at Place-des-Arts.',
        mapUrl: 'https://maps.app.goo.gl/J2rnGpjsFfQnJgNP9',
      },
      {
        name: 'Mont-Royal Lookout',
        address: 'Mount Royal, Montréal',
        description:
          'Lookout over downtown located on the mountain in the heart of the Plateau Mont-Royal district.',
        mapUrl: 'https://maps.app.goo.gl/recae61hDjQEivUa8',
      },
      {
        name: 'Old Port of Montreal',
        address: 'Old Port of Montréal',
        description: 'Historical old town of Montreal for those who love a European feel.',
        mapUrl: 'https://maps.app.goo.gl/6uiZtP9BE5tqVHAVA',
      },
    ],
  },
]

const startsNewArea = (places, index) =>
  Boolean(places[index].area && (index === 0 || places[index - 1].area !== places[index].area))

const visibleCategories = computed(() =>
  activeCategory.value === 'all'
    ? categories
    : categories.filter((category) => category.id === activeCategory.value),
)
</script>

<style scoped>
.things-page {
  --paper: #b9b5aa;
  --card-paper: #252421;
  --ink: #090909;
  --card-ink: #d8d4ca;
  --signal: #b6f500;
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  overflow: hidden;
  padding: calc(var(--header-h, 64px) + 3.5rem) clamp(1rem, 4vw, 4.5rem) 5rem;
  color: #e9e7df;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.94));
}

.things-page::before {
  content: 'MTL';
  position: fixed;
  z-index: -1;
  top: 20%;
  right: -0.05em;
  color: transparent;
  font-family: 'Defused', sans-serif;
  font-size: clamp(12rem, 33vw, 38rem);
  line-height: 0.75;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.035);
  transform: rotate(-7deg);
  pointer-events: none;
}

.things-noise {
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: 0.22;
  background:
    repeating-linear-gradient(93deg, transparent 0 5px, rgba(255, 255, 255, 0.025) 5px 6px),
    radial-gradient(circle at 15% 10%, rgba(182, 245, 0, 0.14), transparent 28%);
  pointer-events: none;
}

.things-hero,
.category-switcher,
.category-stack,
.things-signoff {
  width: min(100%, 1280px);
  margin-inline: auto;
}

.things-hero {
  position: relative;
  width: min(100%, 960px);
  margin-bottom: clamp(1.2rem, 2.5vw, 1.75rem);
}

.things-kicker {
  display: inline-block;
  margin: 0 0 1rem;
  padding: 0.35rem 0.65rem 0.25rem;
  color: var(--ink);
  background: var(--paper);
  font-family: 'TypeWriter1', monospace;
  font-size: clamp(0.68rem, 1.2vw, 0.9rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transform: rotate(-1deg);
}

.things-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  line-height: 0.78;
  text-transform: uppercase;
}

.things-title span {
  position: relative;
  z-index: 1;
  margin-left: clamp(0rem, 7vw, 6rem);
  font-family: 'TypeWriter1', monospace;
  font-size: clamp(1rem, 2vw, 1.8rem);
  letter-spacing: 0.16em;
  transform: translateY(-0.75rem);
}

.things-title strong {
  align-self: flex-start;
  display: block;
  width: min(calc(100% - 2rem), 40rem);
  margin-left: clamp(0.65rem, 2.4vw, 2rem);
  margin-right: 1rem;
  line-height: 0;
}

.things-title strong img {
  display: block;
  width: 100%;
  height: auto;
}

.things-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  width: min(100%, 720px);
  margin: 1.1rem 0 0 auto;
  border-top: 2px solid rgba(255, 255, 255, 0.55);
  padding-top: 0.8rem;
  font-family: 'TypeWriter1', monospace;
}

.things-intro p {
  max-width: 650px;
  margin: 0;
  color: #b8b6b0;
  font-size: clamp(0.85rem, 1.3vw, 1.05rem);
  line-height: 1.55;
}

.things-intro span {
  flex: 0 0 auto;
  color: var(--signal);
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.category-switcher {
  position: sticky;
  z-index: 20;
  top: calc(var(--header-h, 64px) + 0.75rem);
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.45rem;
  margin-bottom: 4.5rem;
  padding: 0.55rem;
  background: rgba(0, 0, 0, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
}

.category-switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 48px;
  padding: 0.6rem 0.8rem;
  color: #aaa8a2;
  background: transparent;
  border: 0;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.2rem);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    color 180ms ease,
    background-color 180ms ease,
    transform 180ms ease;
}

.category-switch::before,
.category-switch::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle at 35% 30%, #e0ddd3 0 12%, #77746e 40%, #222 75%);
  border-radius: 50%;
  box-shadow: 0 1px 2px #000;
  transform: translateY(-50%);
}

.category-switch::before {
  left: 0.55rem;
}

.category-switch::after {
  right: 0.55rem;
}

.category-switch:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
}

.category-switch.is-active {
  color: var(--ink);
  background: var(--signal);
  transform: rotate(-0.6deg);
}

.switch-number {
  font-family: 'TypeWriter1', monospace;
  font-size: 0.7em;
  opacity: 0.72;
}

.category-stack {
  display: grid;
  gap: 6rem;
}

.things-category {
  position: relative;
  scroll-margin-top: calc(var(--header-h, 64px) + 6rem);
}

.category-heading {
  min-width: 0;
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: end;
  gap: clamp(0.85rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  min-height: 180px;
  padding: 2.9rem clamp(4.5rem, 7vw, 6.8rem) 2.7rem;
  color: var(--card-ink);
  background: url('/images/thingstodo/torn-paper-long.svg') center / cover no-repeat;
  filter: drop-shadow(8px 9px 0 rgba(182, 245, 0, 0.42));
  transform: rotate(-0.35deg);
}

.category-heading::before {
  content: none;
}

.category-heading::after {
  content: '';
  position: absolute;
  right: 8%;
  bottom: 0.8rem;
  left: 22%;
  height: 4px;
  background: var(--signal);
  transform: rotate(0.8deg);
}

.category-number {
  color: var(--signal);
  font-family: 'Defused', sans-serif;
  font-size: clamp(3.5rem, 7vw, 6rem);
  line-height: 0.7;
}

.category-number,
.category-copy {
  transform: translateY(-2rem);
}

.category-heading p {
  margin: 0 0 0.2rem;
  font-family: 'TypeWriter1', monospace;
  font-size: clamp(0.65rem, 1.2vw, 0.85rem);
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.category-heading h2 {
  overflow-wrap: anywhere;
  margin: 0;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 rgba(182, 245, 0, 0.6);
}

.category-count {
  align-self: center;
  padding: 0.25rem 0.5rem;
  color: var(--ink);
  background: var(--signal);
  font-family: 'TypeWriter1', monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  transform: rotate(2deg);
}

.places-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.25rem, 2.5vw, 2.2rem);
  padding: 0 clamp(0rem, 2vw, 1.5rem);
}

.area-divider {
  grid-column: 1 / -1;
  margin: 1rem 0 0.15rem;
  padding: 0.5rem 0.85rem 0.35rem;
  color: var(--ink);
  background: linear-gradient(90deg, var(--signal), rgba(182, 245, 0, 0.42) 48%, transparent);
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(1.1rem, 2.2vw, 1.6rem);
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transform: rotate(-0.3deg);
}

.area-divider:first-child {
  margin-top: 0;
}

.place-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  min-height: 260px;
  padding: 4.75rem 4.8rem 3.5rem 6.4rem;
  overflow: hidden;
  color: var(--card-ink);
  background: url('/images/thingstodo/torn-paper.svg') center / 100% 100% no-repeat;
  border: 0;
  text-decoration: none;
  filter: drop-shadow(9px 10px 0 rgba(182, 245, 0, 0.46));
  transform: rotate(-0.45deg);
  transition:
    transform 190ms ease,
    filter 190ms ease;
}

.place-card:nth-child(even) {
  transform: rotate(0.55deg);
}

.place-card:nth-child(3n) {
  transform: rotate(-0.8deg) translateX(0.4rem);
}

.place-card::before,
.place-card::after {
  content: none;
}

.place-card:hover,
.place-card:focus-visible {
  z-index: 2;
  filter: contrast(1.06) drop-shadow(15px 17px 0 var(--signal));
  transform: rotate(0deg) translate(-4px, -6px);
}

.place-card:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 5px;
}

.place-index {
  position: absolute;
  z-index: 2;
  top: 5rem;
  left: 4rem;
  color: var(--signal);
  font-family: 'TypeWriter1', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  writing-mode: vertical-rl;
}

.place-copy {
  position: relative;
  z-index: 1;
  align-self: start;
  transform: translateY(1.5rem);
}

.place-copy h3 {
  margin: 0 0 0.5rem;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(1.65rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.place-address {
  display: inline;
  margin: 0;
  padding: 0.1rem 0.25rem;
  color: var(--ink);
  background: var(--signal);
  font-family: 'TypeWriter1', monospace;
  font-size: clamp(0.68rem, 1.2vw, 0.82rem);
  line-height: 1.7;
}

.place-description {
  max-width: 48ch;
  margin: 0.75rem 0 0;
  color: #aaa69d;
  font-family: 'Lucky', 'TypeWriter1', monospace;
  font-size: clamp(0.82rem, 1.35vw, 0.98rem);
  line-height: 1.45;
}

.map-action {
  position: relative;
  z-index: 1;
  align-self: end;
  color: var(--card-ink);
  font-family: 'Staatliches', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}

.map-action-icon {
  display: inline-block;
  color: var(--signal);
  font-size: 1.15rem;
  line-height: 1;
  writing-mode: horizontal-tb;
}

.things-signoff {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.8rem, 3vw, 2.5rem);
  margin-top: 6rem;
  color: #888681;
  font-family: 'TypeWriter1', monospace;
  font-size: clamp(0.65rem, 1.2vw, 0.85rem);
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
}

.things-signoff strong {
  position: relative;
  padding: 0.45rem 0.7rem 0.3rem;
  color: var(--ink);
  background: var(--signal);
  border: 1px dashed rgba(255, 255, 255, 0.7);
  box-shadow:
    6px 5px 0 #191816,
    7px 6px 0 rgba(185, 181, 170, 0.42);
  transform: rotate(-1deg);
}

.category-list-enter-active,
.category-list-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.category-list-enter-from,
.category-list-leave-to {
  opacity: 0;
  transform: translateY(18px) rotate(-0.4deg);
}

.category-list-leave-active {
  position: absolute;
}

@media (max-width: 760px) {
  .things-page {
    padding: calc(var(--header-h, 54px) + 2.5rem) 0.85rem 3.5rem;
  }

  .things-hero {
    margin-bottom: 1rem;
  }

  .things-title span {
    margin-left: 0;
    font-size: clamp(0.78rem, 3.7vw, 1.05rem);
    transform: translateY(-0.5rem);
  }

  .things-title strong {
    width: 64%;
    margin-left: clamp(0.55rem, 2.5vw, 0.85rem);
  }

  .things-intro {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.8rem;
  }

  .category-switcher {
    top: calc(var(--header-h, 54px) + 0.4rem);
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.2rem;
    margin-bottom: 3.5rem;
    padding: 0.3rem;
  }

  .category-switch {
    min-height: 42px;
    padding: 0.45rem 0.25rem;
    font-size: 0.8rem;
  }

  .category-switch::before,
  .category-switch::after {
    width: 4px;
    height: 4px;
  }

  .category-switch::before {
    left: 0.2rem;
  }

  .category-switch::after {
    right: 0.2rem;
  }

  .switch-number {
    display: none;
  }

  .category-stack {
    gap: 4.5rem;
  }

  .category-heading {
    grid-template-columns: auto minmax(0, 1fr);
    min-height: 145px;
    padding: 2.75rem 2.8rem 2.5rem;
  }

  .category-number,
  .category-copy {
    transform: translateY(-1.85rem);
  }

  .category-count {
    display: none;
  }

  .category-heading::after {
    left: 32%;
  }

  .places-grid {
    grid-template-columns: 1fr;
    gap: 0.2rem;
    padding: 0 0.2rem;
  }

  .place-card {
    min-height: 240px;
    padding: 3.9rem 2.8rem 3rem 3.8rem;
    filter: drop-shadow(6px 8px 0 rgba(182, 245, 0, 0.46));
  }

  .place-copy {
    transform: translateY(1.35rem);
  }

  .map-action {
    transform: translateY(-1.5rem);
  }

  .place-index {
    display: none;
  }

  .place-card:nth-child(3n) {
    transform: rotate(-0.6deg);
  }

  .things-signoff {
    align-items: stretch;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .category-switch,
  .place-card,
  .category-list-enter-active,
  .category-list-leave-active {
    transition: none;
  }
}
</style>

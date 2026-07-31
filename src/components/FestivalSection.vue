<template>
  <section id="festival" class="festival-container snap-start min-h-screen bg-black text-white">
    <div class="container mx-auto py-20 px-4 flex flex-col items-center gap-12">
      <!-- Festival Logo (smaller on desktop) -->
      <img
        src="/images/festival/VarningFestLogo.svg"
        alt="Varning Fest Logo"
        class="festival-logo"
      />

      <!-- Intro Text -->
      <div class="festival-font text-center text-gray-200 space-y-4 festival-text-wrap">
        <!-- <h3 class="text-2xl md:text-4xl font-bold">A Varning From Montreal Festival</h3> -->

        <!-- Description text -->
        <div class="festival-description">
          <p :class="['festival-paragraph', { 'is-collapsed': !expanded }]">
            <strong>A VARNING FROM MONTREAL FESTIVAL</strong> isn’t just another punk festival, it’s
            one of the longest-running international gatherings for underground punk, D.I.Y culture,
            and community connection. Since its first edition in 2007, the festival has brought
            together punks, friends, and music lovers from across the globe to celebrate what kept
            the scene alive: raw sound, shared values, and real friendships. <br /><br />
            Each edition of<strong> A VARNING FROM MONTREAL FESTIVAL</strong> lasts multiple days
            and features <strong>bands from across the globe</strong>, past lineups have included
            artists from
            <strong
              >Japan, Russia, Sweden, Norway, Mexico, Cuba, Panama, Colombia, Chile, France, Spain,
              Italy, Germany, Portugal, Poland, Finland, UK, Australia, USA, and Canada.</strong
            >
            <br /><br />
            The festival is organized by <strong>Varning Productions</strong>, which was put
            together by Janick with the festival’s launch in November 2007 and has since put on
            <strong>over 300 punk shows worldwide</strong>, building a network of artists and
            organizers rooted in D.I.Y practice. <br /><br />
            A VARNING FESTIVAL is proudly <strong>inclusive</strong>. Respect, equality, and
            openness are at its core, it’s a space where punks and people who identify with this
            scene and who love loud music can feel welcome. The festival stands firmly
            <strong>against racism, fascism, sexism, homophobia, transphobia and exclusion</strong>
            of any kind, and works to make the scene safer and more accessible for everyone.
            <br /><br />
            <strong>Marking its 18th edition in 2026</strong>, the festival will once again bring
            together international bands for three days of music, including matinee shows, a D.I.Y
            punk market, main shows, and aftershows, continuing a long-standing community tradition
            within Montreal’s underground scene. <br /><br />
            Here’s some bands that have played A VARNING FROM MONTREAL FESTIVAL:
            <br /><br />
            Meanwhile, Framtid, Tragedy, Disturd, Moderat Likvidation, Warcry, End of Pollution,
            Varukers, Life, Regulations, Ferocious X, Primer Regimen, Slowmotions, Fatum, System
            Fucker, Dissekerad, DSB, Lifeless Dark, Languid, Lebenden Toten, Zyanose, Bombardement,
            Hellshock, Institution, Horror Vacui, Criminal Damage, No Fucker, Sex Dwarf, Peligro
            Social, Guided Cracle, Mob 47, Age, Terminal Filth, Träume, Generacion Suicida, Napalm
            Raid, Tarrega 91, Cuir, Flash, World Burns to Death, Irreal, Spectres, Secta, Coupe
            Gorge, Dead Hero, Lathe of Heaven, Ignorantes, Nukke, Final, Inepsy, After the Bombs,
            Flower, Extended Hell, Glorious, Perdition, Aspects of War, Crazy Spirit, Los Monjo,
            Savageheads, Fucking Lovers, Paa Kii, Vaxine, Salvaje Punx, Question, Hez, Devil Master,
            Subversive Rite, Äpärä, Ruleta Rusa, Innocent, No Problem, Secret Prostitutes,
            Narcoestado, Phane, Green Beret, Blockade, Thought Crime, Béton Armé, Career Suicide,
            Born Dead icons, Absolut, Mueco, Ultrarat, Total Nada, Parasytes, Complications and way
            more..
          </p>

          <button class="read-more" type="button" @click="expanded = !expanded">
            {{ expanded ? 'Read less' : 'Read more' }}
          </button>
        </div>

        <!-- Festival navigation flyers -->
        <div class="festival-flyer-grid">
          <!-- Current festival -->
          <!-- to="/current-festival" -->
          <router-link
            to="/current-festival"
            class="festival-flyer-card"
            aria-label="Current festival"
          >
            <div class="festival-flyer-label">Festival 2026</div>

            <picture class="festival-flyer-picture">
              <source srcset="/images/festival/current/varning-fest-soon.avif" type="image/avif" />
              <source srcset="/images/festival/current/varning-fest-soon.webp" type="image/webp" />
              <img
                src="/images/festival/current/varning-fest-soon.jpg"
                alt="Current Festival Poster"
              />
            </picture>
          </router-link>

          <!-- Past festival -->
          <router-link to="/past-festival" class="festival-flyer-card" aria-label="Past festivals">
            <div class="festival-flyer-label">Past Festivals</div>

            <picture class="festival-flyer-picture">
              <source srcset="/images/festival/flyers/MainPoster.avif" type="image/avif" />
              <source srcset="/images/festival/flyers/MainPoster.webp" type="image/webp" />
              <img src="/images/festival/flyers/MainPoster.jpg" alt="Past Festivals Poster" />
            </picture>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)
</script>

<style scoped>
.festival-container {
  padding-top: calc(50px + 1rem);
}

.festival-logo {
  width: 100%;
  max-width: 520px;
  height: auto;
  margin-bottom: 0.5rem;
}
@media (min-width: 1024px) {
  .festival-logo {
    max-width: 360px;
  }
}

.festival-text-wrap {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
}

.festival-description {
  text-align: center;
  font-family: 'Lucky', sans-serif;
}

.festival-coming {
  text-align: center;
  font-family: 'TypeWriter1', sans-serif;
}

.festival-paragraph {
  line-height: 1.85;
}

.festival-paragraph.is-collapsed {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;
}

.read-more {
  margin-top: 0.75rem;
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #e9e9e9;
  text-decoration: underline;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}
.read-more:hover {
  opacity: 0.85;
}

.underline {
  color: #fbfbfb;
}

.festival-flyer-grid {
  margin-top: 1.25rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 680px;
  margin-inline: auto;
}

@media (min-width: 768px) {
  .festival-flyer-grid {
    max-width: 560px;
    gap: 1.25rem;
  }
}

.festival-flyer-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: rgba(20, 20, 20, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.45);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    opacity 0.18s ease;
}

.festival-flyer-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.55);
  opacity: 0.95;
}

.festival-flyer-label {
  font-family: 'TypeWriter1', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.85rem 0.9rem;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.35);
}

.festival-flyer-picture {
  display: block;
  width: 100%;
}

.festival-flyer-picture img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}
</style>

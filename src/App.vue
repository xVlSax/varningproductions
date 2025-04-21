<template>
  <Navbar />
  <div class="font-punk bg-black text-white">
    <main class="snap-y snap-mandatory">
      <HeroSection id="home" />
      <!-- <DescriptionSection id="description" />
      <WhySection id="why" />
      <SceneSection id="scene" /> -->
      <FestivalSection />
      <!-- <ShowsSection id="shows" />
      <ContactSection id="contact" /> -->
      <ContactSection id="contact" />
    </main>
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
// import DescriptionSection from './components/DescriptionSection.vue'
// import WhySection from './components/WhySection.vue'
// import SceneSection from './components/SceneSection.vue'
import FestivalSection from './components/FestivalSection.vue'
// import ShowsSection from './components/ShowsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  components: {
    // Navbar,
    HeroSection,
    // DescriptionSection,
    // WhySection,
    // SceneSection,
    FestivalSection,
    // ShowsSection,
    ContactSection,
  },
}
</script>

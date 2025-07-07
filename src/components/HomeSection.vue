<template>
  <section
    id="home"
    class="festival-container min-h-screen bg-black flex justify-center items-center"
  >
    <router-link to="/festival">
      <img
        src="/images/festival/VarningFestLogo.svg"
        alt="Varning Fest Logo"
        class="festival-resp cursor-pointer transition-transform duration-300 hover:scale-105"
      />
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  mounted() {
    const flyerImages = [
      '/images/festival/flyers/MainPoster.jpg',
      '/images/festival/flyers/thursday-flyer.jpg',
      '/images/festival/flyers/matine-friday-flyer.jpg',
      '/images/festival/flyers/VarningFlyer-Friday.jpg',
      '/images/festival/flyers/MatineShow.png',
      '/images/festival/flyers/VarningFlyer -Sat.jpg',
      '/images/festival/flyers/saturday-aftershow-flyer.jpg',
      '/images/contact/framtid.svg',
    ]
    flyerImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  },
}
</script>

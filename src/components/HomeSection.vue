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
}
</script>

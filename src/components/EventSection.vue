<template>
  <section
    id="events"
    class="min-h-screen bg-black bg-texture flex flex-col justify-center items-center text-center p-4"
  >
    <img
      src="/images/events/varning-font.svg"
      alt="Varning Productions Logo"
      class="logo-varning"
    />
    <h4 class="festival-font text-2xl md:text-4xl text-gray-200 mt-6">Events</h4>
    <img
      src="/images/events/varning-font.svg"
      alt="Varning Productions Logo"
      class="logo-varning"
    />
    <h4 class="festival-font text-2xl md:text-4xl text-gray-200 mt-6">Upcoming Events</h4>
    <img
      src="/images/events/varning-font.svg"
      alt="Varning Productions Logo"
      class="logo-varning"
    />
  </section>
</template>

<script>
export default { name: 'EventSection' }
</script>

<style scoped>
.logo-varning {
  width: 80%;
  max-width: 220px;
  height: auto;
}
</style>

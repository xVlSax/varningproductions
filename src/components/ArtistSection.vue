<template>
  <div class="things-container text-white min-h-screen font-punk px-4 py-8">
    <h1 class="text-3xl md:text-5xl text-center mb-8 tracking-widest"></h1>
  </div>
</template>

<script setup></script>

<style scoped>
.things-container {
  padding-top: calc(40px + 1rem);
  margin-bottom: 5rem;
}

h1 {
  text-shadow: 0 0 5px #f4f4f4e8;
  font-family: 'Defused', sans-serif;
  margin-bottom: 4rem;
}

.font-h2 {
  color: rgb(189, 189, 189);
  font-family: 'sans-serif', sans-serif;
}

.font-things {
  color: rgb(149, 149, 149);
  font-family: 'sans-serif', sans-serif;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}

a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #f87171;
}
</style>

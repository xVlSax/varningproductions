<template>
  <section class="not-found">
    <h1>Page not found</h1>
    <p>This link may be out of date. Find the latest shows and festival information below.</p>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/current-festival">Festival 2026</RouterLink>
    <RouterLink to="/events">Events</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  padding: 8rem 1.5rem 4rem;
  text-align: center;
}
h1 {
  font-size: 2rem;
}
a {
  display: inline-block;
  margin: 1rem;
  text-decoration: underline;
  color: #b6f500;
}
</style>

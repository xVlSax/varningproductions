<template>
  <section class="lineup-root">
    <div class="lineup-content">
      <img
        src="/images/festival/VarningFestLogoPartXVIII.svg"
        alt="A Varning From Montreal Festival XVIII"
        class="lineup-logo"
      />

      <div class="lineup-heading">
        <p class="lineup-kicker">September 17–19 · Montreal</p>
        <h1>Festival 2026 Lineup</h1>
        <p class="lineup-status">Lineup announcement coming soon.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lineup-root {
  min-height: 100vh;
  padding: 7.5rem 1.25rem 4rem;
  color: #f4f4f4;
  background:
    radial-gradient(circle at 50% 35%, rgba(239, 68, 68, 0.12), transparent 34rem),
    #000;
}

.lineup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 68rem);
  margin: 0 auto;
  text-align: center;
}

.lineup-logo {
  display: block;
  width: min(72vw, 30rem);
  height: auto;
}

.lineup-heading {
  margin-top: clamp(2.5rem, 6vw, 4.5rem);
}

.lineup-kicker,
.lineup-status {
  margin: 0;
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lineup-kicker {
  color: #ef4444;
  font-size: clamp(0.85rem, 1.5vw, 1rem);
}

h1 {
  margin: 0.75rem 0 1.25rem;
  font-family: 'VarningFromMtlWide', 'TypeWriter1', sans-serif;
  font-size: clamp(2.25rem, 6vw, 5rem);
  letter-spacing: 0.06em;
  line-height: 1;
  text-transform: uppercase;
}

.lineup-status {
  color: #bcbcbc;
  font-size: clamp(1rem, 2vw, 1.25rem);
}

@media (max-width: 640px) {
  .lineup-root {
    padding-top: 6rem;
  }

  .lineup-logo {
    width: min(78vw, 20rem);
  }
}
</style>

<template>
  <section class="tickets-page">
    <header class="tickets-header">
      <!-- <p class="tickets-kicker">Varning Productions presents</p> -->
      <h1>Event Tickets</h1>
      <p>Indian Nightmare + Nagasaki Sunrise + Crutches + Sex Dwarf</p>
    </header>

    <div class="tickets-widget-shell">
      <div
        data-hievents-id="10248"
        data-hievents-primary-color="#c2e872"
        data-hievents-primary-text-color="#ffffff"
        data-hievents-secondary-color="#aad95f"
        data-hievents-secondary-text-color="#ffffff"
        data-hievents-background-color="#000000"
        data-hievents-widget-type="widget"
        data-hievents-widget-version="1.0"
        data-hievents-locale="en"
        data-hievents-padding="20px"
        data-hievents-autoresize="false"
        data-hievents-continue-button-text="Continue"
        class="hievents-widget"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const WIDGET_SCRIPT_ID = 'hievents-widget-script'
let widgetScript

onMounted(() => {
  document.getElementById(WIDGET_SCRIPT_ID)?.remove()

  widgetScript = document.createElement('script')
  widgetScript.id = WIDGET_SCRIPT_ID
  widgetScript.src = 'https://app.hi.events/widget.js'
  widgetScript.async = true
  document.head.appendChild(widgetScript)
})

onBeforeUnmount(() => {
  widgetScript?.remove()
})
</script>

<style scoped>
.tickets-page {
  min-height: 100vh;
  padding: clamp(7rem, 12vw, 9rem) clamp(1rem, 4vw, 3rem) 4rem;
  background: radial-gradient(circle at 50% 8%, rgba(182, 245, 0, 0.1), transparent 28rem), #000;
  color: #fff;
}

.tickets-header {
  width: min(100%, 920px);
  margin: 0 auto clamp(1.75rem, 4vw, 3rem);
  text-align: center;
  text-transform: uppercase;
}

.tickets-header h1 {
  margin: 0.75rem 0 clamp(1.75rem, 3vw, 2.5rem);
  color: #050505;
  font-family: 'VarningFromMtlWide', 'TypeWriter1', sans-serif;
  font-size: clamp(2.25rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  line-height: 1;
  -webkit-text-fill-color: #050505;
  -webkit-text-stroke: 6px #fff;
  paint-order: stroke fill;
}

.tickets-header p {
  margin: 0;
  font-family: 'TypeWriter1', sans-serif;
  font-size: clamp(1rem, 2.35vw, 1.5rem);
  letter-spacing: 0.06em;
  line-height: 1.35;
}

.tickets-header .tickets-kicker {
  color: #b6f500;
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.16em;
}

.tickets-widget-shell {
  width: min(100%, 960px);
  min-height: 680px;
  margin: 0 auto;
  overflow: hidden;
  background: #000;
}

.hievents-widget {
  width: 100%;
  min-height: 680px;
}

:deep(.hievents-widget iframe) {
  width: 100% !important;
  min-height: 680px !important;
  border: 0;
}

@media (max-width: 640px) {
  .tickets-page {
    padding-top: 5.75rem;
  }

  .tickets-widget-shell,
  .hievents-widget,
  :deep(.hievents-widget iframe) {
    min-height: 760px;
  }
}
</style>

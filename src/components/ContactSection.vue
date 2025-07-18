<template>
  <div class="flex flex-col min-h-screen bg-black font-punk">
    <!-- Title -->
    <section class="contact-header footer-font w-full max-w-screen-xl mx-auto px-4 text-center">
      <h1 class="text-8xl md:text-8xl tracking-widest drop-shadow-xl mb-2">CONTACT US</h1>
    </section>

    <!-- Image -->
    <div class="contact-image-wrapper w-full flex justify-center items-center">
      <img
        src="/images/contact/framtid.png"
        loading="lazy"
        alt="Framtid at Varning"
        class="picture-resp w-full max-w-screen-2xl h-auto object-cover shadow-2xl"
      />
    </div>

    <!-- Contact Info Grid -->
    <section
      class="ffooter-font w-full max-w-screen-md mx-auto px-4 mb-16 contact-grid text-center"
    >
      <div class="space-y-1">
        <span class="material-icons text-base">phone</span>
        <p class="text-base">+46 073 875 7797</p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-base">email</span>
        <p class="text-base">
          <a href="mailto:janick@varningproductions.com">janick@varningproductions.com</a>
        </p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-base">public</span>
        <p class="text-base">
          <a href="www.varningproductions.com" target="_blank">www.varningproductions.com</a>
        </p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-base">location_on</span>
        <p class="text-base leading-snug">
          Montreal, Canada<br />
          Stockholm, Sweden
        </p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-base">facebook</span>
        <p class="text-base">
          <a href="https://www.facebook.com/varningproductions" target="_blank"
            >facebook.com/varningproductions</a
          >
        </p>
      </div>
      <div class="space-y-1">
        <i class="fa fa-instagram" style="font-size: 24px"></i>
        <p class="text-base">
          <a href="https://www.instagram.com/varningfest/?hl=en" target="_blank">@varningfest</a>
        </p>
      </div>
    </section>
  </div>
  <!-- Footer -->
  <footer class="bg-black/80 py-3 border-t-2 border-red-500 w-full text-center">
    <div class="container mx-auto px-4">
      <p class="footer-font font-punk text-sm md:text-base tracking-wider">
        © VARNING PRODUCTIONS 2025 — ALL WRONGS RESERVED — UP THE PUNX TABARNAC!!
      </p>
      <p class="footer-font font-punk text-xs mt-2">
        MADE WITH <span class="text-red-400">♥</span> AND CHEAP BEER
      </p>
    </div>
  </footer>
</template>

<style scoped>
h1 {
  color: #c4c4c4a1;
  font-size: 1.8rem;
  font-family: 'Defused', serif;
}
.contact-header {
  padding-top: 2rem;
}

.contact-image-wrapper {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.footer-font {
  font-family: 'sans-serif', sans-serif;
  color: white;
}

footer {
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,5 L0,5 Z" fill="%23ef4444" opacity="0.3"/></svg>')
      repeat-x bottom;
  background-size:
    100% 100%,
    20px 5px;
}

footer p {
  letter-spacing: 0.1em;
  text-shadow:
    0 0 3px #000,
    0 0 5px #000;
}

footer:hover p {
  animation: footer-flicker 0.8s infinite;
}

@keyframes footer-flicker {
  0%,
  100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.7;
  }
}

footer .font-punk span.text-red-400 {
  color: #f87171;
  animation: heartbeat 1.5s infinite;
}

.picture-resp {
  max-width: 100%;
  height: auto;
  width: auto;
  max-height: 90vh;
}

.contact-grid a {
  color: #c4c4c4a1;
  text-decoration: none;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem 1.5rem; /* row-gap, column-gap */
  color: #c4c4c4a1;
}

/* From medium screens up, two equal columns */
@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(1.2);
  }
}

@font-face {
  font-family: 'Defused';
  src: url('/fonts/defused.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Soulmission';
  src: url('/fonts/soulmission.ttf') format('truetype');
  font-display: swap;
}
</style>

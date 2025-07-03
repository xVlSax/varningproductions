<template>
  <div class="flex flex-col min-h-screen bg-black text-white font-punk">
    <!-- Title -->
    <section class="footer-font w-full max-w-screen-xl mx-auto px-4 pt-16 text-center">
      <h1 class="text-8xl md:text-8xl font-bold tracking-widest text-white drop-shadow-xl mb-2">
        CONTACT US
      </h1>
    </section>

    <!-- Image -->
    <div class="w-full flex justify-center items-center my-8">
      <img
        src="/images/contact/framtid.jpg"
        alt="Framtid at Varning"
        class="w-full max-w-screen-2xl h-auto object-cover shadow-2xl"
      />
    </div>

    <!-- Contact Info Grid -->
    <section
      class="footer-font w-full max-w-screen-md mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 text-center"
    >
      <div class="space-y-1">
        <span class="material-icons text-red-400 text-base">phone</span>
        <p class="text-base">+46 073 875 7797</p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-red-400 text-base">email</span>
        <p class="text-base">janick@varningproductions.com</p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-red-400 text-base">public</span>
        <p class="text-base">www.varningproductions.com</p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-red-400 text-base">location_on</span>
        <p class="text-base leading-snug">
          Montreal, Canada<br />
          Stockholm, Sweden
        </p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-red-400 text-base">facebook</span>
        <p class="text-base">
          <a href="https://www.facebook.com/varningproductions">facebook.com/varningproductions</a>
        </p>
      </div>
      <div class="space-y-1">
        <span class="material-icons text-red-400 text-base">instagram</span>
        <p class="text-base">@varningproductions</p>
      </div>
    </section>
  </div>
  <!-- Footer -->
  <footer class="bg-black/80 py-3 border-t-2 border-red-500 w-full text-center">
    <div class="container mx-auto px-4">
      <p class="footer-font font-punk text-dirty-white text-sm md:text-base tracking-wider">
        © VARNING PRODUCTIONS 2025 - ALL WRONGS RESERVED
      </p>
      <p class="footer-font font-punk text-dirty-white text-xs mt-2">
        MADE WITH <span class="text-red-400">♥</span> AND CHEAP BEER
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-font {
  font-family: 'sans-serif', sans-serif;
  color: white;
}

.text-dirty-white {
  color: #f1f1f1;
  text-shadow:
    0 0 3px #000,
    1px 1px 0 #666,
    -1px -1px 0 #333;
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
</style>

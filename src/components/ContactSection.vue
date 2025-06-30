<template>
  <div class="flex flex-col min-h-screen bg-black text-white font-punk">
    <section id="contact" class="flex-grow w-full p-4 space-y-6">
      <!-- Title -->
      <div class="text-center mt-8">
        <h1 class="text-4xl md:text-5xl font-bold tracking-widest">CONTACT US</h1>
        <p class="text-sm md:text-base text-blue-300 mt-2">
          WE ARE LOOKING FORWARD TO WORKING WITH YOU!
        </p>
      </div>

      <!-- Image -->
      <div class="flex justify-center items-center w-full">
        <img
          src="/images/contact/framtid.jpg"
          alt="Framtid at Varning"
          class="img-resp w-full max-w-screen-xl rounded-lg shadow-lg"
        />
      </div>
    </section>

    <!-- Contact Info -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-6 max-w-screen-xl mx-auto px-4"
    >
      <div class="space-y-2">
        <span class="text-xl">📞</span>
        <p class="text-sm">+46 073 875 7797</p>
      </div>
      <div class="space-y-2">
        <span class="text-xl">📧</span>
        <p class="text-sm">janickvarning@gmail.com</p>
      </div>
      <div class="space-y-2">
        <span class="text-xl">🌐</span>
        <p class="text-sm">www.varningproductions.com</p>
      </div>
      <div class="space-y-2">
        <span class="text-xl">📍</span>
        <p class="text-sm">Hjulsta Backar 27, 163 65 Spånga, Stockholm, Sweden</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-black/80 py-6 border-t-2 border-red-500 w-full">
      <div class="container mx-auto px-4 text-center">
        <p class="footer-font font-punk text-dirty-white text-sm md:text-base tracking-wider">
          © VARNING PRODUCTIONS 2025 - ALL WRONGS RESERVED
        </p>
        <p class="footer-font font-punk text-dirty-white text-xs mt-2">
          Made with <span class="text-red-400 !important">♥</span> and cheap beer
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<style>
p {
  color: #ddd;
  text-shadow:
    0 0 3px #000,
    1px 1px 0 #333;
}

h1 {
  text-shadow:
    0 0 5px #fff,
    1px 1px 0 #666;
}

.img-resp {
  max-width: 100%;
  height: auto;
  width: auto;
  max-height: 60vh;
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

@keyframes footer-flicker {
  0%,
  100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.7;
  }
}

footer:hover p {
  animation: footer-flicker 0.8s infinite;
}

footer .font-punk span.text-red-400 {
  color: #f87171 !important;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

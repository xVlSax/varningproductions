<template>
  <div class="flex flex-col min-h-screen bg-black">
    <!-- Main content that grows to push footer down -->
    <section
      id="contact"
      class="flex-grow bg-texture flex flex-col justify-center items-center p-4"
    >
      <!-- Mega-sized logo container -->
      <div class="flex justify-center items-center w-full px-4">
        <img
          src="/images/logoVarning.svg"
          alt="VARNING PUNK LOGO"
          class="animate-flicker w-full max-w-[320px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px]"
        />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black/80 py-6 border-t-2 border-red-500 w-full">
      <div class="container mx-auto px-4 text-center">
        <p class="font-punk text-dirty-white text-sm md:text-base tracking-wider">
          © COPYRIGHT 2025 - ALL WRONGS RESERVED • VARNING PRODUCTIONS • NO FUTURE
        </p>
        <p class="font-punk text-dirty-white text-xs mt-2">
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
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 15px #ff000055);
  }
  20%,
  22%,
  24%,
  55% {
    opacity: 0.7;
    filter: drop-shadow(0 0 12px #00ffff) drop-shadow(0 0 20px #00ffff55);
  }
}

.animate-flicker {
  animation: flicker 2.5s infinite;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
}

.animate-flicker:hover {
  animation: flicker 0.3s infinite;
  filter: drop-shadow(0 0 20px #ff0000) drop-shadow(0 0 30px #ff000077) !important;
  transform: scale(1.08) rotate(-1deg);
}

.bg-texture {
  background-image:
    url('/images/bg-texture.png'), linear-gradient(45deg, #000000 25%, #1a0000 100%);
  background-blend-mode: overlay;
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

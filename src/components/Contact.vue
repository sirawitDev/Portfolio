<script setup>
import { Phone, Mail, Github } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen  flex items-center justify-center p-4">

    <!-- Main card with glassmorphism -->
    <div class="relative max-w-md w-full">
      <div
        class="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        <!-- Inner glow effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>

        <!-- Content -->
        <div class="relative z-10">
          <h2 class="text-3xl text-center font-bold mb-2 text-white drop-shadow-lg">
            Get in Touch
          </h2>
          <h3 class="text-lg text-center font-medium mb-8 text-white/90 drop-shadow-md">
            Reach out anytime — I'm just a ping away
          </h3>

          <div class="flex justify-center gap-4">
            <a href="tel:0809284193" class="group cursor-pointer transform transition-all duration-300 hover:scale-110"
              aria-label="Call 0809284193">
              <div
                class="p-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg group-hover:bg-white/40 group-hover:shadow-xl transition-all duration-300">
                <Phone class="w-6 h-6 text-white drop-shadow-sm" />
              </div>
            </a>

            <a href="mailto:sirawit.krsri@gmail.com"
              class="group cursor-pointer transform transition-all duration-300 hover:scale-110"
              aria-label="Send mail to sirawit.krsri@gmail.com">
              <div
                class="p-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg group-hover:bg-white/40 group-hover:shadow-xl transition-all duration-300">
                <Mail class="w-6 h-6 text-white drop-shadow-sm" />
              </div>
            </a>

            <a href="https://github.com/sirawitDev" target="_blank" rel="noopener"
              class="group cursor-pointer transform transition-all duration-300 hover:scale-110"
              aria-label="Go to GitHub">
              <div
                class="p-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg group-hover:bg-white/40 group-hover:shadow-xl transition-all duration-300">
                <Github class="w-6 h-6 text-white drop-shadow-sm" />
              </div>
            </a>
          </div>
        </div>

        <!-- Bottom accent line -->
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent">
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <div class=" relative">
    <div class="max-w-5xl mx-auto mt-28 px-4">
      <div class="flex flex-col-reverse md:flex-row gap-4 h-auto md:h-96">
        <div class="flex-1 flex flex-col justify-center items-center text-center md:text-left">
          <div v-show="isVisible" class="animate-slide-up opacity-0">
            <p class="font-bold text-3xl md:text-5xl sm:mt-0 mt-5">
              Hello, It's <span class="text-green-500 animate-color-pulse">Sirawit</span>
            </p>
            <div class="flex gap-2 mt-3">
              <p class="font-bold text-3xl md:text-5xl">I'm a</p>
              <a ref="typingName" class="text-3xl md:text-5xl font-bold text-green-500"></a>
            </div>

          </div>
          <div class="flex gap-4 mt-5 justify-center md:justify-start">
            <a target="_blank" href="https://github.com/sirawitDev"
              class="social-icon-animation bg-white rounded-full p-3 border-green-300 border-2 relative group">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-icons" class="w-6 md:w-8">
              <span
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-black text-white p-1 rounded-md">
                GitHub
              </span>
            </a>

            <a target="_blank" href="https://www.facebook.com/sirawit.kumlungsri/"
              class="social-icon-animation bg-white rounded-full p-3 border-green-300 border-2 relative group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt="facebook-icon" class="w-6 md:w-8">
              <span
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-black text-white p-1 rounded-md">
                Facebook
              </span>
            </a>
          </div>
        </div>

        <!-- Profile Image Section -->
        <div class="flex-1 flex justify-center items-center mt-4 md:mt-0">
          <div ref="profileImage" v-show="isVisible"
            class="animate-scale-in opacity-0 flex justify-center items-center cursor-pointer bg-green-300 rounded-full w-80 h-80 shadow-xl border-2 border-green-400 transition-all duration-300 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(72,240,120,0.6)] hover:filter hover:border-blur-sm">
            <img src="/assets/รูปresume.png" alt="profile-image" class="w-full h-full object-cover rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import TypeIt from 'typeit'
import BackgroundViewVue from './BackgroundView.vue.vue'

const typingName = ref(null)
const profileImage = ref(null)
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true

  nextTick(() => {
    new TypeIt(typingName.value, {
      strings: ["Web Developer"],
      speed: 100,
      loop: true,
      waitUntilVisible: true,
      loopDelay: 3000,
    }).go()
  })
})
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 1s ease forwards;
}

.animate-scale-in {
  animation: scaleIn 1s ease forwards;
}

.animate-color-pulse {
  animation: colorPulse 2s infinite;
}

.social-icon-animation {
  animation: bounceIn 1s ease forwards;
  animation-delay: 1s;
  opacity: 0;
}

@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes colorPulse {
  0% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.2);
  }

  100% {
    filter: brightness(1);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
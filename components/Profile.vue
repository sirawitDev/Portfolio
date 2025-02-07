<template>
  <div class="relative" >
    <div class="max-w-5xl mx-auto mt-28 px-4">
      <div class="flex flex-col-reverse md:flex-row gap-4 h-auto md:h-96" :class="{ 'md:flex-row-reverse': isFlipped }">

        <div class="flex-1 flex flex-col justify-center items-center"
          :class="{ 'md:text-left': !isFlipped, 'md:text-right': isFlipped }">
          <div v-show="isVisible" class="animate-slide-up opacity-0">
            <p class="font-bold text-3xl md:text-5xl sm:mt-0 mt-5 text-nowrap">
              {{ languageStore.t('hello') }} <span class="text-green-500 animate-color-pulse">{{ languageStore.t('name')
                }}</span>
            </p>
            <div class="flex gap-2 mt-3 text-nowrap" :class="{ 'justify-end': isFlipped }">
              <p class="font-bold text-3xl md:text-5xl">{{ languageStore.t('im_a') }}</p>
              <a ref="typingName"
                class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-yellow-200 text-transparent bg-clip-text"></a>
            </div>
          </div>

          <div class="flex gap-4 mt-5" :class="{ 'md:justify-start': !isFlipped, 'md:justify-end': isFlipped }">
            <a target="_blank" href="https://github.com/sirawitDev"
              class="social-icon-animation bg-white rounded-full p-3 border-green-300 border-2 relative group"
              :class="{ 'border-yellow-300': !themeStore.isDarkMode }">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-icons" class="w-6 md:w-8">
              <span
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-black text-white p-1 rounded-md">
                GitHub
              </span>
            </a>

            <a target="_blank" href="https://www.facebook.com/sirawit.kumlungsri/"
              class="social-icon-animation bg-white rounded-full p-3 border-green-300 border-2 relative group"
              :class="{ 'border-yellow-300': !themeStore.isDarkMode }">
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
          <div ref="profileImage" v-show="isVisible" @click="togglePosition"
            class="animate-scale-in opacity-0 flex justify-center items-center cursor-pointer rounded-full w-80 h-80 border-2 transition-all duration-300 ease-in-out hover:filter hover:border-blur-sm"
            :class="[boxShadowStyle, backgroundColor, backgroundBorder]">
            <img src="/assets/รูปresume.png" alt="profile-image" class="w-full h-full object-cover rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, watch } from 'vue'
import TypeIt from 'typeit'
import { useThemeStore, useLanguageStore } from '#imports'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const typingName = ref(null)
const typeInstance = ref(null)
const isVisible = ref(false)
const isFlipped = ref(false)

const togglePosition = () => {
  isFlipped.value = !isFlipped.value
}

const boxShadowStyle = computed(() => {
  return themeStore.isDarkMode
    ? 'shadow-[0_0_10px_#00aa00,0_0_20px_#00aa00,0_0_40px_#00aa00,0_0_80px_#00aa00]'
    : 'shadow-[0_0_10px_#ffe649,0_0_20px_#ffe649,0_0_40px_#fff085,0_0_80px_#ffaa00]'
})

const backgroundColor = computed(() => {
  return themeStore.isDarkMode ? 'bg-green-300' : 'bg-[#fff6c6]'
})

const backgroundBorder = computed(() => {
  return themeStore.isDarkMode ? 'border-green-400' : 'border-[#fff6c6]'
})


const initTypeIt = () => {
  if (typeInstance.value) {
    typeInstance.value.destroy() // ล้าง instance เก่า
  }

  typeInstance.value = new TypeIt(typingName.value, {
    strings: [languageStore.t("web_developer")],
    speed: 100,
    loop: true,
    waitUntilVisible: true,
    loopDelay: 3000,
  }).go()
}

onMounted(() => {
  isVisible.value = true
  nextTick(() => {
    initTypeIt()
  })
})

// Watch เมื่อเปลี่ยนภาษาแล้วรีเฟรช TypeIt
watch(() => languageStore.locale, () => {
  nextTick(() => {
    initTypeIt()
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

.neon-border {
  border: 2px solid #00ff00;
  box-shadow: 0 0 10px #00aa00, 0 0 20px #00aa00, 0 0 40px #00aa00, 0 0 80px #00aa00;
}
</style>
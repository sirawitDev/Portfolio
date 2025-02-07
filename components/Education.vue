<template>
  <div class="flex justify-center px-4 sm:px-6 lg:px-8 mb-44 mt-20">
    <div id="about-section" ref="sectionRef"
      class="mt-8 sm:mt-16 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full  p-2 sm:p-4 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm opacity-0 translate-y-6"
      :class="[
        { 'bg-white': !themeStore.isDarkMode, 'bg-zinc-800/80': themeStore.isDarkMode },
        { 'opacity-100 translate-y-0': isVisible }
      ]">

      <div class="flex justify-center mt-3 sm:mt-5">
        <p class="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent
            hover:from-blue-500 hover:to-green-400 transition-all opacity-0 translate-y-6"
          :class="{ 'opacity-100 translate-y-0': isVisible }" style="transition-delay: 200ms">{{
            languageStore.t('profile') }}</p>
      </div>

      <div class="flex flex-col lg:flex-row justify-center mb-6 sm:mb-10 mt-6 sm:mt-10 gap-4 sm:gap-8">

        <div class="w-full lg:flex-1">
          <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl  opacity-0 translate-y-6" :class="[
            {
              'bg-white shadow-xl sm:shadow-2xl': !themeStore.isDarkMode,
              'bg-zinc-700/90 border-2 border-zinc-600': themeStore.isDarkMode
            },
            { 'opacity-100 translate-y-0': isVisible }
          ]" style="transition-delay: 400ms">
            <div class="flex justify-center mb-4 sm:mb-6">
              <p
                class="text-xl sm:text-2xl font-semibold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                {{ languageStore.t('education') }}
              </p>
            </div>

            <!-- Final -->
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

              <li class="timeline-item">
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00ff00"
                    class="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" filter="url(#neon)">
                    <defs>
                      <filter id="neon">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#00ff00" />
                      </filter>
                    </defs>
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd" />
                  </svg>
                </div>

                <div class="timeline-start mb-6 sm:mb-10">
                  <time class="font-mono italic font-semibold text-sm sm:text-base text-emerald-600">2015 - 2020</time>
                  <div
                    class=" border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 mt-2 sm:mt-3 hover:shadow-neon-intense transition-all duration-300"
                    :class="{
                      'shadow-neon': !themeStore.isDarkMode,
                      'shadow-neon-dark': themeStore.isDarkMode
                    }">
                    <p class="text-base sm:text-lg font-black">{{ languageStore.t('highschool') }}</p>
                    <p class="text-sm sm:text-base">{{ languageStore.t('highschoolMe') }}</p>
                  </div>
                </div>
                <hr class="border-green-300" />
              </li>

              <li class="timeline-item">
                <hr class="border-green-300" />
                <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00ff00"
                    class="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" filter="url(#neon)">
                    <defs>
                      <filter id="neon">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#00ff00" />
                      </filter>
                    </defs>
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd" />
                  </svg>
                </div>

                <div class="timeline-end md:mb-6 sm:mb-10">
                  <time class="font-mono italic font-semibold text-sm sm:text-base text-emerald-600"
                    :class="{ 'text-black': themeStore.isDarkMode }">2021 - 2025</time>
                  <div
                    class=" border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 mt-2 sm:mt-3 hover:shadow-neon-intense transition-all duration-300"
                    :class="{
                      'shadow-neon': !themeStore.isDarkMode,
                      'shadow-neon-dark': themeStore.isDarkMode
                    }">
                    <p class="text-base sm:text-lg font-black">{{ languageStore.t('university') }}</p>
                    <p class="text-sm sm:text-base">{{ languageStore.t('universityMe') }}</p>
                    <p class="text-sm sm:text-sm">{{ languageStore.t('universityFacMe') }}</p>
                  </div>
                </div>
                <hr class="border-green-300" />
              </li>
            </ul>
          </div>
        </div>

        <!-- Personal Info Section -->
        <div class="w-full lg:flex-1">
          <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl opacity-0 translate-y-6" :class="[
            {
              'bg-white shadow-xl sm:shadow-2xl': !themeStore.isDarkMode,
              'bg-zinc-700/90 border-2 border-zinc-600': themeStore.isDarkMode
            },
            { 'opacity-100 translate-y-0': isVisible }
          ]" style="transition-delay: 600ms">
            <p
              class="text-xl sm:text-2xl font-semibold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 text-center bg-clip-text text-transparent">
              {{ languageStore.t('personalinformation') }}
            </p>

            <div class="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg shadow-md" :class="{
              'bg-gray-100': !themeStore.isDarkMode,
              'bg-zinc-800/80 border border-zinc-600': themeStore.isDarkMode
            }">
              <p class="text-lg sm:text-xl font-semibold text-center bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text"
                :class="{ 'bg-gradient-to-r from-green-500 to-yellow-200 text-transparent bg-clip-text': themeStore.isDarkMode }">
                {{ languageStore.t('fullname') }}
              </p>
              <p class="text-sm sm:text-base text-center mt-2 text-gray-700 "
                :class="{ 'text-white': themeStore.isDarkMode }">
                {{ languageStore.t('web_developerInfo') }} Vue.js, Nuxt.js
              </p>

              <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center gap-2">
                  <Age />
                  <span class="text-gray-700 " :class="{ 'text-white': themeStore.isDarkMode }">{{ languageStore.t('age')
                    }} : 22 {{ languageStore.t('year') }}</span>
                </div>

                <div class="flex items-center gap-2">
                  <Occupation />
                  <span class="text-gray-700 text-nowrap" :class="{ 'text-white': themeStore.isDarkMode }">{{
                    languageStore.t('status') }} : {{ languageStore.t('statusMe') }}</span>
                </div>

                <div class="flex items-center gap-2">
                  <Location />
                  <span class="text-gray-700 " :class="{ 'text-white': themeStore.isDarkMode }">{{
                    languageStore.t('location') }} : {{ languageStore.t('locationMe') }}</span>
                </div>

                <div class="flex items-center gap-2">
                  <Email />
                  <span class="text-gray-700 text-nowrap " :class="{ 'text-white': themeStore.isDarkMode }">{{
                    languageStore.t('email') }} : sirawit.krsri@gmail.com</span>
                </div>

                <div class="flex items-center gap-2">
                  <Tel />
                  <span class="text-gray-700 " :class="{ 'text-white': themeStore.isDarkMode }">{{
                    languageStore.t('phonenumber') }} : 0809284193</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore, useLanguageStore } from '#imports'
import Tel from './icons/Tel.vue'
import Email from './icons/Email.vue'
import Age from './icons/Age.vue'
import Location from './icons/Location.vue'
import Occupation from './Occupation.vue'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const sectionRef = ref(null)
const isVisible = ref(false)

const observerOptions = {
  threshold: 0.1,
  rootMargin: '50px'
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, observerOptions)

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.shadow-neon {
  @apply border-2 border-[#FFFF00];
  box-shadow: 0 0 3px #FFFF00, 0 0 6px #FFFF00, 0 0 12px #FFFF00;
}

.shadow-neon-dark {
  @apply border-2 border-[#00ff00];
  box-shadow: 0 0 3px #00ff00, 0 0 6px #00ff00, 0 0 12px #00ff00;
  transition: all 0.3s ease;
}

.shadow-neon-intense {
  box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-text {
  background-size: 300%;
  animation: gradient 3s ease infinite;
}

@media (max-width: 640px) {
  .timeline-vertical {
    --timeline-row-start: 1.8rem;
    --timeline-row-end: 1.8rem;
  }
}

.translate-y-6 {
  transform: translateY(1.5rem);
}

[class*="transition-"] {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1000ms;
}
</style>
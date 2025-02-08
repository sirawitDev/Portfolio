<template>
  <div id="about-section" ref="sectionRef" class="flex justify-center px-4 sm:px-6 lg:px-8 mb-24 mt-20">
    <div
      class="mt-8 sm:mt-16 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full p-2 sm:p-4 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm opacity-0 translate-y-6"
      :class="[
        { 'bg-white': !themeStore.isDarkMode, 'bg-zinc-800/80': themeStore.isDarkMode },
        { 'opacity-100 translate-y-0': isVisible }
      ]">

      <div class="flex justify-center mt-3 sm:mt-5">
        <p class="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent
            hover:from-blue-500 hover:to-green-400 transition-all opacity-0"
          :class="{ 'opacity-100 translate-y-0': isVisible }" style="transition-delay: 200ms">
          {{ languageStore.t('profile') }}
        </p>
      </div>

      <div class="flex flex-col lg:flex-row justify-center mt-6 sm:mt-10 gap-4 sm:gap-8">

        <div class="w-full lg:flex-1">
          <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl opacity-0" :class="[
            {
              'bg-white shadow-xl sm:shadow-xl': !themeStore.isDarkMode,
              'bg-zinc-700/90 border-2 border-zinc-600': themeStore.isDarkMode
            },
            { 'opacity-100 translate-y-2': isVisible }
          ]" style="transition-delay: 1000ms">

            <!-- Skills Header -->
            <div class="flex justify-center mb-4 sm:mb-6">
              <p
                class="text-xl sm:text-2xl font-semibold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                {{ languageStore.t('skill') }}
              </p>
            </div>

            <!-- Frontend Skills -->
            <div class="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg shadow-md" :class="{
              'bg-gray-100': !themeStore.isDarkMode,
              'bg-zinc-800/80 border border-zinc-600': themeStore.isDarkMode
            }">
              <div class="flex flex-col sm:flex-row items-center justify-center">
                <p class="text-lg sm:text-xl font-semibold sm:text-start text-center bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-4"
                  :class="{ 'bg-gradient-to-r from-green-500 to-yellow-200': themeStore.isDarkMode }">
                  Frontend
                </p>

                <div class="divider lg:divider-horizontal mt-0"></div>

                <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
                
                  <div v-for="item in frontend" :key="item.name"
                    class="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                    <img :src="item.img" :alt="item.name" class="w-10 h-10 object-contain">

                    <span class="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      :class="{ 'text-gray-700': !themeStore.isDarkMode, 'text-gray-300': themeStore.isDarkMode }">
                      {{ item.name }}
                    </span>

                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Skills -->
            <div class="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg shadow-md" :class="{
              'bg-gray-100': !themeStore.isDarkMode,
              'bg-zinc-800/80 border border-zinc-600': themeStore.isDarkMode
            }">
              <div class="flex flex-col sm:flex-row items-center">
                <p class="text-lg sm:text-xl font-semibold text-center sm:text-start bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-4"
                  :class="{ 'bg-gradient-to-r from-green-500 to-yellow-200': themeStore.isDarkMode }">
                  Backend
                </p>

                <div class="divider lg:divider-horizontal mt-0"></div>

                <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  <div v-for="item in backend" :key="item.name"
                    class="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                    <img :src="item.img" :alt="item.name" class="w-10 h-10 object-contain">
                    <span class="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      :class="{ 'text-gray-700': !themeStore.isDarkMode, 'text-gray-300': themeStore.isDarkMode }">
                      {{ item.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Database Skills -->
            <div class="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg shadow-md" :class="{
              'bg-gray-100': !themeStore.isDarkMode,
              'bg-zinc-800/80 border border-zinc-600': themeStore.isDarkMode
            }">
              <div class="flex flex-col sm:flex-row items-center">
                <p class="text-lg sm:text-xl font-semibold text-center sm:text-start bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-4"
                  :class="{ 'bg-gradient-to-r from-green-500 to-yellow-200': themeStore.isDarkMode }">
                  Database
                </p>

                <div class="divider lg:divider-horizontal mt-0"></div>

                <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  <div v-for="item in database" :key="item.name"
                    class="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                    <img :src="item.img" :alt="item.name" class="w-10 h-10 object-contain">
                    <span class="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      :class="{ 'text-gray-700': !themeStore.isDarkMode, 'text-gray-300': themeStore.isDarkMode }">
                      {{ item.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Info Section -->
        <div class="w-full lg:flex-1">
          <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl h-full opacity-0" :class="[
            {
              'bg-white shadow-xl sm:shadow-xl': !themeStore.isDarkMode,
              'bg-zinc-700/90 border-2 border-zinc-600': themeStore.isDarkMode
            },
            { 'opacity-100 translate-y-0': isVisible }
          ]" style="transition-delay: 1000ms">
            <p
              class="text-xl sm:text-2xl font-semibold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 text-center bg-clip-text text-transparent">
              {{ languageStore.t('personalinformation') }}
            </p>

            <div class="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg shadow-md" :class="{
              'bg-gray-100': !themeStore.isDarkMode,
              'bg-zinc-800/80 border border-zinc-600': themeStore.isDarkMode
            }">
              <p class="text-lg sm:text-xl font-semibold text-center bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text"
                :class="{ 'bg-gradient-to-r from-green-500 to-yellow-200': themeStore.isDarkMode }">
                {{ languageStore.t('fullname') }}
              </p>
              <p class="text-sm sm:text-base text-center mt-2"
                :class="{ 'text-gray-700': !themeStore.isDarkMode, 'text-gray-300': themeStore.isDarkMode }">
                {{ languageStore.t('web_developerInfo') }} Vue.js, Nuxt.js
              </p>

              <div class="divider my-4"></div>

              <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="(info, index) in personalInfo" :key="index"
                  class="flex items-center gap-2 group transition-all duration-300 hover:translate-x-2">
                  <component :is="info.icon" class="w-5 h-5" />
                  <span :class="{ 'text-gray-700': !themeStore.isDarkMode, 'text-white': themeStore.isDarkMode }">
                    {{ languageStore.t(info.label) }} : {{ info.value }}
                  </span>
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
import Occupation from './icons/Occupation.vue'
import University from './icons/University.vue'

const educationSection = ref(null)
const educationVisible = ref(false)

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const frontend = [
  { img: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png', name: "HTML5" },
  { img: 'https://img.icons8.com/fluent/512/css3.png', name: "CSS" },
  { img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png', name: "Javascript" },
  { img: 'https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png', name: "VueJS" },
  { img: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256', name: "ReactJS" },
  { img: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png', name: "TailwindCSS" },
]

const backend = [
  { img: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png', name: "NodeJS" },
  { img: 'https://img.icons8.com/color/512/express-js.png', name: "ExpressJS" },
  { img: 'https://static-00.iconduck.com/assets.00/prisma-icon-424x512-q3326vpv.png', name: "Prisma" },
]

const database = [
  { img: 'https://static-00.iconduck.com/assets.00/database-mysql-icon-1849x2048-81vgyimd.png', name: "MySQL" },
  { img: 'https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png', name: "Postgres" },
  { img: 'https://www.svgrepo.com/show/331488/mongodb.svg', name: "MongoDB" },
  { img: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png', name: "Firebase" },
]

const personalInfo = [
  { icon: Age, label: 'age', value: '22 ' + languageStore.t('year') },
  { icon: Occupation, label: 'status', value: languageStore.t('statusMe') },
  { icon: Location, label: 'location', value: languageStore.t('locationMe') },
  { icon: Email, label: 'email', value: 'sirawit.krsri@gmail.com' },
  { icon: Tel, label: 'phonenumber', value: '0809284193' },
  { icon: University, label: languageStore.t('university'), value: languageStore.t('universityMe') },
]

const sectionRef = ref(null)
const isVisible = ref(false)

const observerOptions = {
  threshold: 0.5,
  rootMargin: '50px'
}

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, observerOptions);

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.animate-text {
  background-size: 300%;
  animation: gradient 3s ease infinite;
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

.translate-y-6 {
  transform: translateY(1.5rem);
}

[class*="transition-"] {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1000ms;
}

/* .divider {
  @apply h-px w-full bg-gray-200 dark:bg-gray-700;
} */
</style>
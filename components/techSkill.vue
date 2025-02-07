<template>
  <div class="overflow-hidden pt-5 pb-5 relative" :class="{'dark-mode': themeStore.isDarkMode}">
    <div class="flex">
      <div class="flex gap-5 animate-scroll">
        <div
          v-for="(item, index) in doubledData"
          :key="`${item.name}-${index}`"
          class="bg-white rounded-full p-2 flex gap-2 justify-center items-center min-w-max"
          :class="{'bg-green-500': themeStore.isDarkMode}"
        >
          <img :src="item.img" alt="" class="w-4 h-4">
          <p
            class="text-sm font-light whitespace-nowrap"
            :class="{'text-black': themeStore.isDarkMode}"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useThemeStore } from '#imports'

const themeStore = useThemeStore()
const data = [
  { img: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png', name: "HTML5" },
  { img: 'https://img.icons8.com/fluent/512/css3.png', name: "CSS" },
  { img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png', name: "Javascript" },
  { img: 'https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png', name: "MySQL" },
  { img: 'https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png', name: "VueJS" },
  { img: 'https://static-00.iconduck.com/assets.00/nuxt-icon-icon-2048x1520-wbh7ctgr.png', name: "NuxtJS" },
  { img: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256', name: "ReactJS" },
  { img: 'https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png', name: "NextJS" },
  { img: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png', name: "TailwindCSS" },
  { img: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png', name: "NodeJS" },
  { img: 'https://img.icons8.com/color/512/express-js.png', name: "ExpressJS" },
  { img: 'https://static-00.iconduck.com/assets.00/database-mysql-icon-1849x2048-81vgyimd.png', name: "MySQL" },
  { img: 'https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png', name: "Postgres" },
  { img: 'https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-wn3ad6uo.png', name: "MongoDB" },
  { img: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png', name: "Firebase" },
  { img: 'https://static-00.iconduck.com/assets.00/prisma-icon-424x512-q3326vpv.png', name: "Prisma" }
]

const doubledData = computed(() => [...data, ...data])

onMounted(() => {
  console.log('themeStore : ' , themeStore.isDarkMode)
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  gap: 10px;
  animation: scroll 40s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

.relative {
  position: relative;
  overflow: hidden;
}

.relative::before,
.relative::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%;
  z-index: 10;
}

.relative::before {
  left: 0;
  background: linear-gradient(to right, rgb(249, 247, 245), rgba(249, 247, 245, 0));
}

.relative::after {
  right: 0;
  background: linear-gradient(to left, rgb(249, 247, 245), rgba(249, 247, 245, 0));
}

.dark-mode::before {
  background: linear-gradient(to right, rgb(29, 35, 42), rgba(29, 35, 42, 0));
}

.dark-mode::after {
  background: linear-gradient(to left, rgb(29, 35, 42), rgba(29, 35, 42, 0));
}
</style>
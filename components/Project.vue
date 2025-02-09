<template>
  <div id="project-section" ref="sectionRef" class="flex justify-center px-4 sm:px-6 lg:px-8 mb-28">
    <div
      class="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl h-full w-full p-2 sm:p-4 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm">
      <div class="flex justify-center mt-5">
        <p class="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent
            hover:from-blue-500 hover:to-green-400 transition-all">
          {{ languageStore.t('project') }}
        </p>
      </div>

      <div class="max-w-[1350px] mx-auto">
        <div class="grid sm:grid-cols-3 grid-cols-1 mt-5 p-4 gap-5">
          <!-- Card Project -->
          <div v-for="(project, index) in projects" :key="index"
            class="p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            :class="themeStore.isDarkMode ? 'bg-zinc-700/90 border-2 border-zinc-600' : 'bg-white shadow-xl sm:shadow-xl'">

            <p class="text-center text-xl font-semibold truncate">
              {{ project.title }}
            </p>


            <p class="text-center text-sm text-gray-500">{{ project.description }}</p>

            <!-- Tech Stack -->
            <div class="flex gap-3 justify-center mt-5">

              <div
                v-for="item in project.title === 'Sales Management Platform With Dealer and Afiliate Markting System' ? tech2 : tech"
                :key="item.name" class="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                <img :src="item.img" :alt="item.name"
                  class="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity duration-300" />
                <span class="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  :class="themeStore.isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                  {{ item.name }}
                </span>
              </div>

            </div>

            <!-- Image Slider -->
            <div class="relative w-full h-[250px] overflow-hidden mt-5">
              <div class="flex transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateX(-${project.currentIndex * 100}%)` }">
                <img v-for="(image, imgIndex) in project.images" :key="imgIndex" :src="image.img" :alt="image.name"
                  class="w-full h-[250px] flex-shrink-0 rounded-lg border-2 border-zinc-200 shadow-md" />
              </div>

              <button @click="prevImage(index)"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-all hover:scale-105">
                ◀
              </button>

              <button @click="nextImage(index)"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-all hover:scale-105">
                ▶
              </button>
            </div>

            <div class="flex justify-center mt-5 gap-2 sm:gap-5">
              <button
                class="btn bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300">
                {{ languageStore.t('more') }}
              </button>

              <button @click="visitWebsite(project.link)"
                class="btn bg-gray-500 text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300">
                {{ languageStore.t('visitwebsite') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useThemeStore, useLanguageStore } from '#imports'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

const tech = [
  { img: 'https://static-00.iconduck.com/assets.00/nuxt-icon-icon-2048x1520-wbh7ctgr.png', name: "NuxtJS" },
  { img: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png', name: "TailwindCSS" },
  { img: 'https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png', name: "Postgres" },
  { img: 'https://static-00.iconduck.com/assets.00/prisma-icon-424x512-q3326vpv.png', name: "Prisma" },
]

const tech2 = [
  { img: 'https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png', name: "VueJS" },
  { img: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png', name: "TailwindCSS" },
  { img: 'https://www.svgrepo.com/show/331488/mongodb.svg', name: "MongoDB" },
  { img: 'https://img.icons8.com/color/512/express-js.png', name: "ExpressJS" },
]

const projects = ref([
  {
    title: "MyPos",
    description: "ระบบ POS สำหรับจัดการสินค้าและการขาย",
    images: [
      { img: 'https://img2.pic.in.th/pic/loginfdbc319e5d5634fc.png', name: 'login' },
      { img: 'https://img2.pic.in.th/pic/userDash.png', name: 'userDash' },
      { img: 'https://img5.pic.in.th/file/secure-sv1/userProduct.png', name: 'userProduct' },
      { img: 'https://img2.pic.in.th/pic/userPos.png', name: 'userPos' },
      { img: 'https://img2.pic.in.th/pic/userOrder.png', name: 'userOrder' },
    ],
    currentIndex: 0,
    link: 'https://pos101.vercel.app/'
  },
  {
    title: "Clinic Management",
    description: "ระบบจัดการข้อมูลคลินิกและเวชระเบียน",
    images: [
      { img: 'https://img5.pic.in.th/file/secure-sv1/adminDash.png', name: 'adminDashboard' },
      { img: 'https://img2.pic.in.th/pic/ReserUser.png', name: 'reserUser' },
      { img: 'https://img5.pic.in.th/file/secure-sv1/userHome.png', name: 'userHome' },
    ],
    currentIndex: 0,
    link: "https://nuxtjs-clinic.vercel.app/"
  },
  {
    title: "Sales Management Platform With Dealer and Afiliate Markting System",
    description: "ระบบบริหารการขายด้วยตัวแทนจำหน่ายและการตลาดแบบพันธมิตร",
    images: [
      { img: 'https://img5.pic.in.th/file/secure-sv1/home0af987a4993852d6.png', name: 'home' },
      { img: 'https://img2.pic.in.th/pic/ProductView.png', name: 'productView' },
      { img: 'https://img5.pic.in.th/file/secure-sv1/checkoutView.png', name: 'checkoutView' },
      { img: 'https://img5.pic.in.th/file/secure-sv1/overallOrder.png', name: 'overallOrder' },
      { img: 'https://img5.pic.in.th/file/secure-sv1/adminPos.png', name: 'adminPOS' },
      { img: 'https://img2.pic.in.th/pic/adminOrder.png', name: 'adminOrder' },
    ],
    currentIndex: 0,
    link: "https://washworlds.online/"
  }
])

const visitWebsite = (link) => {
  window.open(link, '_blank')
}

const nextImage = (index) => {
  projects.value[index].currentIndex = (projects.value[index].currentIndex + 1) % projects.value[index].images.length
}

const prevImage = (index) => {
  projects.value[index].currentIndex = (projects.value[index].currentIndex - 1 + projects.value[index].images.length) % projects.value[index].images.length
}
</script>

<style scoped>
/* Fade และ Slide Effect */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(120px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>

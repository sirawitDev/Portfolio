<script setup>
import { ref } from 'vue'

const showDatabase = ref(true)
const showExperience = ref(true)

const frontend = [
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png', name: "VueJS" },
  { img: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256', name: "ReactJS" },
  { img: 'https://nuxt.com/assets/design-kit/icon-green.svg', name: "NuxtJS" },
  { img: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg', name: "NextJS" },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png', name: "TailwindCSS" },
];

const backend = [
  { img: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-png-download-1174925.png?f=webp', name: "NodeJS" },
  { img: 'https://img.icons8.com/color/512/express-js.png', name: "ExpressJS" },
  { img: 'https://www.svgrepo.com/show/373776/light-prisma.svg', name: "Prisma" },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/2120px-NestJS.svg.png', name: "NestJS" },
];

const database = [
  { img: 'https://www.svgrepo.com/show/303251/mysql-logo.svg', name: "MySQL" },
  { img: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png', name: "Postgres" },
  { img: 'https://www.svgrepo.com/show/331488/mongodb.svg', name: "MongoDB" },
  { img: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png', name: "Firebase" },
];

const serverother = [
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/DigitalOcean_icon.svg/2048px-DigitalOcean_icon.svg.png', name: "Digitalocean" },
  { img: 'https://www.svgrepo.com/show/354513/vercel-icon.svg', name: "Vercel" },
  { img: 'https://railway.app/brand/logo-dark.svg', name: "Railway" },
  { img: 'https://images.icon-icons.com/2699/PNG/512/nginx_logo_icon_169915.png', name: "Nginx" },
  { img: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256', name: "Postman" },
  { img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png', name: "Github" },
  { img: 'https://www.creativeforce.io/hs-fs/hubfs/aws-logo.png?width=2000&height=1500&name=aws-logo.png', name: "AWS" },
];
</script>

<template>
  <div class="min-h-screen mt-20 py-8 px-4 sm:px-6 lg:px-8 
              bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 
              dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-indigo-950">
    <div class="text-center mb-8 sm:mb-12">
      <h1 class="text-3xl mt-20 sm:text-4xl lg:text-5xl font-bold 
                 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 
                 dark:from-green-500 dark:to-yellow-200 
                 bg-clip-text text-transparent mb-2">
        Profile
      </h1>
      <div class="w-24 h-1 
                  bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 
                  dark:from-green-500 dark:to-yellow-200 
                  mx-auto rounded-full">
      </div>
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">

        <!-- Profile Card -->
        <div class="lg:flex-[0.8] w-full">
          <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl 
                      border border-white/30 
                      dark:bg-gray-800/90 dark:border-gray-700/50 
                      p-6 sm:p-8 h-full">
            <div class="flex flex-col items-center text-center">

              <div class="relative mb-6">
                <div class="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full p-1 
                           bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 
                           dark:from-green-500 dark:to-yellow-200 
                           shadow-xl">
                  <img src="https://img2.pic.in.th/pic/IMG_57799c0021f2d5ecfdbb.jpg" alt="Profile"
                    class="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800">
                </div>
                <div class="absolute -bottom-2 -right-2 w-8 h-8 
                           bg-emerald-500 dark:bg-green-400 
                           rounded-full border-4 
                           border-white dark:border-gray-800 
                           shadow-lg">
                </div>
              </div>

              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold 
                         text-gray-800 dark:text-gray-100 mb-6">
                Sirawit Kumlangsri
              </h2>

              <div class="flex flex-wrap justify-center gap-3 mb-6">
                <span class="px-4 py-2 
                           bg-gradient-to-r from-blue-500 to-blue-600 
                           dark:from-cyan-500 dark:to-blue-500 
                           text-white rounded-full font-medium shadow-lg 
                           hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Web Developer
                </span>

                <span class="px-4 py-2 
                           bg-gradient-to-r from-purple-500 to-purple-600 
                           dark:from-purple-400 dark:to-pink-500 
                           text-white rounded-full font-medium shadow-lg 
                           hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Fullstack
                </span>
              </div>

              <!-- Bio Section -->
              <div class="bg-gray-50/80 dark:bg-gray-700/50 
                          rounded-xl p-6 
                          border border-gray-200/50 dark:border-gray-600/30">
                <p class="text-gray-600 dark:text-gray-300 
                          leading-relaxed text-sm sm:text-base">
                  A junior web developer with hands-on experience in both front-end and back-end development.
                  Proficient in developing new features, managing databases, and collaborating effectively
                  within a team using Git to deliver projects efficiently. Seeking an opportunity to apply and
                  expand my skills while contributing to a forward-thinking organization.
                </p>
              </div>

              <!-- Work Experience -->
              <div class="mt-5 w-full">
                <div class="bg-gradient-to-r from-orange-50 to-amber-50 
                           dark:from-orange-900/30 dark:to-amber-900/30 
                           rounded-xl p-6 
                           border border-orange-200/50 dark:border-orange-700/30 
                           shadow-sm hover:shadow-md transition-all duration-300">
                  <h4 class="text-lg font-semibold 
                             text-gray-800 dark:text-gray-200 
                             mb-4 flex items-center">
                    <span class="w-3 h-3 
                                 bg-orange-500 dark:bg-orange-400 
                                 rounded-full mr-3"></span>
                    Work Experience
                  </h4>

                  <div class="space-y-4">
                    <div class="bg-white/80 dark:bg-gray-800/50 
                                rounded-lg p-4 shadow-sm 
                                border border-gray-200/50 dark:border-gray-700/30 
                                hover:shadow-md transition-all duration-300">
                      <div class="flex justify-between items-start mb-2">
                        <h5 class="font-bold text-gray-800 dark:text-gray-200">Full-Stack Developer</h5>
                        <span class="px-2 py-1 
                                     bg-gradient-to-r from-orange-500 to-orange-600 
                                     dark:from-orange-400 dark:to-red-500 
                                     text-white text-xs rounded-full font-medium">
                          Nov 2024 - Aug 2025
                        </span>
                      </div>
                      <p class="text-sm font-medium 
                                text-gray-600 dark:text-gray-400 mb-2">
                        Digital Developer Service Center Co., Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skill Card -->
        <div class="lg:flex-[1.2] w-full">
          <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl 
                      border border-white/30 
                      dark:bg-gray-800/90 dark:border-gray-700/50 
                      p-6 sm:p-8 h-full">

            <div class="text-center mb-8">
              <h3 class="text-2xl sm:text-3xl font-bold 
                         bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 
                         dark:from-green-500 dark:to-yellow-200 
                         bg-clip-text text-transparent mb-2">
                Skills
              </h3>
              <div class="w-16 h-1 
                          bg-gradient-to-r from-blue-500 to-purple-500 
                          dark:from-green-500 dark:to-yellow-200 
                          mx-auto rounded-full">
              </div>
            </div>

            <!-- Frontend Section -->
            <div class="mb-6">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 
                          dark:from-blue-900/20 dark:to-indigo-900/20 
                          rounded-xl p-6 
                          border border-blue-200/50 dark:border-blue-700/30 
                          shadow-sm hover:shadow-md transition-all duration-300">
                <h4 class="text-lg font-semibold 
                           text-gray-800 dark:text-gray-200 
                           mb-4 flex items-center">
                  <span class="w-3 h-3 
                               bg-blue-500 dark:bg-cyan-400 
                               rounded-full mr-3"></span>
                  Frontend
                </h4>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div v-for="item in frontend" :key="item.name"
                    class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg 
                                bg-white dark:bg-gray-700 
                                shadow-md p-2 mb-2 
                                group-hover:shadow-lg group-hover:scale-110 
                                transition-all duration-300">
                      <img :src="item.img" :alt="item.name" class="w-full h-full object-contain">
                    </div>
                    <p class="text-xs sm:text-sm font-medium 
                              text-gray-700 dark:text-gray-300 
                              group-hover:text-blue-600 dark:group-hover:text-cyan-400 
                              transition-colors duration-300">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Section -->
            <div class="mb-6">
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 
                          dark:from-green-900/20 dark:to-emerald-900/20 
                          rounded-xl p-6 
                          border border-green-200/50 dark:border-green-700/30 
                          shadow-sm hover:shadow-md transition-all duration-300">
                <h4 class="text-lg font-semibold 
                           text-gray-800 dark:text-gray-200 
                           mb-4 flex items-center">
                  <span class="w-3 h-3 
                               bg-green-500 dark:bg-emerald-400 
                               rounded-full mr-3"></span>
                  Backend
                </h4>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div v-for="item in backend" :key="item.name" 
                    class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg 
                                bg-white dark:bg-gray-700 
                                shadow-md p-2 mb-2 
                                group-hover:shadow-lg group-hover:scale-110 
                                transition-all duration-300">
                      <img :src="item.img" :alt="item.name" class="w-full h-full object-contain">
                    </div>
                    <p class="text-xs sm:text-sm font-medium 
                              text-gray-700 dark:text-gray-300 
                              group-hover:text-green-600 dark:group-hover:text-emerald-400 
                              transition-colors duration-300">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Database/Server Section -->
            <div class="mb-6">
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 
                          dark:from-purple-900/20 dark:to-pink-900/20 
                          rounded-xl p-6 
                          border border-purple-200/50 dark:border-purple-700/30 
                          shadow-sm hover:shadow-md transition-all duration-300">

                <div class="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                  <button @click="showDatabase = true"
                    class="px-4 py-2 rounded-full text-sm font-medium 
                           transition-all duration-300 transform hover:scale-105"
                    :class="showDatabase
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-pink-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-600 hover:border-purple-300 dark:hover:border-purple-500'">
                    Database
                  </button>
                  <button @click="showDatabase = false"
                    class="px-4 py-2 rounded-full text-sm font-medium 
                           transition-all duration-300 transform hover:scale-105"
                    :class="!showDatabase
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-pink-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-600 hover:border-purple-300 dark:hover:border-purple-500'">
                    Server/Other
                  </button>
                </div>

                <h4 class="text-lg font-semibold 
                           text-gray-800 dark:text-gray-200 
                           mb-4 flex items-center">
                  <span class="w-3 h-3 
                               bg-purple-500 dark:bg-purple-400 
                               rounded-full mr-3"></span>
                  {{ showDatabase ? 'Database' : 'Server & Other Tools' }}
                </h4>

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div v-for="item in showDatabase ? database : serverother" :key="item.name"
                    class="flex flex-col items-center group cursor-pointer">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg 
                                bg-white dark:bg-gray-700 
                                shadow-md p-2 mb-2 
                                group-hover:shadow-lg group-hover:scale-110 
                                transition-all duration-300">
                      <img :src="item.img" :alt="item.name" class="w-full h-full object-contain">
                    </div>
                    <p class="text-xs sm:text-sm font-medium 
                              text-gray-700 dark:text-gray-300 
                              group-hover:text-purple-600 dark:group-hover:text-purple-400 
                              transition-colors duration-300">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
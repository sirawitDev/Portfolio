<script setup>
import { ref } from 'vue'

const projects = ref([
    {
        title: "Clinic Management",
        description: "ระบบจัดการข้อมูลคลินิกและเวชระเบียน",
        images: [
            { img: '/img/project/clinic/homepage.png', name: 'homepage' },
            { img: '/img/project/clinic/admindashboard.png', name: 'admindashboard' },
            { img: '/img/project/clinic/adminhis.png', name: 'adminhis' },
            { img: '/img/project/clinic/userjong.png', name: 'userjong' },
        ],
        currentIndex: 0,
        link: "https://nuxtjs-clinic.vercel.app/",
        category: "Healthcare"
    },
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
        link: 'https://pos101.vercel.app/',
        category: "E-commerce"
    },
    {
        title: "TableDev",
        description: "ระบบจัดการโครงการและติดตามงาน",
        images: [
            { img: '/img/project/tabledev/projecttask.png', name: 'projecttask' },
            { img: '/img/project/tabledev/memberadmin.png', name: 'memberadmin' },
        ],
        currentIndex: 0,
        link: "https://washworlds.online/",
        category: "Management"
    },
    {
        title: "Sales Management Platform With Dealer and Afiliate Markting System",
        description: "ระบบบริหารการขายด้วยตัวแทนจำหน่ายและการตลาดแบบพันธมิตร",
        images: [
            { img: '/img/project/pmh/pmhhome.png', name: 'pmhhome' },
            { img: '/img/project/pmh/pmhemarket.png', name: 'pmhemarket' },
            { img: '/img/project/pmh/checkout.png', name: 'checkout' },
            { img: '/img/project/pmh/walletpmh.png', name: 'walletpmh' },
        ],
        currentIndex: 0,
        link: "",
        private: true,
        category: "Business"
    },
    {
        title: "Other Project",
        description: "โปรเจคอื่นๆ ที่ไม่ได้เผยแพร่",
        images: [
            { img: '/img/project/other/homepagema.png', name: 'homepagema' },
            { img: '/img/project/other/admindashboard.png', name: 'admindashboard' },
            { img: '/img/project/other/employeedashboard.png', name: 'employeedashboard' },
            { img: '/img/project/other/employeeleave.png', name: 'employeeleave' },
            { img: '/img/project/other/leaveemadmin.png', name: 'leaveemadmin' },
            { img: '/img/project/other/quotationadmin.png', name: 'quotationadmin' },
            { img: '/img/project/other/requisitionadmin.png', name: 'requisitionadmin' },
        ],
        currentIndex: 0,
        link: "",
        private: true,
        category: "Enterprise"
    },
])

const nextImage = (project) => {
    project.currentIndex = (project.currentIndex + 1) % project.images.length
}

const prevImage = (project) => {
    project.currentIndex = (project.currentIndex - 1 + project.images.length) % project.images.length
}

const lightboxOpen = ref(false)
const lightboxProject = ref(null)
const lightboxIndex = ref(0)

const openLightbox = (project, idx) => {
    lightboxProject.value = project
    lightboxIndex.value = idx
    lightboxOpen.value = true
}

const closeLightbox = () => {
    lightboxOpen.value = false
}

const nextLightboxImage = () => {
    if (!lightboxProject.value) return
    lightboxIndex.value = (lightboxIndex.value + 1) % lightboxProject.value.images.length
}

const prevLightboxImage = () => {
    if (!lightboxProject.value) return
    lightboxIndex.value = (lightboxIndex.value - 1 + lightboxProject.value.images.length) % lightboxProject.value.images.length
}

const getCategoryColor = (category) => {
    const colors = {
        Healthcare: 'from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-cyan-500',
        'E-commerce': 'from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-cyan-500',
        Management: 'from-purple-500 to-violet-600 dark:from-purple-400 dark:to-pink-500',
        Business: 'from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500',
        Enterprise: 'from-gray-500 to-slate-600 dark:from-gray-400 dark:to-slate-500'
    }
    return colors[category] || 'from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-cyan-500'
}
</script>

<template>
    <div class="min-h-screen 

                py-8 px-4">
        
        <!-- Header Section -->
        <div class="max-w-6xl mx-auto text-center mb-12 mt-28">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 
                       bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600  
                       dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 
                       bg-clip-text text-transparent">
                My Projects
            </h2>
            <div class="mt-6 w-24 h-1 
                        bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 
                        dark:from-cyan-400 dark:to-purple-400 
                        mx-auto rounded-full">
            </div>
            <!-- <p class="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                สำรวจโปรเจคต่างๆ ที่ฉันได้พัฒนาขึ้น ตั้งแต่ระบบจัดการ ไปจนถึงแพลตฟอร์มการขาย
            </p>-->
        </div>

        <!-- Projects Grid -->
        <div class="max-w-7xl mx-auto px-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div v-for="(project, index) in projects" :key="index"
                    class="group bg-white/90 dark:bg-gray-800/90 
                           backdrop-blur-lg rounded-2xl shadow-xl 
                           border border-white/30 dark:border-gray-700/50 
                           p-6 flex flex-col 
                           hover:shadow-2xl hover:scale-[1.02] 
                           transition-all duration-300">



                    <!-- Image Carousel -->
                    <div class="relative w-full h-64 mb-4 rounded-xl overflow-hidden 
                                bg-gradient-to-br from-gray-100 to-gray-200 
                                dark:from-gray-700 dark:to-gray-800">
                        <img :src="project.images[project.currentIndex]?.img"
                             :alt="project.images[project.currentIndex]?.name"
                             class="w-full h-full object-cover 
                                    hover:scale-105 transition-transform duration-500"
                             />
                        
                        <!-- Navigation Buttons -->
                        <button v-if="project.images.length > 1" 
                                @click="prevImage(project)"
                                class="absolute left-2 top-1/2 transform -translate-y-1/2 
                                       bg-black/60 dark:bg-gray-900/80 
                                       text-white p-2 rounded-full 
                                       opacity-0 group-hover:opacity-100 
                                       hover:bg-black/80 dark:hover:bg-gray-800/90 
                                       transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button v-if="project.images.length > 1" 
                                @click="nextImage(project)"
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 
                                       bg-black/60 dark:bg-gray-900/80 
                                       text-white p-2 rounded-full 
                                       opacity-0 group-hover:opacity-100 
                                       hover:bg-black/80 dark:hover:bg-gray-800/90 
                                       transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <!-- Image Dots -->
                        <div v-if="project.images.length > 1"
                             class="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                            <button v-for="(img, imgIndex) in project.images" 
                                    :key="imgIndex" 
                                    @click="project.currentIndex = imgIndex"
                                    class="w-2 h-2 rounded-full transition-all duration-300"
                                    :class="imgIndex === project.currentIndex 
                                        ? 'bg-white scale-125 shadow-lg' 
                                        : 'bg-white/50 hover:bg-white/75'">
                            </button>
                        </div>

                        <!-- Expand Icon -->
                        <div @click="openLightbox(project, project.currentIndex)" class="absolute top-3 right-3 
                                    bg-black/60 dark:bg-gray-900/80 
                                    text-white p-2 rounded-full 
                                    opacity-0 cursor-pointer group-hover:opacity-100 
                                    transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </div>
                    </div>

                    <!-- Project Info -->
                    <div class="flex-grow">
                        <h3 class="text-xl font-bold mb-3 
                                   text-gray-800 dark:text-gray-100 
                                   transition-all duration-300 hover:text-blue-500 dark:hover:text-green-500"
                            >
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 
                                  leading-relaxed mb-6">
                            {{ project.description }}
                        </p>
                    </div>

                    <!-- Action Button -->
                    <div class="mt-auto">
                        <a v-if="!project.private" 
                           :href="project.link" 
                           target="_blank"
                           class="w-full inline-flex items-center justify-center 
                                  px-6 py-3 rounded-xl font-semibold 
                                  text-white shadow-lg 
                                  bg-gradient-to-r 
                                  hover:shadow-xl hover:scale-105 
                                  transition-all duration-300"
                           :class="getCategoryColor(project.category)">
                            <span>ดูโปรเจค</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        
                        <button v-else
                                class="w-full px-6 py-3 rounded-xl font-semibold 
                                       bg-gradient-to-r from-gray-400 to-gray-500 
                                       dark:from-gray-600 dark:to-gray-700 
                                       text-white cursor-not-allowed 
                                       opacity-75 select-none">
                            <span>โปรเจคส่วนตัว 🔒</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Enhanced Lightbox -->
        <div v-if="lightboxOpen" 
             class="fixed inset-0 z-50 flex items-center justify-center 
                    bg-black/90 dark:bg-black/95 
                    backdrop-blur-sm"
             @click.self="closeLightbox">
            
            <!-- Close Button -->
            <button @click="closeLightbox"
                    class="absolute top-6 right-6 z-20 
                           text-white/80 hover:text-white 
                           text-3xl font-bold 
                           bg-black/50 hover:bg-black/70 
                           w-12 h-12 rounded-full 
                           flex items-center justify-center 
                           transition-all duration-300">
                &times;
            </button>

            <div class="relative max-w-5xl w-full mx-4 flex flex-col items-center">
                <!-- Navigation Buttons -->
                <button v-if="lightboxProject && lightboxProject.images.length > 1" 
                        @click="prevLightboxImage"
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
                               bg-black/60 hover:bg-black/80 
                               text-white p-3 rounded-full 
                               transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <!-- Main Image -->
                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img v-if="lightboxProject" 
                         :src="lightboxProject.images[lightboxIndex]?.img"
                         :alt="lightboxProject.images[lightboxIndex]?.name" 
                         class="max-h-[80vh] w-auto object-contain" />
                </div>
                
                <button v-if="lightboxProject && lightboxProject.images.length > 1" 
                        @click="nextLightboxImage"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
                               bg-black/60 hover:bg-black/80 
                               text-white p-3 rounded-full 
                               transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Image Indicators -->
                <div v-if="lightboxProject && lightboxProject.images.length > 1"
                     class="flex justify-center mt-6 space-x-3">
                    <button v-for="(img, idx) in lightboxProject.images" 
                            :key="idx"
                            class="w-3 h-3 rounded-full transition-all duration-300 
                                   border-2"
                            :class="idx === lightboxIndex 
                                ? 'bg-white border-white scale-125' 
                                : 'bg-transparent border-white/50 hover:border-white/80'"
                            @click="lightboxIndex = idx">
                    </button>
                </div>

                <!-- Project Info -->
                <div class="text-center mt-4 max-w-lg">
                    <h3 v-if="lightboxProject" 
                        class="text-white text-xl font-bold mb-2">
                        {{ lightboxProject.title }}
                    </h3>
                    <p v-if="lightboxProject" 
                       class="text-white/80 text-sm">
                        {{ lightboxProject.description }}
                    </p>
                    <div v-if="lightboxProject && lightboxProject.images.length > 1" 
                         class="text-white/60 text-xs mt-2">
                        {{ lightboxIndex + 1 }} / {{ lightboxProject.images.length }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
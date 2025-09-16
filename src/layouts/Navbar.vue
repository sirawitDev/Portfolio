<script setup>
import { ref, onMounted } from 'vue'
import { Menu, X, Home, FolderOpen, Briefcase, Award, Mail, Sun, Moon } from 'lucide-vue-next'
import BackgroundView from '../components/BackgroundView.vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}

// โหลด theme จาก localStorage
onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    }
})

const menuItems = [
    { name: 'HOME', icon: Home, href: '#home' },
    { name: 'PROFILE & SKILL', icon: Briefcase, href: '#experience' },
    { name: 'PROJECT', icon: FolderOpen, href: '#project' },
    { name: 'CONTACT', icon: Mail, href: '#contact' }
]
</script>

<template>
    <nav class="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-center space-x-8"> <!-- เปลี่ยน items-baseline เป็น items-center -->
                        <a v-for="item in menuItems" :key="item.name" :href="item.href"
                            class="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                            <component :is="item.icon" class="w-4 h-4" />
                            <span>{{ item.name }}</span>
                        </a>

                        <!-- Theme Toggle Button -->
                        <button @click="toggleTheme"
                            class="self-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                            <Sun v-if="isDark" class="w-5 h-5" />
                            <Moon v-else class="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center space-x-2">
                    <!-- Mobile Theme Toggle -->
                    <button @click="toggleTheme"
                        class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                        <Sun v-if="isDark" class="w-5 h-5" />
                        <Moon v-else class="w-5 h-5" />
                    </button>

                    <!-- Menu Button -->
                    <button @click="toggleMenu"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200">
                        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
                        <X v-else class="w-6 h-6" />
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
                    <a v-for="item in menuItems" :key="item.name" :href="item.href" @click="toggleMenu"
                        class="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                        <component :is="item.icon" class="w-5 h-5" />
                        <span>{{ item.name }}</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <BackgroundView />

    <div class="pt-16  min-h-screen transition-colors duration-300">
        <slot></slot>
    </div>
</template>
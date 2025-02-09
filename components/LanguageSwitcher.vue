<template>
  <div class="relative">
    <button 
      @click="toggleDropdown"
      class="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-300"
    >
      <span class="text-sm">{{ languageNames[currentLang] }}</span>
      <svg 
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    
    <div 
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-300 rounded-md shadow-lg"
    >
      <a
        v-for="lang in availableLanguages"
        :key="lang"
        href="#"
        @click.prevent="switchLanguage(lang)"
        class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-300"
        :class="{ 'font-bold': currentLang === lang }"
      >
        {{ languageNames[lang] }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguageStore } from '~/stores/language'

const languageStore = useLanguageStore()
const isOpen = ref(false)
const currentLang = computed(() => languageStore.currentLang)

const availableLanguages = ['th', 'en', 'ja', 'zh', 'ko']

const languageNames = {
  th: 'ไทย',
  en: 'English',
  ja: '日本語',
  zh: '中文',
  ko: '한국어'
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = (lang) => {
  languageStore.setLanguage(lang)
  isOpen.value = false
}
</script>

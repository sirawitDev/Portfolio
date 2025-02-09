<template>
  <layoutsView>
    <div class="fade-in">
      <Profile />
    </div>

    <div class="slide-up mt-12 sm:mt-24">
      <div class="divider animate-pulse"></div>
      <techSkill />
      <div class="divider animate-pulse"></div>
    </div>

    <div class="scroll-down-icon absolute bottom-8 left-[50%] cursor-pointer hidden sm:block" @click="scrollToEducation">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-chevron-down" :class="arrowClass">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>

    <div ref="educationSection">
      <Education />
    </div>

    <div @click="scrollToProject()" class="flex justify-center cursor-pointer mt-4 px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-chevron-down" :class="arrowClass">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>

    <!-- เพิ่ม Project ถัดจาก Education -->
    <div ref="projectSection" class="mt-12 sm:mt-24">
      <Project />
    </div>
  </layoutsView>
</template>

<script setup>
import { ref, computed } from 'vue';
import layoutsView from '~/layouts/layoutsView.vue';
import techSkill from '~/components/techSkill.vue';
import Profile from '~/components/Profile.vue';
import Education from '~/components/Education.vue';
import Project from '~/components/Project.vue';
import { useThemeStore } from '#imports';

const themeStore = useThemeStore();

const showEducation = ref(false);

const educationSection = ref(null);
const projectSection = ref(null);

const scrollToEducation = () => {
  if (educationSection.value) {
    educationSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const scrollToProject = () => {
  if (projectSection.value) {
    projectSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const arrowClass = computed(() => themeStore.isDarkMode ? 'text-green-500' : 'text-gray-500');
</script>

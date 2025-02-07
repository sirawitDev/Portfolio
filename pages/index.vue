<template>
  <layoutsView>
    <div class="fade-in" >
      <Profile />
    </div>

    <div class="slide-up mt-24">
      <div class="divider animate-pulse"></div>
      <techSkill />
      <div class="divider animate-pulse"></div>
    </div>

    <div class="scroll-down-icon absolute bottom-8 left-[50%] cursor-pointer" @click="scrollToEducation">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-chevron-down" :class="arrowClass">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>

    <div ref="educationSection">
      <Education />
    </div>
  </layoutsView>
</template>

<script setup>
import layoutsView from '~/layouts/layoutsView.vue';
import techSkill from '~/components/techSkill.vue';
import Profile from '~/components/Profile.vue';
import Education from '~/components/Education.vue';
import { useThemeStore } from '#imports';

const themeStore = useThemeStore();

const educationSection = ref(null);

const scrollToEducation = () => {
  if (educationSection.value) {
    educationSection.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const arrowClass = computed(() => themeStore.isDarkMode ? 'text-green-500' : 'text-gray-500');
</script>

<style scoped>
.scroll-down-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

.fade-in {
  animation: fade-in 1s ease-out;
}

.slide-up {
  animation: slide-up 1s ease-out;
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
</style>

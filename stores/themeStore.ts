import { defineStore } from 'pinia';
import { ref, computed, onMounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const themes = ['dark', 'cupcake'];
  const selectedTheme = ref('cupcake');

  const isDarkMode = computed(() => selectedTheme.value === 'dark');

  const setTheme = (theme) => {
    if (themes.includes(theme)) {
      selectedTheme.value = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('selectedTheme', theme);
    }
  };

  const toggleTheme = () => {
    setTheme(selectedTheme.value === 'dark' ? 'cupcake' : 'dark');
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    setTheme(savedTheme && themes.includes(savedTheme) ? savedTheme : 'cupcake');
  });

  return { selectedTheme, isDarkMode, setTheme, toggleTheme };
});

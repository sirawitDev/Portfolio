<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a @click="scrollToAbout">Home</a></li>
          <li><a @click.prevent="scrollToAbout">About</a></li>
          <li><a>Project</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">Portfolio</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="flex gap-3">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <a class="cursor-pointer" @click.prevent="scrollToAbout">About</a>
        </li>
        <li><a>Project</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <Theme />
    </div>
  </div>

  <div>
  <BackgroundViewVue/>
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Theme from '~/components/Theme.vue'
import TypeIt from 'typeit'
import BackgroundViewVue from '~/components/BackgroundView.vue.vue'

const typingElement = ref(null)

onMounted(() => {
  nextTick(() => {
    new TypeIt(typingElement.value, {
      strings: ["Portfolio"],
      speed: 100,
      loop: true,
      waitUntilVisible: true,
      loopDelay: 3000,
    }).go()
  })
})

function scrollToAbout() {
  const aboutSection = document.getElementById('about-section');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>

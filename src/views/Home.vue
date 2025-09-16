<script setup>
import Navbar from '../layouts/Navbar.vue';
import Home from '../components/HomeSection.vue';
import ProfileAndExperience from '../components/ProfileAndExperience.vue';
import Project from '../components/Project.vue';
import Contact from '../components/Contact.vue';
</script>

<template>
  <Navbar>
    <main class="">
      <!-- Home Section - สีพื้นหลังอ่อนนุ่ม -->
      <section id="home"
        class="min-h-screen flex dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
        <div class="w-full flex items-center">
          <Home />
        </div>
      </section>

      <!-- Experience Section - พื้นหลังสีเทาอ่อน -->
      <section id="experience" class="bg-gray-50/80 dark:bg-slate-800/90 backdrop-blur-sm">
        <ProfileAndExperience />
      </section>

      <!-- Project Section - พื้นหลังไล่เฉดสีม่วงอ่อน -->
      <section id="project"
        class="min-h-screen flex justify-center dark:from-slate-900 dark:via-purple-950 dark:to-indigo-950">
        <Project />
      </section>

      <!-- Contact Section - เปลี่ยนเป็นสีเข้มสำหรับ light mode เพื่อให้ฟอนต์สีขาวโดดเด่น -->
      <section id="contact"
        class="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-800 via-gray-900 to-indigo-900 dark:from-slate-800 dark:via-gray-900 dark:to-indigo-900 overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <!-- Light mode decorations - ปรับสีให้เข้มขึ้น -->
          <div
            class="absolute -top-10 -left-10 w-32 h-32 bg-slate-400/20 dark:bg-indigo-400/20 rounded-full blur-xl animate-pulse">
          </div>
          <div
            class="absolute top-1/4 right-10 w-24 h-24 bg-indigo-400/25 dark:bg-cyan-400/20 rounded-full blur-lg animate-bounce">
          </div>
          <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-gray-600/20 dark:bg-purple-400/15 rounded-full blur-2xl">
          </div>
          <div
            class="absolute bottom-10 right-1/3 w-20 h-20 bg-slate-500/25 dark:bg-blue-400/20 rounded-full blur-md animate-pulse">
          </div>
          <div class="absolute top-1/2 left-10 w-28 h-28 bg-indigo-500/20 dark:bg-indigo-400/15 rounded-full blur-lg">
          </div>
          <div
            class="absolute top-20 right-1/4 w-36 h-36 bg-slate-600/20 dark:bg-purple-300/10 rounded-full blur-xl animate-pulse">
          </div>

          <!-- Additional subtle decorations -->
          <div
            class="absolute top-1/3 left-1/2 w-16 h-16 bg-gray-500/25 dark:bg-cyan-500/20 rounded-full blur-md animate-bounce delay-75">
          </div>
          <div
            class="absolute bottom-1/3 right-1/2 w-12 h-12 bg-slate-400/30 dark:bg-emerald-400/25 rounded-full blur-sm animate-pulse delay-150">
          </div>
        </div>

        <!-- Contact component with backdrop -->
        <div class="relative z-10">
          <Contact />
        </div>
      </section>
    </main>
  </Navbar>
</template>
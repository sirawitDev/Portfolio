<template>
  <div class="floating-icons bg-white dark:bg-gray-900">
    <div
      v-for="(icon, index) in icons"
      :key="index"
      class="icon"
      :style="randomPosition(index)"
    >
      <img :src="icon.img" :alt="icon.name" />
    </div>
  </div>
</template>

<script setup>
const icons = [
  { img: "/iconsdev/html5.png", name: "HTML5" },
  { img: "/iconsdev/css.png", name: "CSS" },
  { img: "/iconsdev/js.png", name: "Javascript" },
  { img: "/iconsdev/mysql.png", name: "MySQL" },
  { img: "/iconsdev/vuejs.svg", name: "VueJS" },
  { img: "/iconsdev/nuxtjs.svg", name: "NuxtJS" },
  { img: "/iconsdev/react.svg", name: "ReactJS" },
  { img: "/iconsdev/nextjs.png", name: "NextJS" },
  { img: "/iconsdev/tailwindcss.png", name: "TailwindCSS" },
  { img: "/iconsdev/nodejs.png", name: "NodeJS" },
  { img: "/iconsdev/expressjs.svg", name: "ExpressJS" },
  { img: "/iconsdev/postgresql.svg", name: "Postgres" },
  { img: "/iconsdev/mongodb.svg", name: "MongoDB" },
  { img: "/iconsdev/firebase.svg", name: "Firebase" },
  { img: "/iconsdev/prisma.svg", name: "Prisma" }
];

const randomPosition = (index) => {
  return {
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    animationDuration: `${15 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 5}s`,
  };
};
</script>

<style scoped>
.floating-icons {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.icon {
  position: absolute;
  width: 80px;
  height: 80px;
  opacity: 0.2;
  animation: floatUp infinite linear;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes floatUp {
  from {
    transform: translateY(100vh) scale(0.5);
    opacity: 0.1;
  }
  to {
    transform: translateY(-10vh) scale(1);
    opacity: 0.3;
  }
}
</style>
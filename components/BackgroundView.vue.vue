<template>
  <div class="floating-icons">
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
  { img: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png", name: "HTML5" },
  { img: "https://img.icons8.com/fluent/512/css3.png", name: "CSS" },
  { img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", name: "Javascript" },
  { img: "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png", name: "MySQL" },
  { img: "https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png", name: "VueJS" },
  { img: "https://static-00.iconduck.com/assets.00/nuxt-icon-icon-2048x1520-wbh7ctgr.png", name: "NuxtJS" },
  { img: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256", name: "ReactJS" },
  { img: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png", name: "NextJS" },
  { img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png", name: "TailwindCSS" },
  { img: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png", name: "NodeJS" },
  { img: "https://img.icons8.com/color/512/express-js.png", name: "ExpressJS" },
  { img: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png", name: "Postgres" },
  { img: "https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-wn3ad6uo.png", name: "MongoDB" },
  { img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png", name: "Firebase" },
  { img: "https://static-00.iconduck.com/assets.00/prisma-icon-424x512-q3326vpv.png", name: "Prisma" }
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
  width: 60px;
  height: 60px;
  opacity: 0.2;
  animation: floatUp infinite linear;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Animation */
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

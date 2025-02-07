<script setup lang="ts">
import { NuxtPage } from '#components';
// useHead({
//   htmlAttrs: { 'data-theme': 'cupcake' }
// });
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
* {
  font-family: 'Prompt', sans-serif;
}

.text-stroke {
    text-shadow: -5px -1px 0 #ff9c56, 1px -1px 0 #ff9c56, -5px 1px 0 #ff9c56, 1px 1px 0 #ff9c56;
}
</style>
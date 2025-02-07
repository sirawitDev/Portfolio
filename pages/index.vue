<template>
  <layoutsView>
    <div class="">
      <Profile />
    </div>

    <div class=" mt-32">
      <div class="divider"></div>
      <techSkill />
      <div class="divider"></div>
    </div>

    <div id="about-section" class="mt-16">
      <div class="flex justify-center">
        <p class="text-5xl font-semibold">Profile</p>
      </div>

      <div class="flex justify-center mb-10 mt-10">

        <div class="flex-1">
          <div class="flex justify-center">
            <p class="text-2xl font-semibold">Education</p>
          </div>
          <Education class="mt-5" />
        </div>
        <div class="flex-1">
          <div class="flex justify-center">
            <p class="text-2xl font-semibold">ประวัติส่วนตัว</p>
          </div>
        </div>

      </div>
    </div>
  </layoutsView>
</template>

<script setup>
import layoutsView from '~/layouts/layoutsView.vue';
import techSkill from '~/components/techSkill.vue';
import Profile from '~/components/Profile.vue';
import Education from '~/components/Education.vue';
import BackgroundViewVue from '~/components/BackgroundView.vue.vue';

</script>
<template>
  <div class="bg-blue-back">
    <navbar></navbar>
    <br />
    <div class="mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'ContentLayout',
}
</script>

<style>
@import '../assets/css/content.css';
@import '../assets/css/spacing.css';
@import '../assets/css/colors.css';
@import '../assets/css/background.css';
@import '../assets/css/typography.css';
@import '../assets/css/aligment.css';
</style>

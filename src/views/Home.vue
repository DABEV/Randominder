<template>
  <div class="home">
    <HomePreview/>
    <Topics/>
  </div>
</template>

<script>
import HomePreview from '../components/landing/HomePreview.vue'
import Topics from '../components/landing/Topics.vue'

export default {
  name: 'Home',
  components: {
    HomePreview,
    Topics
  }
}
</script>

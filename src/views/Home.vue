<template>
  <div class="home">
    <HomePreview />
    <Topics />
    <Prizes />
    <Pricing />
    <Contact />
  </div>
</template>

<script>
import Contact from "../components/landing/Contact.vue";
import HomePreview from "../components/landing/HomePreview.vue";
import Pricing from "../components/landing/Pricing.vue";
import Prizes from "../components/landing/Prizes.vue";
import Topics from "../components/landing/Topics.vue";

export default {
  name: "Home",
  components: {
    HomePreview,
    Topics,
    Pricing,
    Prizes,
    Contact,
  },
};
</script>

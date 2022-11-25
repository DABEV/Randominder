<template>
  <div class="full-section mt-3 text-center">
    <div class="bg-light-pink c-white">
      <br />
      <div class="center">
        <h2 class="back-outlined width-30 mt-2">Special prizes</h2>
      </div>
      <div class="mt-1 mb-2">Collect unique medals and badges</div>
      <br />
    </div>
    <MedalList />
    <br />
    <div>
      The badges and medals will be visible on your profile and you will be able
      to access them with your own account
    </div>
  </div>
</template>

<script>
import MedalList from "./MedalList.vue";

export default {
  name: "Prizes",
  data: () => ({
    prices: [
      {
        icon: "1",
        title: "Beginner",
      },
      {
        icon: "2",
        title: "Music lover",
      },
      {
        icon: "3",
        title: "Super Chef",
      },
      {
        icon: "4",
        title: "Diamond heart",
      },
    ],
  }),
  components: {
    MedalList,
  },
};
</script>
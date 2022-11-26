<template>
  <div class="mt-4">
    <br />
    <br />
    <div class="bg-light-blue c-white">
      <br />
      <vs-row justify="center" class="mt-2 mb-2">
        <vs-col w="3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2Flogo-randominder.svg?alt=media&token=64d3e5b5-7e04-47b9-861c-8ac79335e855"
          />
        </vs-col>
        <vs-col w="7">
          <h2 class="back-outlined width-50 mt-2 text-center">Randominder</h2>
          <div class="mt-2">
            Lorem ipsum dolor sit amet consectetur. Auctor sapien elit nunc
            tortor placerat et. Odio et bibendum varius rhoncus cras elementum
            eget. Convallis tellus amet euismod platea euismod viverra faucibus
            gravida. In vitae nullam imperdiet dictum etiam scelerisque sed eu.
          </div>
          <div class="mt-2 text-w-bold">randominder@gmail.com</div>
        </vs-col>
      </vs-row>
      <br />
    </div>
  </div>
</template>

<script>
import MedalList from "./MedalList.vue";

export default {
  name: "Contact",
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
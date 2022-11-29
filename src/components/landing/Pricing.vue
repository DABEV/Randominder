<template>
  <div class="full-content">
    <div class="center mt-4 text-center">
      <h2 class="back-outlined c-dark-yellow width-30 mt-4">Pricing</h2>
      <vs-row align="center" justify="center">
        <vs-col
          v-for="(item, i) in sections"
          :data="item"
          :key="i"
          w="3"
          class="text-center pa-4 c-white"
        >
          <div :class="item.color" style="height: 450px">
            <div>
              <div class="center">
                <h4 class="back-outlined width-60 mb-2">
                  {{ item.title }}
                </h4>
              </div>
              <div class="pa-2">{{ item.body }}</div>
              <h1 class="mt-2">{{ item.price }}</h1>
            </div>
          </div>
          <div class="center button-card-fload">
            <vs-button floating :color="item.color_button" size="large" class="width-50">
              I want it
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data: () => ({
    sections: [
      {
        price: "$0.00",
        title: "Personal",
        body: "Free to use with a restriction of 5 daily requests per topic",
        color: "bg-light-blue rounded center",
        color_button: "#FF99B4",
      },
      {
        price: "$1.00",
        title: "Professional",
        body: "Unlimited service with special prizes,  exclusive medals",
        color: "bg-dark-pink rounded center",
        color_button: "#FEBF1A",
      },
      {
        price: "$1.50",
        title: "Dedicate",
        body: "Professional benefits + sharing options",
        color: "bg-dark-yellow rounded center",
        color_button: "#88D6E3",
      },
    ],
  }),
};
</script>
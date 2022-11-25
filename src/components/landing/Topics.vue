<template>
  <div class="full-section">
    <div class="center mt-4 text-center">
      <h2 class="back-outlined c-light-purple width-30 mt-4">Topics</h2>
      <vs-row class="mb-3" align="center" justify="center">
        <vs-col lg="3" v-for="(item, i) in sections" :data="item" :key="i">
          <div class="center mt-4">
            <vs-avatar size="95" square color="#ffffff">
              <img src="../../assets/images/music.svg" v-if="item.icon == 1"/>
              <img src="../../assets/images/activity.svg" v-if="item.icon == 2"/>
              <img src="../../assets/images/recipe.svg" v-if="item.icon == 3"/>
            </vs-avatar>
          </div>
          <div class="text-w-bold mt-1">{{ item.title }}</div>
          <div class="mt-1">{{ item.body }}</div>
          <div class="center mt-1">
            <vs-button :color="item.color"> Go to {{ item.title }} </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topics",
  data: () => ({
    sections: [
      {
        icon: "1",
        title: "Music",
        body: "Get songs by genre or randomly",
        color: "#FF99B4",
      },
      {
        icon: "2",
        title: "Activities",
        body: "Get random suggestions",
        color: "#FEBF1A",
      },
      {
        icon: "3",
        title: "Recipes",
        body: "Find different cooking recipes",
        color: "#88D6E3",
      },
    ],
  }),
};
</script>
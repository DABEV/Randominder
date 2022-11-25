<template>
  <div class="mt-3">
    <div v-for="(item, i) in sections" :data="item" :key="i">
      <vs-row class="fit-height text-start mb-3" align="flex-start" justify="center">
        <vs-col lg="1">
          <vs-avatar color="#88D6E3" size="20" circle></vs-avatar>
        </vs-col>
        <vs-col lg="11" class="pl-1">
          <div class="c-light-blue text-w-bold">{{item.title}}</div>
          <div class="">{{item.body}}</div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentList",
  data: () => ({
    sections: [
      {
        title: "Select a topic",
        body: "You can find recipes, activities, songs and more.",
      },
      {
        title: "Filter your searches",
        body: "Filter between difficulty, duration, number of people.",
      },
      {
        title: "Random",
        body: "Always find something new",
      },
    ],
  }),
};
</script>
<template>
  <div class="full-content bg-blue-back">
    <vs-row justify="space-between">
      <vs-col w="7" class="pa-2 bg-white ma-2 rounded shadow">
        <FilterActivity @reloadFavs="reloadFavs" ref="filterActivity" />
      </vs-col>
      <vs-col w="4" class="pa-2 bg-white ma-2 rounded shadow mb-3">
        <Favs ref="favs" @reloadSearch="reloadSearch" />
      </vs-col>
    </vs-row>
    <TypeList />
  </div>
</template>

<script>
import Favs from '../components/activity/Favs.vue'
import FilterActivity from '../components/activity/FilterActivity.vue'
import TypeList from '../components/activity/TypeList.vue'

export default {
  components: { FilterActivity, Favs, TypeList },
  name: 'Activity',
  methods: {
    reloadFavs() {
      this.$refs.favs.getFavs()
    },
    reloadSearch() {
      this.$refs.filterActivity.getWithFilter()
    },
  },
}
</script>

<style></style>

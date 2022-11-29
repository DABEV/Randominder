<template>
  <div>
    <vs-row justify="space-between">
      <vs-col w="7" class="pa-2 bg-white ma-2 rounded shadow">
        <h3 class="back-outlined width-40 c-light-purple text-center">
          Activities
        </h3>
        <div class="mt-1">
          You can filter activities or get one randomly
        </div>
        <FilterActivity />
      </vs-col>
      <vs-col w="4" class="pa-2 bg-white ma-2 rounded shadow">
        <Favs />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import TypeList from './TypeList.vue'
import Favs from './Favs.vue'
import FilterActivity from './FilterActivity.vue'

export default {
  components: { TypeList, FilterActivity, Favs },
  name: 'SelectActivity',
  data: () => ({}),
  methods: {},
}
</script>

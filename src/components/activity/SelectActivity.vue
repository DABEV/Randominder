<template>
  <div>
    <vs-row justify="space-between">
      <vs-col w="7" class="pa-2 bg-white ma-2 rounded shadow">
        <vs-row justify="center" aling="center">
          <vs-col w="6">
            <h3 class="back-outlined width-80 c-dark-pink text-center">
              Activities
            </h3>
          </vs-col>
          <vs-col w="3">
            <vs-button
              animation-type="rotate"
              color="#88D6E3"
              size="large"
              floating
            >
              <i class="bx bx-dice-5"></i>
              Randomly
              <template #animate>
                <i class="bx bxs-dice-5"></i>
                Randomly
              </template>
            </vs-button>
          </vs-col>
        </vs-row>
        <FilterActivity />
        <TypeList />
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
}
</script>

<template>
  <div class="full-content bg-blue-back">
    <vs-row justify="space-between">
      <vs-col w="7" class="pa-2 bg-white ma-2 rounded shadow">
        <FilterTrivia @updateCounter="updateCounter" />
      </vs-col>
      <vs-col w="4" class="pa-2 bg-white ma-2 rounded shadow mb-3">
        <ResumeTrivia ref="resumen" />
      </vs-col>
    </vs-row>
    <TypeList />
  </div>
</template>

<script>
import TypeList from '../components/activity/TypeList.vue'
import ResumeTrivia from '../components/trivia/ResumeTrivia.vue'
import FilterTrivia from '../components/trivia/FilterTrivia.vue'

export default {
  components: { TypeList, FilterTrivia, ResumeTrivia },
  name: 'Trivia',
  methods: {
    updateCounter() {
      this.$refs.resumen.getCounter()
    },
  },
}
</script>

<style></style>

<template>
  <div>
    <div class="center">
      <h3 class="back-outlined width-80 c-dark-yellow text-center">
        Your Score
      </h3>
    </div>
    <vs-row justify="center">
      <vs-card style="width: 130px;" class="text-center mt-3">
        <template #title>
          <h3>Correct</h3>
        </template>
        <template #text>
          <div class="fs-4 c-dark-pink">
            {{ correct }}
          </div>
        </template>
      </vs-card>
      <vs-card style="width: 130px;" class="text-center mt-3 ml-2">
        <template #title>
          <h3>Incorrect</h3>
        </template>
        <template #text>
          <div class="fs-4 c-dark-yellow">
            {{ incorrect }}
          </div>
        </template>
      </vs-card>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'ResumeTrivia',
  data: () => ({
    correct: 0,
    incorrect: 0,
  }),
  methods: {
    getCounter() {
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
      let correct = localStorage.getItem('trivia-correct')
      let incorrect = localStorage.getItem('trivia-incorrect')
      console.log(incorrect)
      if (correct) {
        this.correct = correct
      }
      if (incorrect) {
        this.incorrect = incorrect
      }
    },
  },
  mounted() {
    this.getCounter()
  },
}
</script>

<style></style>

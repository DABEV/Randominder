<template>
  <vs-dialog
    scroll
    overflow-hidden
    prevent-close
    v-model="active"
    width="550px"
  >
    <template #header>
      <h3>
        New Trivia
      </h3>
    </template>
    <div class="px-2">
      <div class="text-center">{{ data.question }}</div>
      <div class="pa-2">
        <vs-row>
          <vs-col lg="6">
            <vs-row class="mb-1">
              <vs-avatar size="30" circle color="#FEBF1A">
                <i class="bx bx-purchase-tag-alt"></i>
              </vs-avatar>
              <div class="pl-1">{{ data.category }}</div>
            </vs-row>
          </vs-col>
          <vs-col lg="6">
            <vs-row class="mb-1">
              <vs-avatar size="30" circle color="#FF99B4">
                <i class="bx bx-tachometer"></i>
              </vs-avatar>
              <div class="pl-1">{{ data.difficulty }}</div>
            </vs-row>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            lg="6"
            class="px-1 mb-1 c-white"
            v-for="(item, i) in data.incorrectAnswers"
            :key="i"
            :data="item"
          >
            <div
              class="rounded bg-light-blue text-center item"
              @click="test(ytem)"
            >
              {{ item }}
            </div>
          </vs-col>
          <vs-col lg="6" class="px-1 mb-1 c-white">
            <div
              class="rounded bg-light-blue text-center item"
              @click="test(data.correctAnswer)"
            >
              {{ data.correctAnswer }}
            </div>
          </vs-col>
        </vs-row>
      </div>
      <vs-row justify="center">
        <vs-col lg="4">
          <vs-button block floating color="#FD9AB6" @click="reloadSearch">
            Search again
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </vs-dialog>
</template>

<script>
export default {
  name: 'DialogTrivia',
  data: () => ({
    active: false,
    step: 1,
  }),
  methods: {
    changeActive() {
      this.active = !this.active
    },
    reloadSearch() {
      this.active = false
      this.$emit('reloadSearch')
    },
    test(answer) {
      if (answer == this.data.correctAnswer) {
        this.active = false
        let correct = localStorage.getItem('trivia-correct')
        if (correct) {
          localStorage.setItem('trivia-correct', ++correct)
        } else {
          localStorage.setItem('trivia-correct', 1)
        }
        this.openNotification('success', 'Well done !', 'Correct answer')
      } else {
        let incorrect = localStorage.getItem('trivia-incorrect')
        if (incorrect) {
          localStorage.setItem('trivia-incorrect', ++incorrect)
        } else {
          localStorage.setItem('trivia-incorrect', 1)
        }
        this.openNotification('danger', 'Sorry!', 'Incorrect answer')
      }
      this.updateCounter()
    },
    updateCounter() {
        this.$emit('updateCounter')
    },
    openNotification(color, title, text) {
      this.$vs.notification({
        sticky: true,
        color: color,
        position: 'top-right',
        title: title,
        text: text,
      })
    },
  },
  props: {
    data: Object,
  },
}
</script>

<style></style>

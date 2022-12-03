<template>
  <div>
    <div class="center">
      <h3 class="back-outlined width-40 c-light-purple text-center">
        Trivia
      </h3>
      <vs-row justify="space-between" aling="center" class="mt-2">
        <vs-col lg="4">
          <div class="center">
            <vs-button
              animation-type="rotate"
              color="#88D6E3"
              floating
              @click="getRandomly"
            >
              <i class="bx bx-dice-5"></i>
              Randomly
              <template #animate>
                <i class="bx bxs-dice-5"></i>
                Randomly
              </template>
            </vs-button>
          </div>
        </vs-col>
        <vs-col lg="6">
          <div class="center">
            <vs-button
              animation-type="rotate"
              color="#FEBF1A"
              floating
              @click="getWithFilter"
            >
              <i class="bx bx-filter-alt"></i>
              Apply filter
              <template #animate>
                <i class="bx bxs-filter-alt"></i>
                Apply filter
              </template>
            </vs-button>
            <vs-button
              animation-type="rotate"
              circle
              icon
              danger
              floating
              @click="clean"
            >
              <i class="bx bx-trash"></i>
              <template #animate>
                <i class="bx bxs-trash"></i>
              </template>
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
      <vs-row justify="center" class="mt-3">
        <vs-col lg="1">
          <vs-avatar size="40" circle color="#FEBF1A">
            <i class="bx bx-purchase-tag-alt"></i>
          </vs-avatar>
        </vs-col>
        <vs-col lg="7">
          <vs-select
            label="Category"
            v-model="category"
            filter
            block
            placeholder="Category"
            color="#FEBF1A"
            class="pl-2"
          >
            <vs-option label="Arts & Literature" value="arts_and_literature">
              Arts & Literature
            </vs-option>
            <vs-option label="Film & TV" value="film_and_tv">
              Film & TV
            </vs-option>
            <vs-option label="Food & Drink" value="food_and_drink">
              Food & Drink
            </vs-option>
            <vs-option label="General Knowledge" value="general_knowledge">
              General Knowledge
            </vs-option>
            <vs-option label="Geography" value="geography">
              Geography
            </vs-option>
            <vs-option label="History" value="history">
              History
            </vs-option>
            <vs-option label="Music" value="music">
              Music
            </vs-option>
            <vs-option label="Science" value="science">
              Science
            </vs-option>
            <vs-option label="Society & Culture" value="society_and_culture">
              Society & Culture
            </vs-option>
            <vs-option label="Sport & Leisure" value="sport_and_leisure">
              Sport & Leisure
            </vs-option>
          </vs-select>
        </vs-col>
      </vs-row>
      <vs-row justify="center" class="mt-3 mb-6">
        <vs-col lg="1">
          <vs-avatar size="40" circle color="#FD9AB6">
            <i class="bx bx-tachometer"></i>
          </vs-avatar>
        </vs-col>
        <vs-col lg="7">
          <vs-select
            label="Difficulty"
            v-model="difficulty"
            filter
            block
            placeholder="Difficulty"
            color="#FD9AB6"
            class="pl-2"
          >
            <vs-option label="Easy" value="easy">
              Easy
            </vs-option>
            <vs-option label="Medium" value="medium">
              Medium
            </vs-option>
            <vs-option label="Hard" value="hard">
              Hard
            </vs-option>
          </vs-select>
        </vs-col>
      </vs-row>
      <br />
    </div>
    <DialogTrivia
      :data="trivia"
      ref="dialogTrivia"
      @reloadSearch="getWithFilter"
      @updateCounter="updateCounter"
    />
  </div>
</template>

<script>
import TriviaService from '../../service/TriviaService'
import DialogTrivia from './DialogTrivia.vue'

export default {
  components: { DialogTrivia },
  name: 'FilterTrivia',
  data: () => ({
    category: '',
    difficulty: '',
    trivia: [],
  }),
  methods: {
    clean() {
      this.category = ''
      this.difficulty = ''
    },
    getWithFilter() {
      TriviaService.getWithFilter(this.category,this.difficulty).then((response) => {
        if (response.data) {
          console.log()
          if (response.data.length > 0) {
            this.trivia = response.data[0]
            this.$refs.dialogTrivia.changeActive()
          } else {
            this.openNotification()
          }
        }
      })
    },
    getRandomly() {
      TriviaService.getRandomly().then((response) => {
        if (response.data) {
          console.log()
          if (response.data.length > 0) {
            this.trivia = response.data[0]
            this.$refs.dialogTrivia.changeActive()
          } else {
            this.openNotification()
          }
        }
      })
    },
    updateCounter() {
      this.$emit('updateCounter')
    },
    openNotification() {
      this.$vs.notification({
        sticky: true,
        color: '#7DC4D9',
        position: 'bottom-left',
        title: 'Ups!',
        text: 'Could not find a question with those filters',
      })
    },
  },
}
</script>

<style></style>

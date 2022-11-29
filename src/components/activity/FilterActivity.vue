<template>
  <div>
    <vs-row justify="space-between" aling="center" class="mt-2">
      <vs-col w="2">
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
      <vs-col w="3">
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
    <vs-row justify="space-around">
      <vs-col w="4">
        <vs-row class="center mt-3">
          <vs-avatar size="40" circle color="#FD9AB6">
            <i class="bx bx-purchase-tag-alt"></i>
          </vs-avatar>
          <vs-select
            class="pl-1"
            label="Type"
            placeholder="Type"
            v-model="type"
            color="#FD9AB6"
          >
            <vs-option label="Education" value="education">
              Education
            </vs-option>
            <vs-option label="Recreational" value="recreational">
              Recreational
            </vs-option>
            <vs-option label="Social" value="social">
              Social
            </vs-option>
            <vs-option label="Diy" value="diy">
              Diy
            </vs-option>
            <vs-option label="Relaxation" value="relaxation">
              Relaxation
            </vs-option>
            <vs-option label="Busywork" value="busywork">
              Busywork
            </vs-option>
            <vs-option label="Music" value="music">
              Music
            </vs-option>
            <vs-option label="Charity" value="charity">
              Charity
            </vs-option>
          </vs-select>
        </vs-row>
        <vs-row class="center mt-3">
          <vs-avatar size="40" circle color="#BED4F0">
            <i class='bx bx-tachometer'></i>
          </vs-avatar>
          <vs-select
            class="pl-1"
            label="Accessibility"
            placeholder="Accessibility"
            v-model="accessibility"
            color="#BED4F0"
          >
            <vs-option label="Easy" value="1">
              Easy
            </vs-option>
            <vs-option label="Mid range" value="2">
              Mid range
            </vs-option>
            <vs-option label="Hard" value="3">
              Hard
            </vs-option>
          </vs-select>
        </vs-row>
      </vs-col>
      <vs-col w="4">
        <div class="end-item">
          <vs-row class="center mt-3">
            <vs-avatar size="40" circle color="#9ED6E6">
              <i class="bx bx-dollar-circle"></i>
            </vs-avatar>
            <vs-select
              class="pl-1"
              label="Price"
              placeholder="Price"
              v-model="price"
              color="#9ED6E6"
            >
              <vs-option label="Free" value="1">
                Free
              </vs-option>
              <vs-option label="Cheap" value="2">
                Cheap
              </vs-option>
              <vs-option label="Expensive" value="3">
                Expensive
              </vs-option>
            </vs-select>
          </vs-row>
        </div>
        <div class="end-item">
          <vs-row class="center mt-3">
            <vs-col w="2" class="">
              <div class="center">
                <vs-avatar size="40" circle color="#FEBF1A">
                  <i class="bx bx-user"></i>
                </vs-avatar>
              </div>
            </vs-col>
            <vs-col w="10">
              <vs-input
                class="pl-1"
                color="#FEBF1A"
                v-model="participants"
                label="Participants"
                type="number"
              />
            </vs-col>
          </vs-row>
        </div>
      </vs-col>
    </vs-row>

    <DialogActivity
      :data="activity"
      ref="dialogActivity"
      @reloadSearch="getWithFilter"
    />
  </div>
</template>

<script>
import ActivityService from '../../service/ActivityService'
import DialogActivity from './DialogActivity.vue'

export default {
  components: { DialogActivity },
  name: 'FilterActivity',
  data: () => ({
    participants: 1,
    accessibility: 0,
    price: 0,
    minAccessibility: '',
    maxAccessibility: '',
    minPrice: '',
    maxPrice: '',
    type: '',
    activity: {},
  }),
  methods: {
    clean() {
      this.participants = 1
      this.accessibility = 0
      this.type = ''
      this.price = 0
    },
    getWithFilter() {
    this.minAccessibility = '';
    this.maxAccessibility = '';
    this.minPrice = '';
    this.maxPrice = '';
      switch (this.accessibility) {
        case '1':
          this.minAccessibility = 0
          this.maxAccessibility = 0.4
          break
        case '2':
          this.minAccessibility = 0.41
          this.maxAccessibility = 0.59
          break
        case '3':
          this.minAccessibility = 0.6
          this.maxAccessibility = 1
          break
      }

      switch (this.price) {
        case '1':
          this.minPrice = 0
          this.maxPrice = 0.4
          break
        case '2':
          this.minPrice = 0.41
          this.maxPrice = 0.59
          break
        case '3':
          this.minPrice = 0.6
          this.maxPrice = 1
          break
      }

      if (this.participants < 1) {
        this.participants = 1
      }

      console.log(this.type)
      ActivityService.getWithFilter(
        this.minAccessibility,
        this.maxAccessibility,
        this.minPrice,
        this.maxPrice,
        this.participants,
        this.type,
      ).then((response) => {
        if (response.data) {
          console.log(response.data)
          if (response.data.activity) {
            this.activity = response.data
            this.$refs.dialogActivity.changeActive()
          } else {
            this.openNotification()
          }
        }
      })
    },
    getRandomly() {
      ActivityService.getRandomly().then((response) => {
        if (response.data) {
          this.activity = response.data
          this.$refs.dialogActivity.changeActive()
        }
      })
    },
    openNotification() {
      const noti = this.$vs.notification({
        sticky: true,
        color: '#7DC4D9',
        position: 'bottom-left',
        title: 'Ups!',
        text: 'Could not find an activity with those filters',
      })
    },
  },
}
</script>

<style></style>

<template>
  <div>
    <div class="center">
      <h3 class="back-outlined width-40 c-light-purple text-center">
        Activities
      </h3>
    </div>
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
        <vs-avatar size="40" circle color="#FD9AB6">
          <i class="bx bx-purchase-tag-alt"></i>
        </vs-avatar>
      </vs-col>
      <vs-col lg="7">
        <vs-select
          class="pl-2"
          label="Type"
          block
          filter
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
      </vs-col>
    </vs-row>
    <vs-row justify="center" class="mt-3">
      <vs-col lg="1">
        <vs-avatar size="40" circle color="#BED4F0">
          <i class="bx bx-tachometer"></i>
        </vs-avatar>
      </vs-col>
      <vs-col lg="7">
        <vs-select
          class="pl-2"
          block
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
      </vs-col>
    </vs-row>
    <vs-row justify="center" class="mt-3">
      <vs-col lg="1">
        <vs-avatar size="40" circle color="#FEBF1A">
          <i class="bx bx-user"></i>
        </vs-avatar>
      </vs-col>
      <vs-col lg="7">
        <vs-input
          class="pl-2"
          color="#FEBF1A"
          block
          v-model="participants"
          label="Participants"
          type="number"
        />
      </vs-col>
    </vs-row>

    <DialogActivity
      :data="activity"
      ref="dialogActivity"
      @reloadFavs="reloadFavs"
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
    minAccessibility: '',
    maxAccessibility: '',
    type: '',
    activity: {},
  }),
  methods: {
    clean() {
      this.participants = 1
      this.accessibility = 0
      this.type = ''
    },
    getWithFilter() {
      this.minAccessibility = ''
      this.maxAccessibility = ''
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

      if (this.participants < 1) {
        this.participants = 1
      }

      console.log(this.type)
      ActivityService.getWithFilter(
        this.minAccessibility,
        this.maxAccessibility,
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
    reloadFavs() {
      this.$emit('reloadFavs')
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

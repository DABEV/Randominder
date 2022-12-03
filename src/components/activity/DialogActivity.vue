<template>
  <div>
    <vs-dialog prevent-close v-model="active" width="400px">
      <template #header>
        <h3 class="back-outlined width-80 c-light-blue text-center">
          Activity
        </h3>
      </template>
      <vs-row justify="space-between" class="mb-2 px-2">
        <vs-col lg="5">
          <vs-button block floating color="#FD9AB6" @click="reloadSearch">
            Search again
          </vs-button>
        </vs-col>
        <vs-col lg="1">
          <vs-button
            class="end-item"
            icon
            color="danger"
            floating
            circle
            @click="addFav"
          >
            <i class="bx bxs-heart"></i>
          </vs-button>
        </vs-col>
      </vs-row>
      <div class="text-center">
        {{ data.activity }}
      </div>
      <vs-row justify="center" aling="center" class="px-1">
        <vs-col w="6">
          <vs-row class="center mt-2">
            <vs-avatar size="30" circle color="#FD9AB6">
              <i class="bx bx-purchase-tag-alt"></i>
            </vs-avatar>
            <div class="pl-1">{{ data.type }}</div>
          </vs-row>
          <vs-row class="center mt-2">
            <vs-avatar size="30" circle color="#BED4F0">
              <i class="bx bx-tachometer"></i>
            </vs-avatar>
            <div v-if="data.accessibility <= 0.4" class="pl-1">Easy</div>
            <div v-else-if="data.accessibility == 0.5" class="pl-1">
              Mid range
            </div>
            <div v-else class="pl-1">Hard</div>
          </vs-row>
        </vs-col>
        <vs-col w="6">
          <vs-row class="center mt-2">
            <vs-avatar size="30" circle color="#9ED6E6">
              <i class="bx bx-dollar-circle"></i>
            </vs-avatar>
            <div v-if="data.price <= 0.4" class="pl-1">Free</div>
            <div v-else-if="data.price == 0.5" class="pl-1">Cheap</div>
            <div v-else class="pl-1">Expensive</div>
          </vs-row>
          <vs-row class="center mt-2">
            <vs-avatar size="30" circle color="#FEBF1A">
              <i class="bx bx-user"></i>
            </vs-avatar>
            <div class="pl-1">
              {{ data.participants }}
            </div>
          </vs-row>
        </vs-col>
      </vs-row>
      <div v-if="data.link" class="mt-1 center">
        <vs-button :href="data.link" blank floating color="#88D6E3">
          Additional Information
        </vs-button>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogActivity',
  data: () => ({
    active: false,
    activity: {},
    activityList: [],
  }),
  methods: {
    changeActive() {
      this.active = !this.active
    },
    reloadSearch() {
      this.active = false
      this.$emit('reloadSearch')
    },
    addFav() {
      let list = localStorage.getItem('activity-favs')
      list = JSON.parse(list)
      if (list) {
        this.activityList = list
        const fav = this.activityList.find(({ key }) => key === this.data.key)
        if (fav) {
          this.openNotification(
            '#7DC4D9',
            'Ups!',
            'This activity is already in favs',
          )
        } else {
          this.activityList.push(this.data)
          localStorage.setItem(
            'activity-favs',
            JSON.stringify(this.activityList),
          )
          this.openNotification(
            'success',
            'Successful!',
            'Activity added in favs',
          )
        }
      } else {
        this.activityList.push(this.data)
        localStorage.setItem('activity-favs', JSON.stringify(this.activityList))
        this.openNotification(
          'success',
          'Successful!',
          'activity added in favs',
        )
      }
      this.reloadFavs()
    },
    reloadFavs() {
      this.$emit('reloadFavs')
    },
    openNotification(color, title, text) {
      this.$vs.notification({
        sticky: true,
        color: color,
        position: 'bottom-left',
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

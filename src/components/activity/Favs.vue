<template>
  <div>
    <div class="center">
      <h3 class="back-outlined width-80 c-dark-yellow text-center">
        Favorite activities
      </h3>
    </div>
    <div class="mt-1">
      <div class="text-center my-2" v-if="activityList.length < 1">
        You don't have any activity yet
      </div>
      <div
        :key="i"
        :data="item"
        v-for="(item, i) in $vs.getPage(activityList, page, max)"
      >
        <div class="item px-2 py-1 rounded">
          <vs-row justify="space-between">
            <vs-col lg="10">
              <div @click="setActivity(item)">
                <div class="text-w-bold fs-7">{{ item.activity }}</div>
                <small class="">Type: {{ item.type }}</small>
              </div>
            </vs-col>
            <vs-col lg="2" class="mt-1 px-1">
              <vs-button
                animation-type="rotate"
                circle
                icon
                danger
                floating
                @click="deleteItem(item.key)"
              >
                <i class="bx bx-trash"></i>
                <template #animate>
                  <i class="bx bxs-trash"></i>
                </template>
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
        <div class="divider px-2 my-1">
          <span class="border"></span>
        </div>
      </div>
    </div>
    <vs-pagination v-model="page" :length="$vs.getLength(activityList, max)" />
    <DialogActivity
      :data="activity"
      ref="dialogActivity"
      @reloadFavs="getFavs"
      @reloadSearch="reloadSearch"
    />
  </div>
</template>

<script>
import DialogActivity from './DialogActivity.vue'
export default {
  components: { DialogActivity },
  name: 'Favs',
  data: () => ({
    page: 1,
    max: 2,
    activityList: [],
    activity: {},
  }),
  methods: {
    getFavs() {
      this.page = 1
      let list = localStorage.getItem('activity-favs')
      this.activityList = JSON.parse(list)
    },
    deleteItem(id) {
      this.activityList = this.activityList.filter(function (item) {
        return item.key != id
      })
      localStorage.setItem('activity-favs', JSON.stringify(this.activityList))
      this.getFavs()
    },
    reloadSearch() {
      this.$emit('reloadSearch')
    },
    setActivity(item) {
      this.activity = item
      this.$refs.dialogActivity.changeActive()
    },
  },
  mounted() {
    this.getFavs()
  },
}
</script>

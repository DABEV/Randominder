<template>
  <vs-dialog scroll overflow-hidden prevent-close v-model="active">
    <template #header>
      <h3>
        {{ data.title }}
      </h3>
    </template>
    <div>
      <vs-row>
        <vs-col lg="4" class="px-2">
          <img :src="data.image" alt="" class="img-fluid rounded shadow" />
          <vs-row class="mb-1 mt-1" v-if="data.dishTypes.length > 0">
            <vs-col lg="1">
              <vs-avatar size="30" circle color="#BED4F0">
                <i class="bx bx-food-menu"></i>
              </vs-avatar>
            </vs-col>
            <vs-col lg="11" class="pl-2">
              <div
                class="display-block"
                v-for="(item, i) in data.dishTypes"
                :data="item"
                :key="i"
              >
                <span class="rounded bg-light-purple badge">{{ item }}</span>
              </div>
            </vs-col>
          </vs-row>
          <vs-row class="mb-1" v-if="data.cuisines.length > 0">
            <vs-col lg="1">
              <vs-avatar size="30" circle color="#FD9AB6">
                <i class="bx bx-bowl-hot"></i>
              </vs-avatar>
            </vs-col>
            <vs-col lg="11" class="pl-2">
              <div
                class="display-block"
                v-for="(item, i) in data.cuisines"
                :data="item"
                :key="i"
              >
                <span class="rounded bg-dark-pink badge">{{ item }}</span>
              </div>
            </vs-col>
          </vs-row>
          <vs-row
            class="mb-1"
            v-if="
              data.dairyFree || data.glutenFree || data.vegetarian || data.vegan
            "
          >
            <vs-col lg="1">
              <vs-avatar size="30" circle color="#FEBF1A">
                <i class="bx bx-purchase-tag-alt"></i>
              </vs-avatar>
            </vs-col>
            <vs-col lg="11" class="pl-2">
              <div class="display-block">
                <span
                  v-if="data.dairyFree"
                  class="rounded bg-dark-yellow badge"
                >
                  DairyFree
                </span>
                <span
                  v-if="data.glutenFree"
                  class="rounded bg-dark-yellow badge"
                >
                  GlutenFree
                </span>
                <span
                  v-if="data.vegetarian"
                  class="rounded bg-dark-yellow badge"
                >
                  Vegetarian
                </span>
                <span v-if="data.vegan" class="rounded bg-dark-yellow badge">
                  Vegan
                </span>
              </div>
            </vs-col>
          </vs-row>
        </vs-col>
        <vs-col lg="8" v-if="active">
          <vs-row>
            <vs-col lg="6">
              <vs-row class="mb-1">
                <vs-avatar size="30" circle color="#FD9AB6">
                  <i class="bx bx-dollar-circle"></i>
                </vs-avatar>
                <div class="pl-1">
                  Price: ${{ (data.pricePerServing)/10 }} dls
                </div>
              </vs-row>
              <vs-row>
                <vs-avatar size="30" circle color="#88D6E3">
                  <i class="bx bx-user"></i>
                </vs-avatar>
                <div class="pl-1">Servings: {{ data.servings }}</div>
              </vs-row>
            </vs-col>
            <vs-col lg="6">
              <vs-row class="mb-1">
                <vs-avatar size="30" circle color="#FEBF1A">
                  <i class="bx bx-time"></i>
                </vs-avatar>
                <div class="pl-1">Ready in {{ data.readyInMinutes }} min</div>
              </vs-row>
            </vs-col>
          </vs-row>

          <div>
            <div class="divider mt-1 px-1">
              <span class="border"></span>
            </div>
            <h3 class="mt-1 c-dark-pink">Ingredients</h3>
            <vs-row class="mt-1">
              <vs-col lg="4">
                <ul
                  v-for="(item, i) in $vs.getPage(
                    data.extendedIngredients,
                    1,
                    6,
                  )"
                  :data="item"
                  :key="i"
                  class="pl-3 fs-7"
                >
                  <li>
                    <strong>{{ item.amount }} {{ item.unit }}</strong>
                    of {{ item.name }}
                  </li>
                </ul>
              </vs-col>
              <vs-col lg="4">
                <ul
                  v-for="(item, i) in $vs.getPage(
                    data.extendedIngredients,
                    2,
                    6,
                  )"
                  :data="item"
                  :key="i"
                  class="pl-3 fs-7"
                >
                  <li>
                    <strong>{{ item.amount }} {{ item.unit }}</strong>
                    of {{ item.name }}
                  </li>
                </ul>
              </vs-col>
              <vs-col lg="4">
                <ul
                  v-for="(item, i) in $vs.getPage(
                    data.extendedIngredients,
                    3,
                    6,
                  )"
                  :data="item"
                  :key="i"
                  class="pl-3 fs-7"
                >
                  <li>
                    <strong>{{ item.amount }} {{ item.unit }}</strong>
                    of {{ item.name }}
                  </li>
                </ul>
              </vs-col>
            </vs-row>
          </div>
        </vs-col>
      </vs-row>
      <div class="text-center pa-1">
        <h3 class="mt-1 c-dark-pink">Instructions</h3>
        <div
          v-for="(item, i) in $vs.getPage(
            data.analyzedInstructions[0].steps,
            step,
            1,
          )"
          :key="i"
          :data="item"
          class="mt-1"
        >
          <div class="fs-7 pa-2">{{ item.step }}</div>
        </div>
        <vs-pagination
          class="mt-2"
          progress
          v-model="step"
          :length="$vs.getLength(data.analyzedInstructions[0].steps, 1)"
        />
      </div>
    </div>
  </vs-dialog>
</template>

<script>
export default {
  name: 'RecipeDialog',
  data: () => ({
    active: false,
    step: 1,
  }),
  methods: {
    changeActive() {
      this.step = 1
      this.active = !this.active
    },
    reloadSearch() {
      this.active = false
      this.$emit('reloadSearch')
    },
  },
  props: {
    data: Object,
  },
}
</script>

<style></style>

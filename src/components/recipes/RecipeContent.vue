<template>
  <div>
    <div class="center">
      <h3 class="back-outlined width-60 c-dark-yellow text-center">
        Favorite recipes
      </h3>
    </div>
    <div class="mt-1">
      <div class="text-center my-2" v-if="recipeList.length < 1">
        You don't have any recipe yet
      </div>
      <div
        :key="i"
        :data="item"
        v-for="(item, i) in $vs.getPage(recipeList, page, max)"
      >
        <div class="item px-1 rounded">
          <vs-row justify="space-between">
            <vs-col lg="10">
              <div @click="setRecipe(item)">
                <vs-row>
                  <vs-col lg="4" sm="3" xs="3" class="mt-1">
                    <img
                      v-if="item.image"
                      :src="item.image"
                      alt=""
                      class="img-fluid rounded shadow"
                    />
                    <img
                      v-else
                      src="https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fdish.png?alt=media&token=0e66c819-4542-4a41-a6c1-36341511e8f5"
                      alt=""
                      class="img-fluid rounded shadow"
                    />
                  </vs-col>
                  <vs-col lg="8" sm="12" xs="12" class="mt-1 px-1">
                    <div class="text-w-bold fs-7">{{ item.title }}</div>
                    <small class="">
                      Price: ${{ item.pricePerServing }} dls
                    </small>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
            <vs-col lg="2" class="mt-1 px-1">
              <vs-button
                animation-type="rotate"
                circle
                icon
                danger
                floating
                @click="deleteItem(item.id)"
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
    <vs-pagination v-model="page" :length="$vs.getLength(recipeList, max)" />
    <RecipeDialog
      :data="recipe"
      ref="dialogRecipe"
      @reloadFavs="getFavs"
      @reloadSearch="reloadSearch"
    />
  </div>
</template>

<script>
import RecipeDialog from './DialogRecipe.vue'

export default {
  components: { RecipeDialog },
  name: 'RecipeContent',
  data: () => ({
    page: 1,
    max: 2,
    recipeList: [],
    recipe: {},
  }),
  methods: {
    getFavs() {
      this.page = 1
      let list = localStorage.getItem('recipe-favs')
      this.recipeList = JSON.parse(list)
    },
    deleteItem(id) {
      this.recipeList = this.recipeList.filter(function (item) {
        return item.id != id
      })
      localStorage.setItem('recipe-favs', JSON.stringify(this.recipeList))
      this.getFavs()
    },
    reloadSearch() {
      this.$emit('reloadSearch')
    },
    setRecipe(item) {
      this.recipe = item
      this.$refs.dialogRecipe.changeActive()
    },
  },
  mounted() {
    this.getFavs()
  },
}
</script>

<style></style>

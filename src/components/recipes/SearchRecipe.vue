<template>
  <div>
    <div class="center">
      <h3 class="back-outlined width-40 c-light-purple text-center">
        Recipes
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
        <vs-avatar size="40" circle color="#BED4F0">
          <i class="bx bx-food-menu"></i>
        </vs-avatar>
      </vs-col>
      <vs-col lg="7">
        <vs-select
          label="Meal Type"
          v-model="type"
          filter
          block
          placeholder="Meal Type"
          color="#BED4F0"
          class="pl-2"
        >
          <vs-option label="Appetizer" value="appetizer">
            Appetizer
          </vs-option>
          <vs-option label="Bread" value="bread">
            Bread
          </vs-option>
          <vs-option label="Breakfast" value="breakfast">
            Breakfast
          </vs-option>
          <vs-option label="Beverage" value="beverage">
            Beverage
          </vs-option>
          <vs-option label="Dessert" value="dessert">
            Dessert
          </vs-option>
          <vs-option label="Drink" value="drink">
            Drink
          </vs-option>
          <vs-option label="Fingerfood" value="fingerfood">
            Fingerfood
          </vs-option>
          <vs-option label="Main course" value="main course">
            Main course
          </vs-option>
          <vs-option label="Marinade" value="marinade">
            Marinade
          </vs-option>
          <vs-option label="Salad" value="salad">
            Salad
          </vs-option>
          <vs-option label="Sauce" value="sauce">
            Sauce
          </vs-option>
          <vs-option label="Side dish" value="side dish">
            Side dish
          </vs-option>
          <vs-option label="Snack" value="snack">
            Snack
          </vs-option>
          <vs-option label="Soup" value="soup">
            Soup
          </vs-option>
        </vs-select>
      </vs-col>
    </vs-row>
    <vs-row justify="center" class="mt-3">
      <vs-col lg="1">
        <vs-avatar size="40" circle color="#FD9AB6">
          <i class="bx bx-bowl-hot"></i>
        </vs-avatar>
      </vs-col>
      <vs-col lg="7">
        <vs-select
          label="Cousine"
          v-model="cousine"
          filter
          block
          placeholder="Cousine"
          color="#FD9AB6"
          class="pl-2"
        >
          <vs-option label="African" value="african">
            African
          </vs-option>
          <vs-option label="American" value="american">
            American
          </vs-option>
          <vs-option label="British" value="british">
            British
          </vs-option>
          <vs-option label="Cajun" value="cajun">
            Cajun
          </vs-option>
          <vs-option label="Caribbean" value="caribbean">
            Caribbean
          </vs-option>
          <vs-option label="Chinese" value="chinese">
            Chinese
          </vs-option>
          <vs-option label="Eastern European" value="eastern european">
            Eastern European
          </vs-option>
          <vs-option label="European" value="european">
            European
          </vs-option>
          <vs-option label="French" value="french">
            French
          </vs-option>
          <vs-option label="German" value="german">
            German
          </vs-option>
          <vs-option label="Greek" value="greek">
            Greek
          </vs-option>
          <vs-option label="Indian" value="indian">
            Indian
          </vs-option>
          <vs-option label="Irish" value="irish">
            Irish
          </vs-option>
          <vs-option label="Italian" value="italian">
            Italian
          </vs-option>
          <vs-option label="Japanese" value="japanese">
            Japanese
          </vs-option>
          <vs-option label="Jewish" value="jewish">
            Jewish
          </vs-option>
          <vs-option label="Korean" value="korean">
            Korean
          </vs-option>
          <vs-option label="Latin American" value="Latin American">
            Latin American
          </vs-option>
          <vs-option label="Mediterranean" value="mediterranean">
            Mediterranean
          </vs-option>
          <vs-option label="Mexican" value="mexican">
            Mexican
          </vs-option>
          <vs-option label="Middle Eastern" value="middle eastern">
            Middle Eastern
          </vs-option>
          <vs-option label="Nordic" value="nordic">
            Nordic
          </vs-option>
          <vs-option label="Southern" value="southern">
            Southern
          </vs-option>
          <vs-option label="Spanish" value="spanish">
            Spanish
          </vs-option>
          <vs-option label="Thai" value="thai">
            Thai
          </vs-option>
          <vs-option label="Vietnamese" value="vietnamese">
            Vietnamese
          </vs-option>
        </vs-select>
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
          label="Other tags"
          v-model="other"
          filter
          block
          multiple
          collapse-chips
          placeholder="Other tags"
          color="#FEBF1A"
          class="pl-2"
        >
          <vs-option label="Dairy free" value="dairy free">
            Dairy free
          </vs-option>
          <vs-option label="Gluten free" value="gluten free">
            Gluten free
          </vs-option>
          <vs-option label="Vegetarian" value="vegetarian">
            Vegetarian
          </vs-option>
          <vs-option label="Vegan" value="vegan">
            Vegan
          </vs-option>
        </vs-select>
      </vs-col>
    </vs-row>

    <RecipeDialog
      :data="recipe"
      ref="dialogRecipe"
      @reloadSearch="getWithFilter"
    />
  </div>
</template>

<script>
import RecipeService from '../../service/RecipeService'
import RecipeDialog from './RecipeDialog.vue'

export default {
  components: { RecipeDialog },
  name: 'SearchRecipe',
  data: () => ({
    type: '',
    cousine: '',
    other: [],
    recipe: {},
  }),
  methods: {
    clean() {
      this.type = ''
      this.cousine = ''
      this.other = []
    },
    getWithFilter() {
      let tags = ''
      if (this.other.length > 0) {
        this.other.forEach((element) => {
          tags += element + ','
        })
      }

      console.log(`tags=${this.type},${this.cousine},${tags}`)

      RecipeService.getWithFilter(this.type, this.cousine, tags).then(
        (response) => {
          if (response.data.recipes.length > 0) {
            this.recipe = response.data.recipes[0]
            this.$refs.dialogRecipe.changeActive()
          } else {
            this.openNotification()
          }
        },
      )
    },
    getRandomly() {
      RecipeService.getRandomly().then((response) => {
        if (response.data) {
          this.recipe = response.data.recipes[0]
          this.$refs.dialogRecipe.changeActive()
        }
      })
    },
    openNotification() {
      this.$vs.notification({
        sticky: true,
        color: '#7DC4D9',
        position: 'bottom-left',
        title: 'Ups!',
        text: 'Could not find a recipe with those filters',
      })
    },
  },
}
</script>

<style></style>

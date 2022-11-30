<template>
  <div class="pa-2">
    <div class="bg-white rounded shadow pa-2">
      <div class="center">
        <h3 class="back-outlined width-60 c-light-purple text-center">
          Recipes
        </h3>
      </div>
      <vs-row justify="space-between" aling="center" class="mt-1">
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
        <vs-col lg="2">
          <div class="center">
            <vs-avatar size="40" circle color="#BED4F0">
              <i class='bx bx-food-menu'></i>
            </vs-avatar>
          </div>
        </vs-col>
        <vs-col lg="7">
          <vs-select
            label="Meal Type"
            v-model="type"
            filter
            placeholder="Meal Type"
            color="#BED4F0"
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
        <vs-col lg="2">
          <div class="center">
            <vs-avatar size="40" circle color="#FD9AB6">
              <i class='bx bx-bowl-hot'></i>
            </vs-avatar>
          </div>
        </vs-col>
        <vs-col lg="7">
          <vs-select
            label="Cousine"
            v-model="cousine"
            filter
            placeholder="Cousine"
            color="#FD9AB6"
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
        <vs-col lg="2">
          <div class="center">
            <vs-avatar size="40" circle color="#FEBF1A">
              <i class='bx bx-error'></i>
            </vs-avatar>
          </div>
        </vs-col>
        <vs-col lg="7">
          <vs-select
            label="Intolerances"
            v-model="intolerances"
            filter
            placeholder="Intolerances"
            color="#FEBF1A"
          >
            <vs-option label="Dairy" value="dairy">
              Dairy
            </vs-option>
            <vs-option label="Egg" value="egg">
              Egg
            </vs-option>
            <vs-option label="Gluten" value="gluten">
              Gluten
            </vs-option>
            <vs-option label="Grain" value="grain">
              Grain
            </vs-option>
            <vs-option label="Peanut" value="peanut">
              Peanut
            </vs-option>
            <vs-option label="Seafood" value="seafood">
              Seafood
            </vs-option>
            <vs-option label="Sesame" value="sesame">
              Sesame
            </vs-option>
            <vs-option label="Shellfish" value="shellfish">
              Shellfish
            </vs-option>
            <vs-option label="Soy" value="soy">
              Soy
            </vs-option>
            <vs-option label="Sulfite" value="sulfite">
              Sulfite
            </vs-option>
            <vs-option label="Tree Nut" value="tree nut">
              Tree Nut
            </vs-option>
            <vs-option label="Wheat" value="wheat">
              Wheat
            </vs-option>
          </vs-select>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchRecipe',
  data: () => ({
    type: '',
    cousine: '',
    intolerances: '',
  }),
  methods: {
    clean() {
      this.type = ''
      this.cousine = ''
      this.intolerances = ''
    },
  },
}
</script>

<style></style>

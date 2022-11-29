<template>
  <div class="pa-2">
    <div class="bg-white rounded shadow pa-2">
      <h3 class="back-outlined width-30 c-light-purple text-center">
        Recipes
      </h3>
      <vs-row justify="space-between" aling="center" class="mt-2">
        <vs-col w="1">
          <div class="center">
            <vs-button animation-type="rotate" color="#88D6E3" floating>
              <i class="bx bx-dice-5"></i>
              Randomly
              <template #animate>
                <i class="bx bxs-dice-5"></i>
                Randomly
              </template>
            </vs-button>
          </div>
        </vs-col>
        <vs-col w="6">
          <div class="center">
            <vs-select
              label="Type"
              placeholder="Type"
              v-model="type"
              color="#BED4F0"
            >
              <vs-option label="Breakfast" value="breakfast">
                Breakfast
              </vs-option>
              <vs-option label="Sauce" value="sauce">
                Sauce
              </vs-option>
              <vs-option label="Vegetarian" value="vegetarian">
                Vegetarian
              </vs-option>
            </vs-select>
            <vs-button animation-type="rotate" color="#FEBF1A" floating>
              <i class="bx bx-filter-alt"></i>
              Apply filter
              <template #animate>
                <i class="bx bxs-filter-alt"></i>
                Apply filter
              </template>
            </vs-button>
            <vs-button animation-type="rotate" circle icon danger floating>
              <i class="bx bx-trash"></i>
              <template #animate>
                <i class="bx bxs-trash"></i>
              </template>
            </vs-button>
          </div>
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
  }),
}
</script>

<style></style>

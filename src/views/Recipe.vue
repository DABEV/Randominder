<template>
  <div class="full-content bg-blue-back">
    <vs-row justify="space-between">
      <vs-col w="7" class="pa-2 bg-white ma-2 rounded shadow">
        <SearchRecipe />
      </vs-col>
      <vs-col w="4" class="pa-2 bg-white ma-2 rounded shadow mb-3">
        <RecipeContent />
      </vs-col>
    </vs-row>
    <TypeList />
  </div>
</template>

<script>
import SearchRecipe from '../components/recipes/SearchRecipe.vue'
import RecipeContent from '../components/recipes/RecipeContent.vue'
import TypeList from '../components/activity/TypeList.vue'

export default {
  components: { SearchRecipe, RecipeContent, TypeList },
  name: 'Recipe',
  TypeList: 'Recipe',
  data: () => ({}),
  methods: {},
}
</script>

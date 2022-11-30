<template>
  <div class="bg-blue-back">
    <vs-row>
      <vs-col w="5"><SearchRecipe /></vs-col>
      <vs-col w="6">
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
  name,
  TypeList: 'Recipe',
  data: () => ({}),
  methods: {},
}
</script>

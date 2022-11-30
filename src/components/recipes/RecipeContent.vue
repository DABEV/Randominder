<template>
  <div class="pa-2">
    <div class="bg-white rounded shadow pa-2">
      <div class="center">
        <h3 class="back-outlined width-60 c-dark-yellow text-center">
          Favorite recipes
        </h3>
      </div>
      <div class="center mt-2">
        <vs-card type="3" class="mb-2">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="/foto5.png" alt="" />
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeContent',
}
</script>

<style></style>

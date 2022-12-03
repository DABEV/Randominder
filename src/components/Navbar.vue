<template>
  <div>
    <vs-navbar
      text-white
      center-collapsed
      v-model="active"
      color="#88D6E3"
      class="pa-0"
    >
      <template #left>
        <img
          class="img-nav"
          src="https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2Flogo-randominder.svg?alt=media&token=64d3e5b5-7e04-47b9-861c-8ac79335e855"
          alt=""
        />
        <strong class="ml-1 c-white">Randominder</strong>
      </template>
      <vs-navbar-item
        :active="active == 'home'"
        id="home"
        to="/"
        class="c-white"
      >
        Home
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'activities'"
        id="activities"
        to="/activities"
        class="c-white"
      >
        Activities
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'recipes'"
        id="recipes"
        to="/recipes"
        class="c-white"
      >
        Recipes
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'trivia'"
        id="trivia"
        to="/trivia"
        class="c-white"
      >
        Trivia
      </vs-navbar-item>
      <template #right>
        <vs-button
          color="#FF99B4"
          floating
          to="/activities"
          @click="active = 'activities'"
        >
          Get Started
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    active: '',
  }),
}
</script>

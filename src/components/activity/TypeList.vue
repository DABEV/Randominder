<template>
  <div class="center">
    <vs-card-group>
      <vs-card v-for="(item, i) in categories" :data="item" :key="i" type="3">
        <template #title>
          <h3>{{ item.type }}</h3>
        </template>
        <template #img>
          <img :src="item.icon" alt="" />
        </template>
        <template #text>
          <p>
            {{ item.body }}
          </p>
        </template>
        <template #interactions>
          <vs-button danger floating :to="item.ref">
            Go
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script>
export default {
  name: 'TypeList',
  data: () => ({
    categories: [
      {
        icon:
          'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fdish.png?alt=media&token=0e66c819-4542-4a41-a6c1-36341511e8f5',
        type: 'Recipes',
        body: 'Find different cooking recipes',
        ref: '/recipes',
      },
      {
        icon:
          'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fpuzzle.png?alt=media&token=2bb7b555-ca7c-4273-93ca-533f01189aeb',
        type: 'Trivia',
        body: 'Try to solve a trivia topic of your choice',
        ref: '/trivia',
      },
      {
        icon:
          'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Factivities.png?alt=media&token=45f47060-7157-4ba8-bf3a-162c0fa6b7c6',
        type: 'Activities',
        body: 'Get random suggestions',
        ref: '/activities',
      },
    ],
  }),
}
</script>

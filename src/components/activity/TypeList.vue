<template>
  <div>
    <vs-card-group>
      <vs-card v-for="(item, i) in categories" :data="item" :key="i">
        <template #title>
          <h3>{{ item.type }}</h3>
        </template>
        <template #img>
          <img :src="item.icon" alt="" />
        </template>
        <template #text>
          <p>
            Select this type of the activity
          </p>
        </template>
        <template #interactions>
          <vs-button danger floating>
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
        icon: 'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fbooks.png?alt=media&token=7d1c6e65-4eb8-4bb3-8c76-203b6cda2ae2',
        type: 'Education',
      },
      {
        icon: 'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fgame.png?alt=media&token=4d341486-2fbc-41ce-8dc7-667b9a096d3d',
        type: 'Recreational',
      },
      {
        icon: 'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fphone.png?alt=media&token=2cb4dd98-0d0a-44f3-8a82-058a611f5b40',
        type: 'Social',
      },
      {
        icon: 'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fdiy.png?alt=media&token=2158ce61-2e52-4e46-81cf-19f38ef587e2',
        type: 'Diy',
      },
      {
        icon: 'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fspa.jpg?alt=media&token=4d45bc03-3554-4f70-b86f-8dade402823e',
        type: 'Relaxation',
      },
      {
        icon: 'https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fsources%2Fwork.jpg?alt=media&token=979025b2-48eb-400a-9b69-cb538d0ead83',
        type: 'Busywork',
      },
    ],
  }),
}
</script>

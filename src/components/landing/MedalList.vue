<template>
  <div>
    <vs-row class="mb-3" align="center" justify="center">
      <vs-col lg="2" v-for="(item, i) in prizes" :data="item" :key="i" class="text-center">
        <div class="center mt-4">
          <vs-avatar size="95" square color="#ffffff">
            <img :src="item.icon" />
          </vs-avatar>
        </div>
        <div class="text-w-bold mt-1">{{ item.title }}</div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "MedalList",
  data: () => ({
    prizes: [
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2FBegginer.svg?alt=media&token=fcf784b9-8f2b-40c7-ab42-0b16ce9bdad0",
        title: "Beginner",
      },
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2FMusic-lover.svg?alt=media&token=d1fc058f-a81f-409a-afb1-b90ee3928c25",
        title: "Music lover",
      },
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2FChef-medal.svg?alt=media&token=27b1bc26-de72-42cf-95eb-0ca1f2741220",
        title: "Super Chef",
      },
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2FDiamond.svg?alt=media&token=e49c99be-e55a-4345-b31c-a363df09f518",
        title: "Diamond heart",
      },
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/pret-img.appspot.com/o/randominder%2Fmedals%2FHard.svg?alt=media&token=089d5ae1-5e21-471c-afa9-3978ad53cbc6",
        title: "Hard-working",
      },
    ],
  }),
};
</script>
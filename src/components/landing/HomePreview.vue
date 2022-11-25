<template>
  <div class="full-content">
    <vs-row justify="center" class="fit-height">
      <vs-col class="fit-height" vs-type="flex" w="2">
        <vs-row class="fit-height" align="flex-start" justify="flex-start">
          <vs-col w="11" class="back-img-1 height-90"></vs-col>
        </vs-row>
      </vs-col>
      <vs-col class="fit-height" vs-type="flex" w="2">
        <vs-row class="fit-height" align="flex-end" justify="flex-end">
          <vs-col w="11" class="back-img-2 height-90"></vs-col>
        </vs-row>
      </vs-col>
      <vs-col
        class="fit-height"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
      >
        <vs-row
          class="fit-height text-center"
          align="flex-end"
          justify="center"
        >
          <vs-col w="9" vs-justify="center" vs-align="center" class="height-90">
            <div class="center">
              <h2 class="back-outlined c-dark-pink width-80">Randominder</h2>
              <div class="mt-2 mb-1">
                Find new activities and get out of the routine with just one
                click
              </div>
              <vs-button color="#ff99b4" size="large"> Get started </vs-button>
              <vs-row>
                <vs-col w="9">
                  <ContentList />
                </vs-col>
              </vs-row>
            </div>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ContentList from "./ContentList.vue";
export default {
  components: { ContentList },
  name: "HomePreview",
};
</script>

<style>
</style>
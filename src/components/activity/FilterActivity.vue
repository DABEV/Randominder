<template>
  <div class="center mt-3 mb-1">
    <vs-select
      class="mx-1"
      label="Accessibility"
      placeholder="Accessibility"
      v-model="accessibility"
      color="#FD9AB6"
    >
      <vs-option label="Easy" value="1">
        Easy
      </vs-option>
      <vs-option label="Lowest" value="2">
        Lowest
      </vs-option>
      <vs-option label="Mid range" value="3">
        Mid range
      </vs-option>
      <vs-option label="High" value="4">
        High
      </vs-option>
      <vs-option label="Too hard" value="5">
        Too hard
      </vs-option>
    </vs-select>
    <vs-select
      class="mx-1"
      label="Price"
      placeholder="Price"
      v-model="price"
      color="#9ED6E6"
    >
      <vs-option label="Free" value="1">
        Free
      </vs-option>
      <vs-option label="Cheap" value="2">
        Cheap
      </vs-option>
      <vs-option label="Mid range" value="3">
        Mid range
      </vs-option>
      <vs-option label="Expensive" value="4">
        Expensive
      </vs-option>
    </vs-select>
    <vs-input
      class="mx-1"
      color="#FEBF1A"
      v-model="participants"
      label="Participants"
      type="number"
    />
    <vs-button animation-type="rotate" circle icon danger floating @click="clean">
      <i class="bx bx-trash"></i>
      <template #animate>
        <i class="bx bxs-trash"></i>
      </template>
    </vs-button>
  </div>
</template>

<script>
export default {
  name: 'FilterActivity',
  data: () => ({
    type: '',
    participants: 0,
    accessibility: 0,
    price: 0,
  }),
  methods: {
    clean() {
      this.participants = 0
      this.accessibility = 0
      this.price = 0
    },
  },
}
</script>

<style></style>

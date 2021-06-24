<template>
  <section class="section">
    <card
      v-for="(gif, key) in gifs"
      :key="key"
      :footer="gif.title"
      :photo="gif.gif"
      :likeable="true"
    />
  </section>
</template>

<script>
export default {
  name: 'Gifs',
  layout: 'default',
  async fetch() {
    await this.$store.dispatch('gifs/fetchGifs')
  },
  computed: {
    gifs() {
      return this.$store.state.gifs.gifs
    },
  },
}
</script>

<style scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
</style>

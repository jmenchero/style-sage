<template>
  <section class="section">
    <section class="column is-two-thirds">
      <card
        v-for="(cat, key) in cats"
        :key="key"
        :count="true"
        :title="cat.name"
        :photo="
          cat.primary_photo_cropped
            ? cat.primary_photo_cropped.small
            : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        "
        @click.native="showDetail(cat)"
      />
    </section>

    <section class="column">
      <detail
        v-if="selectedCat"
        :title="selectedCat.name"
        :photo="
          selectedCat.primary_photo_cropped
            ? selectedCat.primary_photo_cropped.small
            : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        "
      />
    </section>
  </section>
</template>

<script>
export default {
  name: 'Cats',
  layout: 'default',
  async fetch() {
    await this.$store.dispatch('cats/fetchCats')
  },
  computed: {
    cats() {
      return this.$store.state.cats.cats
    },
    selectedCat() {
      return this.$store.state.cats.selectedCat
    },
  },
  methods: {
    showDetail(cat) {
      this.$store.dispatch('cats/selectCat', cat)
    },
  },
}
</script>

<style scoped>
.section {
  display: flex;
}
.column {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
</style>

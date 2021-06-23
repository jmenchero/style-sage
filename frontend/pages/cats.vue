<template>
  <section class="section">
    <card :count="true">
      <img :src="'https://cataas.com' + cat.url" />
    </card>
  </section>
</template>

<script>
export default {
  name: 'Cats',
  layout: 'default',
  data() {
    return {
      cat: {},
    }
  },
  async fetch() {
    this.cat = await this.$axios.$get('https://cataas.com/cat?json=true')
  },
}
</script>

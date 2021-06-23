<template>
  <section class="section">
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
    />
  </section>
</template>

<script>
export default {
  name: 'Cats',
  layout: 'default',
  data() {
    return {
      cats: [],
    }
  },
  async fetch() {
    const responseToken = await this.$axios.post(
      'https://api.petfinder.com/v2/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: 'BBdiLWBH8p7yUSYhpf6INPkfBFV9AvGElYBkd7rwyre3jb7oaW',
        client_secret: 'reiyKwxB0ZZmOLcj0ZheXTv3CF7FWOXUt482dqvM',
      }
    )
    const token = responseToken.data.access_token

    const responseCats = await this.$axios.get(
      'https://api.petfinder.com/v2/animals?type=Cat',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )
    this.cats = responseCats.data.animals
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

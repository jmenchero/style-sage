import Vue from 'vue'

export const state = () => ({
  cats: [],
  selectedCat: null,
})

export const mutations = {
  setCats(state, cats) {
    state.cats = cats
  },

  selectCat(state, cat) {
    state.selectedCat = cat
  },
}

export const actions = {
  async fetchCats({ commit }) {
    try {
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
      const cats = responseCats.data.animals
      commit('setCats', cats)
    } catch (err) {
      Vue.prototype.$buefy.toast.open({
        duration: 2000,
        message: `Something went wrong loading cat lists.`,
        type: 'is-danger',
      })
    }
  },
  selectCat({ commit }, cat) {
    commit('selectCat', cat)
  },
}

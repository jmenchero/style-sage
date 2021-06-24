import Vue from 'vue'
import staticGifs from '~/static/gifs.json'

export const state = () => ({
  gifs: [],
})

export const mutations = {
  setGifs(state, gifs) {
    state.gifs = gifs
  },
}

export const actions = {
  async fetchGifs({ commit }) {
    try {
      const giphy = {
        baseURL: 'https://api.giphy.com/v1/gifs/',
        apiKey: '0UTRbFtkMxAplrohufYco5IY74U8hOes',
        tag: 'fail',
        type: 'random',
        rating: 'pg-13',
      }
      const giphyURL = encodeURI(
        giphy.baseURL +
          giphy.type +
          '?api_key=' +
          giphy.apiKey +
          '&tag=' +
          giphy.tag +
          '&rating=' +
          giphy.rating
      )

      const gifs = await Promise.all(
        staticGifs.map(async (gif) => {
          const gifResponse = await this.$axios.get(giphyURL)
          return {
            gif: gifResponse.data.data.image_url,
            title: gif.title,
          }
        })
      )

      commit('setGifs', gifs)
    } catch (err) {
      Vue.prototype.$buefy.toast.open({
        duration: 2000,
        message: `Something went wrong loading gifs.`,
        type: 'is-danger',
      })
    }
  },
}

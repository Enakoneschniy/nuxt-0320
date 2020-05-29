export const state = () => ({
  items: []
})

export const getters = {
  items: store => store.items
}

export const actions = {
  async load ({ commit }) {
    let articles = []
    try {
      articles = await this.$axios.$get('/articles')
    } catch (e) {
      console.log(e)
    }
    commit('saveLoaded', articles)
  },
  async search ({ commit }, q) {
    console.log(q)
    let articles = []
    if (q.length >= 3) {
      articles = await this.$axios.$get('/articles', {
        params: { q }
      })
    } else {
      articles = await this.$axios.$get('/articles')
    }
    commit('saveLoaded', articles)
  }
}

export const mutations = {
  saveLoaded (state, articles) {
    state.items = articles
  }
}

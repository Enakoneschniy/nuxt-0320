export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items,
  isCanAdd (state) {
    return function (articleId) {
      return state.items.findIndex(item => item.id === articleId) === -1
    }
  }
}

export const actions = {
  async load ({ commit }) {
    let articles = []
    try {
      articles = await this.$axios.$get('/favorites')
    } catch (e) {
      console.log(e)
    }
    commit('saveLoaded', articles)
  },
  async add ({ commit, state }, article) {
    try {
      if (state.items.findIndex(item => item.id === article.id) === -1) {
        const newArticle = await this.$axios.$post('/favorites', {
          ...article,
          createdAt: new Date().toLocaleDateString()
        })
        commit('saveNew', newArticle)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  saveLoaded (state, articles) {
    state.items = articles
  },
  saveNew (state, article) {
    state.items.push(article)
  }
}

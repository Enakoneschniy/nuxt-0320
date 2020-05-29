<template>
  <articles-list/>
</template>

<script>
import ArticlesList from '../../components/ArticlesList'
export default {
  name: 'Index',
  components: {
    ArticlesList
  },
  watchQuery: ['q'],
  async fetch ({ store, query }) {
    if (query.q) {
      await store.dispatch('articles/search', query.q)
    } else {
      await store.dispatch('articles/load')
    }
  }
}
</script>

<style scoped lang="scss">

</style>

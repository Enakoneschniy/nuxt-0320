<template>
  <div>
    <form>
      <input v-model="q" type="search" class="form-control" placeholder="Type to search...">
    </form>
    <hr>
    <articles-list :articles="articles" />
  </div>
</template>

<script>
import ArticlesList from '../../components/ArticlesList'
export default {
  name: 'Index',
  components: { ArticlesList },
  async asyncData  ({ $axios }) {
    let articles = []
    try {
      articles = await $axios.$get('/articles')
    } catch (e) {
      console.log(e)
    }
    return { articles }
  },
  data: () => ({
    q: '',
    searchTimeout: null
  }),
  watch: {
    q (newValue) {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(async () => {
        if (newValue.length >= 3) {
          this.articles = await this.$axios.$get('/articles', {
            params: {
              q: newValue
            }
          })
        } else {
          this.articles = await this.$axios.$get('/articles')
        }
      }, 500)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

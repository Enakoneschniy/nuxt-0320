<template>
  <div class="articles-list">
    <h1>Articles</h1>
    <articles-list-item v-for="article of articles" :key="article.id" :article="article" />
  </div>
</template>

<script>
import ArticlesListItem from './ArticlesListItem'
export default {
  name: 'ArticlesList',
  components: { ArticlesListItem },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>

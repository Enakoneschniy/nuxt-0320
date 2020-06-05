<template>
  <div class="articles-list">
    <h1 class="text-center mb-5 mt-5">
      Articles
    </h1>
    <articles-list-item v-for="article of articles" :key="article.id" :article="article"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ArticlesListItem from './ArticlesListItem'

  export default {
    name: 'ArticlesList',
    components: { ArticlesListItem },
    computed: mapGetters({
      articles: 'articles/items'
    })
  }
</script>

<style scoped lang="scss">

</style>

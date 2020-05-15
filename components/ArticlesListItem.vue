<template>
  <article class="alert alert-secondary" role="alert">
    <h1 class="alert-heading">
      {{ article.title }}
    </h1>
    <img class="article-img" :src="article.previewImage" alt="">
    <div class="article-preview-text" v-html="article.previewText" />
    <hr>
    <div class="d-flex justify-content-end">
      <nuxt-link class="btn btn-info" :to="{ name: 'article-detail', params: { id: article.id } }">
        Read more...
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticlesListItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.article-img
  margin-bottom: 10px
  width: 100%
  height: 300px
  object-fit: cover
</style>

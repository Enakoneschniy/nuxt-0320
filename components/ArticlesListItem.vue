<template>
  <article class="alert alert-secondary" role="alert">
    <h1 class="alert-heading">
      {{ article.title }}
    </h1>
    <img class="article-img" :src="article.previewImage" alt="">
    <div class="article-preview-text" v-html="article.previewText" />
    <hr>
    <div class="d-flex justify-content-end">
      <button v-if="isCanAdd(article.id)" class="btn btn-outline-success mr-3" @click="onAddToFavorite(article)">
        Add to favorite
      </button>
      <button v-else class="btn btn-outline-danger mr-3">
        Remove from favorite
      </button>
      <nuxt-link class="btn btn-info" :to="{ name: 'article-detail', params: { id: article.id } }">
        Read more...
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ArticlesListItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters({
    isCanAdd: 'favorites/isCanAdd'
  }),
  methods: mapActions({
    onAddToFavorite: 'favorites/add'
  })
}
</script>

<style scoped lang="sass">
.article-img
  margin-bottom: 10px
  width: 100%
  height: 300px
  object-fit: cover
</style>

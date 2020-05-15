<template>
  <article>
    <h1>{{ article.title }}</h1>
    <img class="article-img" :src="article.detailImage" alt="">
    <div class="images">
      <img
        v-for="(img, index) of article.detailImages"
        :key="index"
        :class="{ active: img === article.detailImage}"
        class="article-img-preview"
        :src="img"
        alt=""
        @mouseover.prevent.stop="onChangeImage(img)"
      >
    </div>
    <div class="article-content" v-html="article.detailText" />
  </article>
</template>

<script>
export default {
  name: 'DetailPage',

  async asyncData ({ $axios, params, error }) {
    try {
      const article = await $axios.$get(`/articles/${params.id}`)
      return { article }
    } catch (e) {
      return error({ statusCode: 404, message: 'Article not found!' })
    }
  },
  methods: {
    onChangeImage (src) {
      this.article.detailImage = src
    }
  }
}
</script>

<style scoped lang="sass">
.images
  padding-top: 10px
  display: flex
  margin-bottom: 20px
  .article-img-preview
    margin-right: 10px
    object-fit: cover
    width: 24.3%
    height: 100px
    cursor: pointer
    border: 2px solid transparent
    &:last-child
      margin-right: 0
    &.active
      border: 2px solid red
.article-img
  margin-bottom: 10px
  width: 100%
  height: 300px
  object-fit: cover
</style>

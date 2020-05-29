<template>
  <form @submit.prevent="onSearch">
    <input v-model="q" type="search" class="form-control" placeholder="Type to search...">
  </form>
</template>

<script>
  export default {
    name: 'ArticlesSearch',
    data: () => ({
      q: ''
    }),
    methods: {
      onSearch () {
        this.$nuxt.$router.push({
          name: 'articles',
          query: { q: this.q }
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  form
    margin-left: auto
    min-width: 350px

</style>

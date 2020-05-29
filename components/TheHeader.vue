<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <nuxt-link class="navbar-brand" :to="{ name: 'home' }">
        Articles App
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"/>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'home' }" exact exact-active-class="active">
              Home <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'articles' }" exact exact-active-class="active">
              Articles
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'article-add' }" exact exact-active-class="active">
              Create new article
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'about' }" exact exact-active-class="active">
              About
            </nuxt-link>
          </li>
        </ul>
        <articles-search/>
        <div class="ml-auto">
          <a href="#" class="btn btn-outline-success" @click.prevent="onLogin">Login</a>
          <a href="#" class="btn btn-outline-primary">Register</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import LoginModal from './LoginModal'
  import ArticlesSearch from './ArticlesSearch'

  export default {
    name: 'TheHeader',
    components: { ArticlesSearch },
    methods: {
      onLogin () {
        this.$modal.show(LoginModal, {
          header: 'This text is passed as a property'
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>

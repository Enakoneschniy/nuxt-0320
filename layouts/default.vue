<template>
  <div>
    <modals-container/>
    <TheHeader />
    <div class="container mt-100">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <hr>
      <nuxt />
    </div>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader'
export default {
  components: { TheHeader }
}
</script>
<style scoped lang="sass">
  .mt-100
    margin-top: 80px
</style>

<template>
  <Navbar/>
  <div id="app-container">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'app'  ,
    components: {
      Navbar
    }
  }
</script>

<style>
  @import './assets/css/style.css';
</style>

<template>
  <Navbar/>
  <div id="app-container">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'app'  ,
    components: {
      Navbar,
      Footer
    },
    beforeCreate: function(){
      this.$store.dispatch('authenticate');
    }
  }
</script>

<style>
  @import './assets/css/style.css';
</style>

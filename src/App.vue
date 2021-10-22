<template>
  <div id="app">
    <navbar/>
    <div id="app-container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import navbar from '@/components/navbar.vue'
  import Footer from '@/components/footer.vue'

  export default{
    name: 'mevn-app',
    components:{
      navbar,
      Footer
    }
  }
</script>

<style>
  @import './assets/css/style.css';
  @import '~bootstrap/dist/css/bootstrap.css';
</style>
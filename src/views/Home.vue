<template>
  <div id="custom-home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  beforeEnter: (to, from, next) => {
    // ...
    // Get data from server
    // http.get(IsLoggedIn);
    next();
  }
}
</script>

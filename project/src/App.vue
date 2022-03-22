<template>
  <div id="nav">
    <!-- 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style>


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import navbar from "./components/navbar.vue"
export default {
  components:{
    navbar
  }
}
</script>

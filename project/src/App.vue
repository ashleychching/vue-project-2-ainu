<template>
  <div id="nav">
    <!-- 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style>
html, body{
 margin: 0;
 padding: 0;
 overflow-x: hidden;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>


export default {
  components:{
    
   
  }
}
</script>

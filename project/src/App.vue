<template>
  <div>
    <div id="nav">
      <p>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </p>
    </div>
    <router-view />
  </div>
</template>
<script>
import "@/assets/main.css";
export default {};
</script>

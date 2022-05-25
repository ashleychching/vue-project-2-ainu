<template>
  <nav>
    <ul>
      <li><img class="logo" src="../assets/logo.svg" alt="" /></li>
      <li><input 
      class="search" 
      type="text" 
      placeholder="Search.." 
      v-model="searchText"/></li>
      <li><img class="bookmark" src="../assets/bookmark.svg" alt="" /></li>
      <li><router-link to="/post">Post!</router-link></li>
      <li><button @click="$store.dispatch('logout')">Logout</button></li>
    </ul>
  </nav>
</template>
<style>
nav {
  margin: 3rem;
}
ul {
  display: block;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  height: 5rem;
}
.search {
  color: rgb(13, 77, 13);
  background-color: white;
  height: 4rem;
  width: 20rem;
}
.bookmark,
.logo {
  height: 5rem;
}
</style>

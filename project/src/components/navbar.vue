<template>
  <nav>
    <ul>
      <div class="navgroupings">
        <li>
          <router-link to="/Home"><img src="../assets/Logo.png" alt="" /></router-link>
        </li>
        <!-- <li>
          <input
            class="search"
            type="text"
            placeholder="Search.."
            v-model="searchText"
          />
        </li> -->
      </div>
      <div class="navgroupings">
        <li class="extbtn">
          <button class="navbtn">
            <router-link to="/post" class="postbtn">Create</router-link>
          </button>
        </li>
        <li class="extbtn">
          <button @click="$store.dispatch('logout')" class="navbtn">
            Logout
          </button>
        </li>
      </div>
    </ul>
  </nav>
</template>
<style scoped>
img {
  height: 4rem;
  margin-right: 1rem;
}
nav {
  margin: 3rem;
}
ul {
  display: flex;
  justify-content: center;
  text-decoration: none;
  height: 5rem;
}
/* .search {
  color: #000;
  background-color: white;
  height: 4rem;
  width: 20rem;
} */
.postbtn {
  font-size: 2rem;
  text-decoration: none;
}
.navbtn {
  font-size: 2rem;
  padding: 0.5rem;
}
.logo {
  font-size: 2rem;
}
li {
  margin-left: 5%;
  margin-right: 5%;
}
.navgroupings {
  display: flex;
  margin-right: 40%;
  margin-left: 40%;
}
</style>

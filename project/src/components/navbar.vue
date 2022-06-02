<template>
  <nav>
    <ul>
      <div class="navgroupings">
        <li>
          <router-link to="/"
            ><img src="../assets/Logo.png" alt="kishu logo"
          /></router-link>
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
  color: black;
}
.navbtn {
  font-size: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #9f90cf;
  border-radius: 0.8rem;
  color: black;
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

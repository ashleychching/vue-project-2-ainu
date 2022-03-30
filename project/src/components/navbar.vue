<template>
  <nav>
    <div>
      <router-link to="/"><img src="../assets/logo.svg" alt="" /></router-link>
    </div>
    <div>
      <input type="text" placeholder="Search.." />
    </div>
    <div>
      <router-link to="/"><img src="../assets/bookmark.svg" alt="" /></router-link>
    </div>
    <div>
      <button>Logout</button>
    </div>

    <div>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </nav>
</template>

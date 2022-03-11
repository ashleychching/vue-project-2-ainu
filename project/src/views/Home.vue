<template>
  
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
  </form>

</template>

<script>


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

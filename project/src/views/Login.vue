<template>
  <main class="login">
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch("login", login_form.value);
    };
    return {
      login_form,
      login,
    };
  },
};
</script>

<style>
label,
input,
button {
  height: 10rem;
  width: 30rem;
  font-size: 2rem;
}
.login {
  padding: 5rem;
}
</style>

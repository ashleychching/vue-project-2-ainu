<template>
  <div class="wtfman">
    <main class="login">
      <section class="forms">
        <form class="login" @submit.prevent="login">
          <h1>Welcome back!</h1>
           <label for="email">email:</label>
          <input
          label="email"
          id="email"
            type="email"
            placeholder="Email address"
            v-model="login_form.email"
            class="email-box"
          />
         <label for="password">password:</label>
          <input
          class="password"
          label="password"
          id="password"
            type="password"
            placeholder="Password"
            v-model="login_form.password"
          />
          <input type="submit" value="Login" class="Loginsub" />
        </form>
      </section>
    </main>
  </div>
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

<style scoped>
.wtfman {
  display: flex;
  justify-content: center;
  
}
h1{
   font-family: "Sora";
  font-weight: 500;
  font-size: 2.4rem;
}
h2 {
  font-family: "Sora";
  font-weight: 500;
  font-size: 2.4rem;
}
input,
button {
  height: 6rem;
  width: 20vw;
  font-size: 2rem;
  border-radius: 1rem;
}
label,.password{
  margin: auto;
  margin: 1rem;
}

input {
  padding: 1rem;
}

.login {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.forms {
  margin-top: 20%;
  display: flex;
  justify-content: center;
}

.email-box {
  margin-top: 2.1rem;
  margin-bottom: 1rem;
}

.Loginsub {
  margin-top: 1rem;
  background: var(--signcolor);
  color: #fff;
  border-radius: 1rem;
  border-style: none;
}
</style>

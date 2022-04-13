<template>
  <div class="wtfmao">
    <main class="register">
      <section class="forms">
        <form class="login" @submit.prevent="register">
          <h2>Register</h2>
          <input
            type="email"
            placeholder="Email address"
            v-model="register_form.email"
            class="email-box"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="register_form.password"
          />
          <input type="submit" value="Register" class="Loginsub" />
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
    const register_form = ref({});
    const store = useStore();
    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return {
      register_form,
      register,
    };
  },
};
</script>

<style scoped>
h2 {
  font-family: "Sora";
  font-weight: 500;
  font-size: 2.4rem;
}
label,
input,
button {
  height: 6rem;
  width: 65vw;
  font-size: 2rem;
}

.register {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.forms {
  margin-top: 20%;
  display: flex;
  justify-content: center;
}

.email-box {
  margin-top: 1rem;
}

.Loginsub {
  margin-top: 1rem;
  background: var(--signcolor);
  color: #fff;
  border-radius: 1.3rem;
  border-style: none;
}
.wtfmao {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="wtfman">
    <main class="login">
      <section class="forms">
        <form class="login" @submit.prevent="login">
          <h2>Welcome back!</h2>
          <input
            type="email"
            placeholder="Email address"
            v-model="login_form.email"
            class="email-box"
          />
          <input
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
import {db} from "../firebase/index" 
import { doc, getDoc } from "firebase/firestore";
export default {
  setup() {
    const login_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch("login", login_form.value);
      async function test(){
const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
        }
        test()
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
  border-radius: 1.3rem;
  border-style: none;
}
</style>

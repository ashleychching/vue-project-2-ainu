<template>
  <nav>
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="nav-logo"
    >
      <rect
        y="12.5"
        width="17.6777"
        height="17.6777"
        transform="rotate(-45 0 12.5)"
        fill="#9F90CF"
      />
    </svg>
    <h1>kishu</h1>
    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span class="logged-identifier">Logged in as {{ user.email }}</span>
        <button @click="handleClick">Log out</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Log in</router-link>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const handleClick = () => {
      store.dispatch("logout");
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
};
</script>
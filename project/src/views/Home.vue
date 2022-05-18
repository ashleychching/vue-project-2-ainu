<template>
  <div class="home">
    <span v-if="!user">
      To upload posts,
      <router-link to="/login">login</router-link>
      or
      <router-link to="/signup">create an account</router-link>
      .</span
    >
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.body }}</p>
        <div class="icons">
          <span class="material-icons">thumb_up</span>
          <span class="material-icons thumbs-down">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const blogs = ref([
      {
        title: "Why Coffee is Better than Tea",
        body: "I think you should AHHHHHHHHHHHHHHHHHH",
        id: 1,
      },
      {
        title: "...Then I Took an Arrow in the Knee",
        body: "I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.",
        id: 2,
      },
      {
        title: "Mario vs Luigi, Ultimate Showdown",
        body: "bad things are about to happen",
        id: 3,
      },
    ]);

    const store = useStore();

    console.log(store.state.user);

    return {
      blogs,
      user: computed(() => store.state.user),
    };
  },
};
</script>

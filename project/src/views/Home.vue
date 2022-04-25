<template>
  <div class="home">
    <navbar></navbar>
    <h3>Upload post</h3>
    <v-text-field
      name="imageUrl"
      label="image URL"
      id="image-url"
      v-model="imageUrl"
      required
    ></v-text-field>
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h2>{{ blog.title }}</h2>
        <p>ufjksahjdskha fdsklaj jfdsklan jakf oa skee</p>
        <div class="icons">
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import navbar from "../components/navbar.vue";
export default {
  components: { navbar },
  name: "home",
  setup() {
    const blogs = ref([
      { title: "Why Coffee is Better than Tea", id: 1 },
      { title: "...Then I Took an Arrow in the Knee", id: 2 },
      { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);
    return {
      blogs,
    };
  },
};
</script>

<style>
body {
  background-color: orange;
  font-size: 80rem;
}
</style>

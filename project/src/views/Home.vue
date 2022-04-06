<template>
  <div class="home">
    <h1>huhdfjlkdslkj</h1>
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
export default {
  name: "home",
  setup() {
    const blogs = ref([
      { title: "Why Coffee is Better than Tea", id: 1 },
      { title: "...Then I Took an Arrow in the Knee", id: 2 },
      { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);
    return {
      blogs,
    }
  }
};
</script>

<style>
body{
  background-color: orange;
  font-size: 80rem;

}
</style>

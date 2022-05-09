<template>
  <div class="home">
    <navbar></navbar>
    <h3>Upload post</h3>

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
  return: {
    image: null,
    imageUrl: "",
  },
  methods: {
    onPickFile() {
      this.uppics.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.image = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
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

<style></style>

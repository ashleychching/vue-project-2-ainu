<template>
  <div class="home">
    <navbar></navbar>
    <h3>Upload post</h3>
    <input type="file" 
    class="uppics" 
    @click="onPickFile" 
    accept="image/*"
    @change="onFilePicked"/>
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
  methods:{
    onPickFile(){
      this.uppics.click()
    },
   /*  onFilePicked(event){
      const files= event.target.files
      let filename= file[0].filename
      if file
      
    } */
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

<style>
.uppics {
  font-size: 3rem;
}
</style>

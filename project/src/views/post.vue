<template>
  <div>
    <navbar></navbar>
    <h3>Upload post</h3>
    <form @submit.prevent="onCreatePost" >
      <label for="name">Name of Animal:</label>
      <input
        name="name"
        label="Name"
        id="name"
        v-model="name"
        required
      />
      <label for="age">Age:</label>
      <input
        name="age" 
        label="Age"
        id="age"
        v-model="age"
        required
      />
      <label for="location">Located in:</label>
       <input
        name="location"
        label="Location"
        id="location"
        v-model="location"
        required
      />
      <label for="description">Description:</label>
       <input
        name="description"
        label="Description"
        id="description"
        v-model="description"
        required
      />
      <label for="image">Image:</label>
        <input type="file" 
    class="uppics" 
    @click="onPickFile" 
    accept="image/*"
    @change="onFilePicked"/>
    <img :src="imageURL" height="150">
      <input type="submit" value="Submit" />
  
    </form>
  
  </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import {db} from "../firebase/index"
export default {
  name: "post",
 components:{
   navbar
 },
    data(){
        return{
            name:'',
            age: '',
            location:'',
            description:'',

        }
    },
    methods: {
      onCreatePost () {
    
        console.log(this.name)
        const postData = {
          name: this.name,
          age: this.age,
          location: this.location,
          description: this.description,
         
        }
        this.$emit('post-submitted', postData)
        this.name=''
        this.age=''
        this.location=''
        this.description=''
       /*  this.$store.dispatch('createPost', postData)
        this.$router.push('/posts')} */
        }
}}
</script>

<style>
form{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10rem;
}
</style>

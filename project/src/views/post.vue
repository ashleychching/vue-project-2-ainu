<template>
  <div>
    <form @submit.prevent="onCreatePost" >
      <label for="fname">Name of Animal:</label><br />
      <input
        name="name"
        label="Name"
        id="name"
        v-model="name"
        required
      /><br />
      <label for="age">Age:</label><br />
      <input
        name="age" 
        label="Age"
        id="age"
        v-model="age"
        required
      /><br />
      <label for="location">Located in:</label><br />
       <input
        name="location"
        label="Location"
        id="location"
        v-model="location"
        required
      /><br />
      <label for="description">Description:</label><br />
       <input
        name="description"
        label="Description"
        id="description"
        v-model="description"
        required
      /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            age: '',
            location:'',
            description:'',

        }
    },
    computed: {
      formIsValid () {
        return this.name !== '' &&
          this.age !== '' &&
          this.location !== '' &&
          this.description !== ''
      },
    methods: {
      onCreatePost () {
        if (!this.formIsValid) {
          return
        }
        const postData = {
          name: this.name,
          age: this.age,
          location: this.location,
          description: this.description,
         
        }
        this.$store.dispatch('createPost', postData)
        this.$router.push('/posts')}
        }
}}
</script>

<style></style>

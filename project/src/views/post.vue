<template>
  <div>
    <form @submit.prevent="onCreateMeetup" action="/action_page.php">
      <label for="fname">Name of Animal:</label><br />
      <input
        name="name"
        label="Name"
        id="name"
        v-model="name"
        required
      /><br />
      <label for="lname">Age:</label><br />
      <input
        name="age" 
        label="Age"
        id="age"
        v-model="age"
        required
      /><br />
      <label for="lname">Located in:</label><br />
       <input
        name="location"
        label="Location"
        id="location"
        v-model="location"
        required
      /><br />
      <label for="lname">Description:</label><br />
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
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }}}
}}
</script>

<style></style>

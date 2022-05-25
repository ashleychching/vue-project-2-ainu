<template>
   <div class="card">
        <img v-bind:src="image" alt="">
        <h1 class="card-name">{{name}}</h1>
        <p class="card-age">{{age}}</p>
        <div class="card-line">
            <h3 class="card-location">{{location}}</h3>
            <h3 class="card-description">{{description}}</h3>
<Button @click="$emit('addItemToCart')" > save </Button>
        </div>
   </div>
</template>

<script>
    export default {
        name:"card", 
    props:{
       name:String,
       age:String,
       location: String,
       description: String,
   },
    }
</script>

<style>

</style>
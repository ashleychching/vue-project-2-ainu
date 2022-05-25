<template>
<div>
<div class="home">
    <navbar></navbar>
    <h3>Upload post</h3>
    <input type="file" 
    class="uppics" 
    @click="onPickFile" 
    accept="image/*"
    @change="onFilePicked"/>
    <img :src="imageURL" height="150">
  </div>
<div>
  <ul class="listy">
<li
v-for= "animal in animals"
:key="animal.id"
>
{{animal.name}}
</li>
  </ul>
</div>
</div>
  
</template>

<script>
import animalsColRef from "../firebase";
import { getDocs} from "firebase/firestore";
import { ref } from "vue";
import navbar from "../components/navbar.vue";
/*  import card from "../components/card.vue";  */
/* import {db} from "../firebase/index" */
export default {
  components: { navbar,/* card */ },
  name: "home",
  return:{
    image:null,
    imageUrl:'', 
    animals:[],

  },
  methods:{
   /*  mounted(){
      console.log('hello')
    }, */
       mounted(){
      console.log("hi")
  async function fetchAnimals(){
      let animalsSnapshot= await getDocs(animalsColRef);
      let animals= [];
      animalsSnapshot.forEach((animal)=>{
        let animalData=animal.data();
        animalData.id= animal.id;
        animals.push(animalData);
      })
      console.log(animals);
      this.animals=animals;
    }
    fetchAnimals()
    }, 
    onPickFile(){
      this.uppics.click()
    },
     onFilePicked(event){
      const files= event.target.files
      let filename= files[0].name
      if (filename.lastIndexOf('.')<= 0){
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=> {
        this.image= fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    } ,
 
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
form{
  font-size: 3rem;
}
</style>

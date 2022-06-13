<template>
  <div>
    <navbar></navbar>
    <div class="biggerContain">
      <h1>KISHU</h1>
      <h2>adopt today</h2>
    </div>
    <div class="bigcontain">
      <ul class="listy">
        <div v-for="animal in animals" :key="animal.id" class="thing-in-listy">
          <div>
            <img class="eachImage" v-bind:src="animal.image" alt="" />
            <div class="eachImage-description">
              <h3>{{ animal.name }}</h3>
              <p>{{ animal.age }}</p>
              <p>{{ animal.location }}</p>
              <p>{{ animal.description }}</p>
              <button @click="deletePost(animal.id)">delete</button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import animalsColRef from "../firebase";
/* import { db } from "../firebase/index"; */
import { getDocs,  doc, deleteDoc } from "firebase/firestore";
//import { ref } from "vue";
import navbar from "../components/navbar.vue";
/*  import card from "../components/card.vue";  */
/*  import {db, doc, deleteDoc} from "../firebase/index"  */
export default {
  components: { navbar /* card */ },
  name: "home",
  data() {
    return {
      image: "",
      imageUrl: "",
      animals: null,
      animal:"",
      selectedDoc:null,
    };
  },

  created() {
    console.log("hi");
    this.fetchAnimals();
  },

  methods: {
    async fetchAnimals() {
      let animalsSnapshot = await getDocs(animalsColRef);
      let animals = [];
      animalsSnapshot.forEach((animal) => {
        let animalData = animal.data();
        animalData.id = animal.id;
        animals.push(animalData);
      });
      this.animals = animals;
      console.log(animals);
    },
    async deletePost(animalid){
      console.log(animalid);
      let animalRef= doc(animalsColRef, animalid);
await deleteDoc(animalRef);
alert ('animal deleted sucessfully')
    }}}
/*   deletePost(animal) {
  console.log(animal);
  db.collection("animals").doc(animal.id).delete()
}}} */
/* setup() {
    const animals = null;
    const blogs = ref([
      { title: "Why Coffee is Better than Tea", id: 1 },
      { title: "...Then I Took an Arrow in the Knee", id: 2 },
      { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);
    return {
      blogs, animals
    };
  }, */
</script>

<style>
h3 {
  margin-bottom: 1rem;
}
.biggerContain {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 11%;
}
.bigcontain {
  display: flex;
  justify-content: center;
}
.uppics {
  font-size: 1rem;
}
form {
  font-size: 3rem;
}
.listy {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  margin-left: 4rem;
  margin-right: 4rem;
  justify-content: center;
}
.thing-in-listy {
  margin: 2rem;
  width: 44rem;
  height: 60rem;
  border: solid rgb(226, 123, 226);
  border-radius: 1rem;
  padding: 2rem;
}

h3 {
  font-size: 2rem;
}
.eachImage {
  width: 40rem;
}
button {
  font-size: 5rem;
}
</style>

<template>
  <div>
    <navbar></navbar>
    <div class="bigcontain">
      <ul class="listy">
        <div v-for="animal in animals" :key="animal.id" class="thing-in-listy">
          <div>
            <p>name: {{ animal.name }}</p>
            <p>age: {{ animal.age }}</p>
            <p>location: {{ animal.location }}</p>
            <p>description: {{ animal.description }}</p>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import animalsColRef from "../firebase";
import { getDocs } from "firebase/firestore";
//import { ref } from "vue";
import navbar from "../components/navbar.vue";
/*  import card from "../components/card.vue";  */
/*  import {db, doc, deleteDoc} from "../firebase/index"  */
export default {
  components: { navbar,  /* card */ },
  name: "home",
  data() {
    return {
      image: null,
      imageUrl: "",
      animals: null,
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

  }}
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

<style scoped>
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
  display: flex;
  flex-flow: row wrap;
  margin-left: 2rem;
  margin-right: 2rem;
}
.thing-in-listy {
  margin: 2rem;
  width: 32rem;
  height: 32rem;
  border: dashed red;
}

</style>

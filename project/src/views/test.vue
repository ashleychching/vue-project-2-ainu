<template>
  <div></div>
</template>

<script>
import { db } from "../firebase/index";
/* import { doc, getDoc } from "firebase/firestore"; */
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "post",
  components: {},
  data() {
    return {};
  },
  mounted() {
    /*    async function test(){
const docRef = doc(db, "animals", "2");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
        }
        test() */
    async function add() {
      const docRef = await addDoc(collection(db, "animals"), {
        name: "Tokyo",
        age: "9",
      });
      console.log("Document written with ID: ", docRef.id);
    }
    add();
  },
  methods: {
    /*  test(){}, */
    add() {},
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10rem;
}
</style>

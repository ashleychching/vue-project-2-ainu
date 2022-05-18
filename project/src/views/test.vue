<template>
  <div>
    
  
  </div>
</template>

<script>
import {db} from "../firebase/index" 
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "post",
 components:{
  
 },
    data(){
        return{
           

        }
    },
    mounted(){
        async function test(){
const docRef = doc(db, "animals", "2");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
        }
        test()

    },
    methods: {
      test(){},
     
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

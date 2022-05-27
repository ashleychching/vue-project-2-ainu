<template>
  <div>
    <navbar></navbar>
    <div class="pg">
      <h3>Upload post</h3>
      <form @submit.prevent="onCreatePost">
        <label for="name">Name of Animal:</label>
        <input name="name" label="Name" id="name" v-model="name" required />
        <label for="age">Age:</label>
        <input name="age" label="Age" id="age" v-model="age" required />
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
          class="lastbutton"
        />
        <label for="image">Image:</label>
        <input
          type="file"
          class="uppics"
          accept="image/*"
          @change="uploadImage"
        />
        <input type="submit" value="Submit" class="submitbtn" />
      </form>
    </div>
    <ul id="animalList"></ul>
            <img :src="getDaImg" class="img" :key="img"/>
  </div>
  
</template>

<script>
import navbar from "../components/navbar.vue";
import { db } from "../firebase/index";
import {
  getStorage,
  ref,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
/* import {db} from "../firebase/index" 
import { collection, addDoc } from "firebase/firestore";  */
export default {
  name: "post",
  components: {
    navbar,
  },
  data() {
    return {
      name: "",
      age: "",
      location: "",
      description: "",
      animal: {},
      image: [],
      img: null,
      
    };
  },
  methods: {
    onCreatePost() {
      let name = this.name;
      let age = this.age;
      let location = this.location;
      let description = this.description;
      async function add() {
        console.log(name);

        const docRef = await addDoc(collection(db, "animals"), {
          name: name,
          age: age,
          location: location,
          description: description,
        });
        console.log("Document written with ID: ", docRef.id);
      }
      add();
      this.name = "";
      this.age = "";
      this.location = "";
      this.description = "";
    },
    uploadImage(e) {
      let file = e.target.files[0];
      const storage = getStorage();
      const storageRef = ref(
        storage,
        "animals/" + Math.random() + "_" + file.name
      );
      const metadata = {
        contentType: "image/jpeg",
      };
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      const message = "This the messsage";
      uploadString(storageRef, message).then((snapshot) => {
        console.log("Uploaded a raw string!", snapshot);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          this.img = downloadURL
        });
      });
    
        
    },
  },
  computed:{
    getDaImg: function(){
      return this.img;
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  width: 40%;
}
h3 {
  margin-bottom: 2rem;
}

.img {
  height: 100%;
  width: 100%;
}
.pg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lastbutton {
  margin-bottom: 2rem;
}
.submitbtn {
  height: 5rem;
  background: #4285f4;
  border-radius: 0.8rem;
  color: #fff;
}
</style>

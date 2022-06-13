<template>
  <div>
    <navbar></navbar>
    <div class="pg">
      <h1>Upload post</h1>
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
          id="image"
          class="uppics"
          accept="image/*"
          @change="uploadImage"
          required
        />
        <img :src="this.imgURL" class="img" :key="img" alt="your animal" />
        <input type="submit" value="Submit" class="submitbtn" />
      </form>
    </div>
    <ul id="animalList"></ul>
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
      image: "",
      imgURL: undefined,
      downloadURL:"",
    };
  },
  methods: {
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
        //  = URL.createObjectURL(file);
           this.imgURL = downloadURL
          console.log(this.imgURL)
        });
      });
    },

    onCreatePost() {
      let name = this.name;
      let age = this.age;
      let location = this.location;
      let description = this.description;
      let image = this.imgURL;
    
      console.log(image)
      async function add() {
        console.log(name);
        console.log(image)
        const docRef = await addDoc(collection(db, "animals"), {
          name: name,
          age: age,
          location: location,
          description: description,
          image: image,
          
        });
        
        console.log("Document written with ID: ", docRef.id);
      }
      add();
      this.name = "";
      this.age = "";
      this.location = "";
      this.description = "";
      this.image = "";
    },
    


  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  width: 40%;
}
h1{
  font-size: 5rem;
}
h3,h1 {
  margin-bottom: 2rem;
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  margin-bottom: 2rem;
  margin-top: 2rem;
  border: solid black; 
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
  background: #0B4FBC;
  border-radius: 0.8rem;
  color: #fff;
}
</style>

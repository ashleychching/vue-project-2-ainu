// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyCsjVyuZBPjUzuJTpIIzMzLVNBZDt5SjgY",
  authDomain: "ainu-7447c.firebaseapp.com",
  projectId: "ainu-7447c",
  storageBucket: "ainu-7447c.appspot.com",
  messagingSenderId: "812355874129",
  appId: "1:812355874129:web:3550e2e7031826e1823770"
};

// Initialize Firebase

initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth()

export { auth }
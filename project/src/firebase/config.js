import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuXVcWz9W2hAxXVm6wyCzwPl9cfFWFpjs",
  authDomain: "kishu-ainu-please-shut-up.firebaseapp.com",
  projectId: "kishu-ainu-please-shut-up",
  storageBucket: "kishu-ainu-please-shut-up.appspot.com",
  messagingSenderId: "1024339352524",
  appId: "1:1024339352524:web:9ccb56212bcd6ccd6e5b69",
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };

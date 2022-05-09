import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsjVyuZBPjUzuJTpIIzMzLVNBZDt5SjgY",
  authDomain: "ainu-7447c.firebaseapp.com",
  projectId: "ainu-7447c",
  storageBucket: "ainu-7447c.appspot.com",
  messagingSenderId: "812355874129",
  appId: "1:812355874129:web:3550e2e7031826e1823770",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = firebase.firestore();
db.settings({ timestampsInSnapshot: true });

export { auth };

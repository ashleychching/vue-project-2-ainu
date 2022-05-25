import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection } from "firebase/firestore";


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

const db = getFirestore(app);

const animalsColRef= collection(db,"animals")
export { auth, db}
export default animalsColRef;

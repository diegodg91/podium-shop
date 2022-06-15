// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDuM42Xs8DBvWLeCU0GaVLciaex8KeWNo",
  authDomain: "podiumshop-a0759.firebaseapp.com",
  projectId: "podiumshop-a0759",
  storageBucket: "podiumshop-a0759.appspot.com",
  messagingSenderId: "708969506528",
  appId: "1:708969506528:web:2ad4826988d9eed8a39285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
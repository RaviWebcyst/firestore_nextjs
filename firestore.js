import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVxicz6h58SrorF8f2sCBTbFIi_u9XzLc",
  authDomain: "attendence-fa3ef.firebaseapp.com",
  databaseURL: "https://attendence-fa3ef-default-rtdb.firebaseio.com",
  projectId: "attendence-fa3ef",
  storageBucket: "attendence-fa3ef.firebasestorage.app",
  messagingSenderId: "795688416635",
  appId: "1:795688416635:web:aa62236c6deab6a850b9de",
  measurementId: "G-47D2W7D4PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
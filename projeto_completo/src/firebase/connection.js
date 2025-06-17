import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADWWZGPqcFubIEglwz0uPUj6PTMSHCzjA",
  authDomain: "applogin-20796.firebaseapp.com",
  projectId: "applogin-20796",
  storageBucket: "applogin-20796.appspot.com",
  messagingSenderId: "849894558217",
  appId: "1:849894558217:web:5de2be0b7d59f89d1386d8",
  measurementId: "G-P54RJZW0X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, app };
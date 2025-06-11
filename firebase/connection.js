import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8Gh83E0zsdZDlsTA7gTjIZZgKOXO0oaU",
  authDomain: "projetotarde1-ee029.firebaseapp.com",
  projectId: "projetotarde1-ee029",
  storageBucket: "projetotarde1-ee029.firebasestorage.app",
  messagingSenderId: "110924995798",
  appId: "1:110924995798:web:d283348af2ef54b344fd77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, app };
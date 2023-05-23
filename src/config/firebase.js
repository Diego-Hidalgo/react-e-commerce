// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMqpUKgbMqwLXm4SmYa9y8EGyEO1h2gkI",
  authDomain: "e-library-c52de.firebaseapp.com",
  projectId: "e-library-c52de",
  storageBucket: "e-library-c52de.appspot.com",
  messagingSenderId: "336036361645",
  appId: "1:336036361645:web:06b2aaf96a5ec4aaee1d24",
  measurementId: "G-2KTS32PLDF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
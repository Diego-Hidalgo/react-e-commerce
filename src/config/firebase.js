// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxVwkdofga5BXsQVbSR_C9DmImovMNLiw",
  authDomain: "alexandria-lib-958cb.firebaseapp.com",
  projectId: "alexandria-lib-958cb",
  storageBucket: "alexandria-lib-958cb.appspot.com",
  messagingSenderId: "796619528892",
  appId: "1:796619528892:web:099508075da11bf9708eb9",
  measurementId: "G-QQZ0CHCLRH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
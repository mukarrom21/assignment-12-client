// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM40KszKSz5bnevK4UFdr8b4rcKM6IDGc",
  authDomain: "mmh-assignment-12.firebaseapp.com",
  projectId: "mmh-assignment-12",
  storageBucket: "mmh-assignment-12.appspot.com",
  messagingSenderId: "1040883496783",
  appId: "1:1040883496783:web:820b8c4b35966788de373a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

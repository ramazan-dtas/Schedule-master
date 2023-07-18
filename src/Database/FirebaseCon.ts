// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwYUG8bC6Uo39h0KvhOEJbdgHGnzHYzdg",
  authDomain: "skolesystem.firebaseapp.com",
  projectId: "skolesystem",
  storageBucket: "skolesystem.appspot.com",
  messagingSenderId: "603097306672",
  appId: "1:603097306672:web:db23d0bb9f95c8cdae7ff5",
  measurementId: "G-XTLK9EWBQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
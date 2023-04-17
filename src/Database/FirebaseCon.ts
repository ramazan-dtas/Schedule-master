// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const RealTimeCon = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAHCaD7jUcFzGT3vSLdjYXbSoxEU_z1kcA",
    authDomain: "svendeprove-485c4.firebaseapp.com",
    databaseURL: "https://svendeprove-485c4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "svendeprove-485c4",
    storageBucket: "svendeprove-485c4.appspot.com",
    messagingSenderId: "738301854908",
    appId: "1:738301854908:web:38b755f9b45104cef93cb9",
    measurementId: "G-BN8LR7X5BW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const newSchema = {};
  
  
  const db = getDatabase(app);
  const schemaRef = ref(db, "schema");
  set(schemaRef, newSchema);
  
  const hest = initializeApp(firebaseConfig);
  console.log(hest);

};
export default RealTimeCon;
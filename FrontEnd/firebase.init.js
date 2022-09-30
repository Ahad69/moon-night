// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMNtTxLZccq3KJo9c1f0wMtPaf3eZZ0MA",
  authDomain: "test-5a4bb.firebaseapp.com",
  projectId: "test-5a4bb",
  storageBucket: "test-5a4bb.appspot.com",
  messagingSenderId: "200919423698",
  appId: "1:200919423698:web:70de4a641b1b6898d62b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

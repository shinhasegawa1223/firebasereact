// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa7DJdWz5L9h_7hm0xHc5re3l05oQEPTw",
  authDomain: "blog-e3865.firebaseapp.com",
  projectId: "blog-e3865",
  storageBucket: "blog-e3865.appspot.com",
  messagingSenderId: "807916337597",
  appId: "1:807916337597:web:28639d0298cd355943fad4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

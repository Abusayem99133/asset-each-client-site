// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwI-jTgSlL2ZJQh0xFkFqkL3QFjnyrwKE",
  authDomain: "asset-each.firebaseapp.com",
  projectId: "asset-each",
  storageBucket: "asset-each.appspot.com",
  messagingSenderId: "486172299095",
  appId: "1:486172299095:web:f30db0a99678b5dfd83812",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

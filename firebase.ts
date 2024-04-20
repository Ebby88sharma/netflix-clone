// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHtTEv8-qmW9HMvTwdNRuf7WwnSszsbQ",
  authDomain: "netflix-clone-79d45.firebaseapp.com",
  projectId: "netflix-clone-79d45",
  storageBucket: "netflix-clone-79d45.appspot.com",
  messagingSenderId: "266298172484",
  appId: "1:266298172484:web:be9d28e25ad42a2f260811",
  measurementId: "G-4XR000ZE45"
};

// Initialize Firebasedfssdfs
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
export default app;
export { auth, db };

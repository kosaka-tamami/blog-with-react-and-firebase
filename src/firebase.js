import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCJ5hE6L6ayydLj3-ED8x8E959ql2PNuo",
  authDomain: "blog-c5b05.firebaseapp.com",
  projectId: "blog-c5b05",
  storageBucket: "blog-c5b05.appspot.com",
  messagingSenderId: "116896323123",
  appId: "1:116896323123:web:d8928d4e4e15a01cebb546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const db = getFirestore (app);

export { auth, provider, db }
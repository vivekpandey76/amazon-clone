import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDA7DFqdyOshX7UOClw4F5eYrX-tUXJU6Y",
  authDomain: "ecommerce-website-3e31f.firebaseapp.com",
  projectId: "ecommerce-website-3e31f",
  storageBucket: "ecommerce-website-3e31f.appspot.com",
  messagingSenderId: "803780800918",
  appId: "1:803780800918:web:be8a0548c2f0359e41edb7",
  measurementId: "G-Y3984F590G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

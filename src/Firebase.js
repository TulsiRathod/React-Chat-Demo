// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxEW2n-rtisXieGl2zNZWZIzkNCSzafDA",
  authDomain: "chat-demo-52b2a.firebaseapp.com",
  projectId: "chat-demo-52b2a",
  storageBucket: "chat-demo-52b2a.appspot.com",
  messagingSenderId: "618733153414",
  appId: "1:618733153414:web:6cfc82a399b96f1d52f507",
  measurementId: "G-JP42QRMFBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQaxT-PmuTzMxuSq7pRoPe1g7WjZHossk",
  authDomain: "g-task-firebase.firebaseapp.com",
  projectId: "g-task-firebase",
  storageBucket: "g-task-firebase.appspot.com",
  messagingSenderId: "322343847099",
  appId: "1:322343847099:web:dfff54638858257f52159e",
  measurementId: "G-1QWGM4ZVZG"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
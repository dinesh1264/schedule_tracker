// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwiFpo5RRR1NRibfLi-MrrWjvGGfShIyM",
  authDomain: "schedule-tracker-9534a.firebaseapp.com",
  projectId: "schedule-tracker-9534a",
  storageBucket: "schedule-tracker-9534a.firebasestorage.app",
  messagingSenderId: "292313150399",
  appId: "1:292313150399:web:750c0bf9f1b1cea183e70a",
  measurementId: "G-GZJ5NGPBGD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1VOC9WiBAVsdfggooQO8Sw0EuKsrZOTQ",
  authDomain: "online-shop-17043.firebaseapp.com",
  projectId: "online-shop-17043",
  storageBucket: "online-shop-17043.appspot.com",
  messagingSenderId: "690779151180",
  appId: "1:690779151180:web:5a9f7bbfb704a220728de9",
  measurementId: "G-G50P6SK2VE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

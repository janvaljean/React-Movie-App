import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcG7EJ4CN0t-I-crITT1Lq_mRgRxknIE4",
  authDomain: "movie-app-e207c.firebaseapp.com",
  projectId: "movie-app-e207c",
  storageBucket: "movie-app-e207c.appspot.com",
  messagingSenderId: "762157063441",
  appId: "1:762157063441:web:5dd2a6bfef32c361afc0b0",
  measurementId: "G-9XNF30L17D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
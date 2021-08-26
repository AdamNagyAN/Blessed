import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDwqo4KTXTzZ1w_4P2bNiRABF4OTsnMnV8",
    authDomain: "blessed-webshop.firebaseapp.com",
    projectId: "blessed-webshop",
    storageBucket: "blessed-webshop.appspot.com",
    messagingSenderId: "710753828104",
    appId: "1:710753828104:web:e3d9b14c3bfbc12d0580bd",
    measurementId: "G-577P7R6DJR"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

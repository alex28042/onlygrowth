import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyAENGIgm07BbFbEbGyv6m9ewYzUD4giq1w",
  authDomain: "onlygrowth-10c90.firebaseapp.com",
  projectId: "onlygrowth-10c90",
  storageBucket: "onlygrowth-10c90.appspot.com",
  messagingSenderId: "666600226913",
  appId: "1:666600226913:web:39358cf9781806832d6a20",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore;

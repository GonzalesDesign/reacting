import firebase from "firebase";
// import * as firebase from 'firebase';
// import firebase from 'firebase/database';
// import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
 
	apiKey: "AIzaSyDm3drMZFpf4gKWaydRF8Dc9x1wASRToSY",
	authDomain: "ideas-512f9.firebaseapp.com",
	databaseURL: "https://ideas-512f9.firebaseio.com",
	projectId: "ideas-512f9",
	storageBucket: "ideas-512f9.appspot.com",
	messagingSenderId: "227183513377",
	appId: "1:227183513377:web:b256ac05f722f046"
 
});

const db = firebaseApp.firestore();

export { db };
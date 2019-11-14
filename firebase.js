import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

 var firebaseConfig = {
    apiKey: "AIzaSyAOOu0om3lCmkX17rsohKcAy1SDqdUzqGM",
    authDomain: "web-test-60708.firebaseapp.com",
    databaseURL: "https://web-test-60708.firebaseio.com",
    projectId: "web-test-60708",
    storageBucket: "web-test-60708.appspot.com",
    messagingSenderId: "270673433568",
    appId: "1:270673433568:web:82527221f076a431fcd185"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems');
  export const dbOrders = db.collection('orderItems');

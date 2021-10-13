import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZTpmlOreHBRhCqitaaXn62eDLAnTQ_jU",
  authDomain: "tenedores-2e478.firebaseapp.com",
  databaseURL: "https://tenedores-2e478.firebaseio.com",
  projectId: "tenedores-2e478",
  storageBucket: "tenedores-2e478.appspot.com",
  messagingSenderId: "455858574581",
  appId: "1:455858574581:web:74e7ebe76b3e2e3464a1bc",
  measurementId: "G-CEVZMGZVKQ"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

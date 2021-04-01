import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDBpDs5U7fcSPgYf9IIHxIRKS78sMg_G6w",
    authDomain: "bullying-app-a7645.firebaseapp.com",
    projectId: "bullying-app-a7645",
    storageBucket: "bullying-app-a7645.appspot.com",
    messagingSenderId: "313709228601",
    appId: "1:313709228601:web:45bdbe5b4bee7d56de13e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
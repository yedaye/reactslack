import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhpaMH1B5RRZToWPFNwIQl4P-c99vhWug",
    authDomain: "slackchat-c25c2.firebaseapp.com",
    projectId: "slackchat-c25c2",
    storageBucket: "slackchat-c25c2.appspot.com",
    messagingSenderId: "69634916876",
    appId: "1:69634916876:web:70c6b827b5c492fd86e429",
    measurementId: "G-84B9YV35SC"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();


export default db;
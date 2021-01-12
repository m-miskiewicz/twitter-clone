import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC15okJ2EpjQeamCRXAPhglhoxRRonifks",
    authDomain: "twitter-clone-91865.firebaseapp.com",
    projectId: "twitter-clone-91865",
    storageBucket: "twitter-clone-91865.appspot.com",
    messagingSenderId: "156570278223",
    appId: "1:156570278223:web:07f95e52cbc46ad750cd3a",
    measurementId: "G-RNWZX0CJSE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
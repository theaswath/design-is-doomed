// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZ2ZACSVny-2dpi_44e2asoY40_4I-_G8",
    authDomain: "design-is-doomed.firebaseapp.com",
    databaseURL: "https://design-is-doomed.firebaseio.com",
    projectId: "design-is-doomed",
    storageBucket: "design-is-doomed.appspot.com",
    messagingSenderId: "613802852344",
    appId: "1:613802852344:web:977ca73076528f7b84e00d",
    measurementId: "G-95G7935CZ6"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
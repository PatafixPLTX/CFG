import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmgdNV5TRXXt9kvrBWrT5hR0uw95t3Zec",
    authDomain: "cfg-login.firebaseapp.com",
    projectId: "cfg-login",
    storageBucket: "cfg-login.appspot.com",
    messagingSenderId: "913790320072",
    appId: "1:913790320072:web:155db59c60c2517f4bd4fd",
    measurementId: "G-0WQVYM2RJS"
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get }
    from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";

const db = getDatabase();
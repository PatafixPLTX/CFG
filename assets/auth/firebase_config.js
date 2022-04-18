// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmgdNV5TRXXt9kvrBWrT5hR0uw95t3Zec",
  authDomain: "cfg-login.firebaseapp.com",
  projectId: "cfg-login",
  storageBucket: "cfg-login.appspot.com",
  messagingSenderId: "913790320072",
  appId: "1:913790320072:web:155db59c60c2517f4bd4fd",
  measurementId: "G-0WQVYM2RJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, child, get }
    from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const db = getDatabase();
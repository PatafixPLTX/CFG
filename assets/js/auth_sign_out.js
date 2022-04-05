import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

// https://firebase.google.com/docs/auth/web/phone-auth?authuser=0&hl=fr
// https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0&hl=fr
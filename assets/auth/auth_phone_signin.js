// This snippet file was generated by processing the source file:
// ./auth-next/phone-auth.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_phone_signin_modular]
import { getAuth, signInWithPhoneNumber } from "/firebase/auth";

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
  }).catch((error) => {
    // Error; SMS not sent
    grecaptcha.reset(window.recaptchaWidgetId);
    // ...
    });
// [END auth_phone_signin_modular]
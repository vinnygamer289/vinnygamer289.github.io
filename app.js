import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB9H-aFKbZpLlG44T9nFvt3k5oU8P-o4nc",
  authDomain: "vinny-gamer-admin.firebaseapp.com",
  projectId: "vinny-gamer-admin",
  storageBucket: "vinny-gamer-admin.firebasestorage.app",
  messagingSenderId: "96227634471",
  appId: "1:96227634471:web:5046b7070c242dd82f8d02",
  measurementId: "G-739RH0P8P2"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

const googleSignInButton = document.getElementById('google-sign-in');

googleSignInButton.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle errors.
      console.error(error);
    });
});


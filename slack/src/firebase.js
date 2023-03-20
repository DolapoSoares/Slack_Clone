import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0ZDyqfkGpjRizikuyzg4_9LgnwjaWagU",
    authDomain: "slack-clone-c02d4.firebaseapp.com",
    projectId: "slack-clone-c02d4",
    storageBucket: "slack-clone-c02d4.appspot.com",
    messagingSenderId: "745997420275",
    appId: "1:745997420275:web:e87c6d26b52ce6b55a5986",
    measurementId: "G-BKZ5YE2Q8J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider}
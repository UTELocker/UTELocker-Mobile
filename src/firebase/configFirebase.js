// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAigZMo9tR0RSS4nUtYFr0Vs-QcX4DFl_I",
    authDomain: "ute-locker-f1a58.firebaseapp.com",
    projectId: "ute-locker-f1a58",
    storageBucket: "ute-locker-f1a58.appspot.com",
    messagingSenderId: "501122703864",
    appId: "1:501122703864:web:f852ffd2cb1e909eec360d",
    measurementId: "G-6LB1NQ7BH1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
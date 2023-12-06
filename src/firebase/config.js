// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYC-Fag9h7mJHhQLqr5woOH-QtoxnM-MU',
  authDomain: 'power-button-80828.firebaseapp.com',
  projectId: 'power-button-80828',
  storageBucket: 'power-button-80828.appspot.com',
  messagingSenderId: '965081398530',
  appId: '1:965081398530:web:5ca6e629856e8351ebd61b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

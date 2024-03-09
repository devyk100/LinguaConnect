// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlQJm2n5l1o6U_-LZ94wMr1d71BuxIOeA",
  authDomain: "linguaconnect-de366.firebaseapp.com",
  projectId: "linguaconnect-de366",
  storageBucket: "linguaconnect-de366.appspot.com",
  messagingSenderId: "33697335274",
  appId: "1:33697335274:web:aba371440fa0bd9edf5493",
  measurementId: "G-5NNK9Q9G61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


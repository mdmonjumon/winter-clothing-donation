// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZCwsPO1FqnSbayoIvHiKHVeBhev02Y4Y",
  authDomain: "winter-clothing-donation-2d550.firebaseapp.com",
  projectId: "winter-clothing-donation-2d550",
  storageBucket: "winter-clothing-donation-2d550.firebasestorage.app",
  messagingSenderId: "495599910771",
  appId: "1:495599910771:web:89532db6b1fdd5b1a2cf06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
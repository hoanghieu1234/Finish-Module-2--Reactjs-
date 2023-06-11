// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey : "AIzaSyBDnMqgSD7Q_uIEckv_JlUgtO8uagSg8Ck" , 
  authDomain : "upload-a8923.firebaseapp.com" , 
  projectId : "upload-a8923" , 
  storageBucket : "upload-a8923.appspot.com" , 
  messagingSenderId : "234425066432" , 
  appId : "1:234425066432:web:e3458b7e89898f202cde25" , 
  measurementId : "G-0P1QGYY6ZC" 
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );
// const analytics = getAnalytics ( app );
export const storage = getStorage(app);

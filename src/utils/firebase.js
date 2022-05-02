// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzRpDYd6i5lP0D3d-SwnMLqDIUDUgFzEg",
  authDomain: "payroll-manager-vuejs.firebaseapp.com",
  projectId: "payroll-manager-vuejs",
  storageBucket: "payroll-manager-vuejs.appspot.com",
  messagingSenderId: "212152652077",
  appId: "1:212152652077:web:2621b66b18e59b6c2b03a4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth }
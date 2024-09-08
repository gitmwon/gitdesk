// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCavx5hvaIhCJ2WhkqDo69frmMzL4yrhF4",
  authDomain: "gitdesk-ba37c.firebaseapp.com",
  projectId: "gitdesk-ba37c",
  storageBucket: "gitdesk-ba37c.appspot.com",
  messagingSenderId: "1009149799435",
  appId: "1:1009149799435:web:2d3fba09724653b9fc6b0e",
  measurementId: "G-X028M13WXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
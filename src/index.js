import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Firebase Functions
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsDSNzCJNpNIHvkfD7gy2WR6PoBp-CkNQ",
  authDomain: "ecommerce-react-firebase-2bf37.firebaseapp.com",
  projectId: "ecommerce-react-firebase-2bf37",
  storageBucket: "ecommerce-react-firebase-2bf37.appspot.com",
  messagingSenderId: "837567442118",
  appId: "1:837567442118:web:a29448de27571820517bc7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

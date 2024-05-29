import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8QFhMW8GiGPa1VNxpTYAfjZBlXMJgusg",
    authDomain: "proyecto-react-b96d7.firebaseapp.com",
    projectId: "proyecto-react-b96d7",
    storageBucket: "proyecto-react-b96d7.appspot.com",
    messagingSenderId: "202859736592",
    appId: "1:202859736592:web:f69d2b44a27fbc7c03e495"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

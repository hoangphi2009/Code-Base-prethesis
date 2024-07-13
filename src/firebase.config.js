// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRzayFVgygq5FkM5OZtb03qLyYSlqDxMY",
    authDomain: "onlile-job-portal.firebaseapp.com",
    projectId: "onlile-job-portal",
    storageBucket: "onlile-job-portal.appspot.com",
    messagingSenderId: "664613872402",
    appId: "1:664613872402:web:ec0e7cea8ef4f3743a09cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
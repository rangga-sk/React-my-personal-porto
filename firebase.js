// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3a9as0VNa859pVed_UhPC4uFAeUTCtWY",
  authDomain: "portofolio-personal-2025.firebaseapp.com",
  databaseURL: "https://portofolio-personal-2025-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portofolio-personal-2025",
  storageBucket: "portofolio-personal-2025.firebasestorage.app",
  messagingSenderId: "904869377740",
  appId: "1:904869377740:web:c31814d0fd3c2ad53a7469",
  measurementId: "G-D36WSWWPCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

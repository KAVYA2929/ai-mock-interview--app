import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBojYt7CU9Qbrky354kUs_FV2LHz5rH-VU",
  authDomain: "mock-shawk.firebaseapp.com",
  projectId: "mock-shawk",
  storageBucket: "mock-shawk.firebasestorage.app",
  messagingSenderId: "145971048681",
  appId: "1:145971048681:web:1d5b01ea666a2c35724078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

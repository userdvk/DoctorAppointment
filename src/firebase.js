import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5Uu7MeZNGN05qKOW_BfnPi5ayjFzhLOE",
  authDomain: "appointmentproject-51270.firebaseapp.com",
  projectId: "appointmentproject-51270",
  storageBucket: "appointmentproject-51270.firebasestorage.app",
  messagingSenderId: "700873477552",
  appId: "1:700873477552:web:07fa4ea02d5c775ed01a75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtuuAjbL9pKPw45XK8vWBPtRGqgg_PBwM",
  authDomain: "shopsphere-jz759.firebaseapp.com",
  projectId: "shopsphere-jz759",
  storageBucket: "shopsphere-jz759.firebasestorage.app",
  messagingSenderId: "70281079862",
  appId: "1:70281079862:web:930139378f04cc30033c97",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

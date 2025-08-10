import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "shopsphere-jz759",
  "appId": "1:70281079862:web:930139378f04cc30033c97",
  "storageBucket": "shopsphere-jz759.firebasestorage.app",
  "apiKey": "AIzaSyAtuuAjbL9pKPw45XK8vWBPtRGqgg_PBwM",
  "authDomain": "shopsphere-jz759.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "70281079862"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };

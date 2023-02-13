// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig =  {
  apiKey: "AIzaSyDzFs0-elh3y4cYmfY-DezuXRcGd-AToeY",
  authDomain: "virtual-academy-c9a77.firebaseapp.com",
  projectId: "virtual-academy-c9a77",
  storageBucket: "virtual-academy-c9a77.appspot.com",
  messagingSenderId: "717045795694",
  appId: "1:717045795694:web:38b92252ebf6730624cf7f"
  };


// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export {
    firebaseApp
}
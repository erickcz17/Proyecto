
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9xz1WO4Ub9krcj9qK7ZfN3yPlvzu6RDE",
  authDomain: "loginfb-78f68.firebaseapp.com",
  projectId: "loginfb-78f68",
  storageBucket: "loginfb-78f68.appspot.com",
  messagingSenderId: "188935147965",
  appId: "1:188935147965:web:2b4511cb75a58388c402d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
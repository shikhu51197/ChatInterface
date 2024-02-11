import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMsF5qn2Dd9SeeDyp1faNVmM2akSs3Np8",
  authDomain: "react-firebase-chat-4b952.firebaseapp.com",
  projectId: "react-firebase-chat-4b952",
  storageBucket: "react-firebase-chat-4b952.appspot.com",
  messagingSenderId: "898949475020",
  appId: "1:898949475020:web:fbbdf9e28d25ec2659b069"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  
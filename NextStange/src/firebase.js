
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC9FwUrnkWJjY1NEAqIjXpHS0w8hvnQ-lc",
  authDomain: "auth-next-9c206.firebaseapp.com",
  projectId: "auth-next-9c206",
  storageBucket: "auth-next-9c206.appspot.com",
  messagingSenderId: "1067813595082",
  appId: "1:1067813595082:web:fe54bd1b49f241dafd1133"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDFoWFsVPJLAk1Rh6Bp8Z-pqO5ckvdWnr8",

  authDomain: "linuxgeek.firebaseapp.com",

  projectId: "linuxgeek",

  storageBucket: "linuxgeek.appspot.com",

  messagingSenderId: "546874340887",

  appId: "1:546874340887:web:93b934595faa9f2af60e52",

  measurementId: "G-J1CD2J8KSK"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
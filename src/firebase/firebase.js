// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtysW7Ud2t4TZ2RVg8dp30r0Hhyp9f3HU",
  authDomain: "kbc-project-c8b2f.firebaseapp.com",
  databaseURL: "https://kbc-project-c8b2f-default-rtdb.firebaseio.com",
  projectId: "kbc-project-c8b2f",
  storageBucket: "kbc-project-c8b2f.appspot.com",
  messagingSenderId: "775114958342",
  appId: "1:775114958342:web:6874d562075950424bc587",
  measurementId: "G-5QE4W3V947",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

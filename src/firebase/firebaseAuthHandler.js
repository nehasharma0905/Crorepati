import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const handleSignUp = async (signUpEmail, signUpPassword) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      signUpEmail,
      signUpPassword
    );
    console.log("user", user);
  } catch (error) {
    console.log(error.message);
  }
};
export const handleSignIn = async (signInEmail, signInPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      signInEmail,
      signInPassword
    );
    console.log("user", user);
  } catch (error) {
    console.log(error.message);
  }
};
export const handleSignOut = async () => {
  await signOut(auth);
};

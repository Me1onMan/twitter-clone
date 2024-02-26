import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebaseConfig from "./config";

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const firebaseStorage = getStorage(app);

const auth = getAuth(app);

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signin = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

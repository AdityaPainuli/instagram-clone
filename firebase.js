import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjaPz3MnrD9NPM6y5LCI0W4zbleU6loJk",
  authDomain: "instagram-clone-d308c.firebaseapp.com",
  projectId: "instagram-clone-d308c",
  storageBucket: "instagram-clone-d308c.appspot.com",
  messagingSenderId: "400511964298",
  appId: "1:400511964298:web:d333d6f8404af741360973",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

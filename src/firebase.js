import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP2U31Ri4IfpHtQgNICEuuzw1_RURnaXQ",
  authDomain: "test-task-7ee38.firebaseapp.com",
  projectId: "test-task-7ee38",
  storageBucket: "test-task-7ee38.appspot.com",
  messagingSenderId: "1080351555321",
  appId: "1:1080351555321:web:ffdb0fbd6aadef3ca92c28",
  measurementId: "G-BLTX8SVQZ4",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

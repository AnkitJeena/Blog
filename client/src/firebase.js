import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bffe5.firebaseapp.com",
  projectId: "mern-blog-bffe5",
  storageBucket: "mern-blog-bffe5.appspot.com",
  messagingSenderId: "357021018026",
  appId: "1:357021018026:web:76969a6dfc5f60c95a2dd3"
};

export const app = initializeApp(firebaseConfig);
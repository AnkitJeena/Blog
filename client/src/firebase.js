import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2eb7f.firebaseapp.com",
  projectId: "mern-blog-2eb7f",
  storageBucket: "mern-blog-2eb7f.appspot.com",
  messagingSenderId: "981651736065",
  appId: "1:981651736065:web:1d820f6c5a14c6f13ee200"
};

export const app = initializeApp(firebaseConfig);
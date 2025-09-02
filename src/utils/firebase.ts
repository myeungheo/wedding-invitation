import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBT0hlGDBZbzb75VRkZAhZ3Jf5-j9eiQQ",
  authDomain: "wedding-4d03f.firebaseapp.com",
  projectId: "wedding-4d03f",
  storageBucket: "wedding-4d03f.firebasestorage.app",
  messagingSenderId: "228536049608",
  appId: "1:228536049608:web:bd84373b8bbb13435deafd"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 인스턴스
export const db = getFirestore(app);
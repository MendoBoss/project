import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkWyp2rSpm3KZ4pWZcNaoqW5WcWRiZXzc",
  authDomain: "visiondesigne-ed6cd.firebaseapp.com",
  projectId: "visiondesigne-ed6cd",
  storageBucket: "visiondesigne-ed6cd.firebasestorage.app",
  messagingSenderId: "303685066864",
  appId: "1:303685066864:web:2eb69cf06b9c9615e494b5",
  measurementId: "G-N0ZVKSBCT9"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDuTFwpsyWG3CoDPBboad95O34aDGIF6AQ",
//   authDomain: "chat-1c6c1.firebaseapp.com",
//   projectId: "chat-1c6c1",
//   storageBucket: "chat-1c6c1.firebasestorage.app",
//   messagingSenderId: "1020228036797",
//   appId: "1:1020228036797:web:01129abfd2511870c9afd4"
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
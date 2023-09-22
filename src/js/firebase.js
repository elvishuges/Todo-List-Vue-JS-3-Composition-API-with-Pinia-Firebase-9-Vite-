// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.VUE_APP_FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIRE_BASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

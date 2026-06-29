import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCQRjNqfGhJFTtfzsNPtEeL_FBlHJ7c03s",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "medweg-e232b.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://medweg-e232b-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "medweg-e232b",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "medweg-e232b.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "655857501316",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:655857501316:web:a645e2b68a23d074e9aed1",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-BNWZM2TDNY",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export default app

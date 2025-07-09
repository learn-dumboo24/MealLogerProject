import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCR2zvAET4gsRGAyhZZ3jUN_lacLZsz588",
  authDomain: "mealloger-13c4a.firebaseapp.com",
  projectId: "mealloger-13c4a",
  storageBucket: "mealloger-13c4a.firebasestorage.app",
  messagingSenderId: "103997602109",
  appId: "1:103997602109:web:a43f8f912a36f27d21ed54",
  measurementId: "G-89YZFRQVJ2"
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };




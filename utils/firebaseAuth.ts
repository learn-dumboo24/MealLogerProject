import {auth} from "../firebaseConfig"; 
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,User } from "firebase/auth"; 

export const registerUser = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth,email,password);
};

export const loginUser = async (email:string, password: string) => {
    return signInWithEmailAndPassword(auth,email,password);
}; 

export const logoutUser = async () => {
    return signOut(auth);
} 

export const onAuthStateChangedListener = (callback: (user:User | null) => void) => {
    return onAuthStateChanged(auth,callback);
};
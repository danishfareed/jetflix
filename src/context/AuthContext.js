import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 

const AuthContext = createContext()

export function AuthContextProvider({ children }){
    const [user, setUser] = useState({})

    const signUp =  async (email,password)=>{
        createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
          })
    
      return () => {
        unsubscribe();
      }
    }, [])
    
    
    return(
        <AuthContext.Provider value={{signUp, user, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user, setUser] = useState({})

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=(email,password)=>{
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
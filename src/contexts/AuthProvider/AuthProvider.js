import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/FirebaseConfig';
export const AuthContext = createContext()
 const auth =getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleSingUp = (Provider) => {
        return signInWithPopup(auth, Provider)
    }
    const EmailAndPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const EmailAndPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser ,profile)
    }
    const EmailVarification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const PasswordReset = (email) => {
      return  sendPasswordResetEmail(auth, email)
    }
    const logout = () => {
        setLoading(true)
      return  signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser', currentUser)
            if ( currentUser===null||currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const authInfo ={user,googleSingUp,EmailAndPasswordRegister,logout,EmailAndPasswordLogin,loading, profileUpdate,EmailVarification,setLoading,PasswordReset}
    return (
        
            <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import app from '../Pages/FireBase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmail = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user, loading, createUser, signInEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
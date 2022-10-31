import React, { createContext, useEffect, useState } from 'react';
import app from '../Pages/FireBase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user, loading, createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase.init';
import { Commet } from 'react-loading-indicators';
import Loading from '../../Loading/Loading';

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    // Sign In with email password
    const registerUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Sign In with google
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // Log Out 
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update Profile
    const updateUserProfile = (profileInfo) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, profileInfo);
        }
        return Promise.reject("No user is currently logged in");
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        registerUser,
        signInUser,
        signInWithGoogle,
        logOut,
        updateUserProfile
    }
      if (loading) {
        
        return <Loading></Loading>;
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
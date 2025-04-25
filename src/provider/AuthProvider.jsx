import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // user state manage
    const [user, setUser] = useState(null);

    // manage loading state
    const [loading, setLoading] = useState(true)

    // google auth Provider
    const googleProvider = new GoogleAuthProvider();

    // register
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    const userLogout = () => {
        return signOut(auth)
    }


    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }



    const passwordValidation = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            return "Password must be at least 6 characters long and include both uppercase and lowercase letters.";
        }
        else {
            return '';
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])




    const authInfo = {
        createNewUser,
        signIn,
        userLogout,
        updateUserProfile,
        singInWithGoogle,
        passwordValidation,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
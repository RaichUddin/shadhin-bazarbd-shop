import {
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut, createUserWithEmailAndPassword, GoogleAuthProvider
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeFirebase from "../../Pages/Firebase/Firebase.init";


initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
            })
            .catch((error) => {

                setError(error.message);

            })
            .finally(() => setLoading(false));
    }
    const signIn = (email, password, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const display = () => {
        const newUser = auth.currentUser;
        if (newUser !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = newUser.displayName;


            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = newUser.uid;
        }
    }

    const googleSign = (location, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                const user = result.user;
                setError('');
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {

        })
            .finally(() => setLoading(false));
    }
    return {
        user,
        loading,
        registerUser,
        logout,
        signIn,
        googleSign,
        display,
    }

}
export default useFirebase;
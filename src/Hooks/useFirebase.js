import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState('');

    const handleUserRegister = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((result) => {
                setUserName(name)
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
    };
    const handleGithubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        handleUserRegister,
        handleUserLogin,
        handleLogout,
        setUserName,
        handleGoogleLogin,
        handleGithubLogin,
        error,
        user
    }

}
export default useFirebase;

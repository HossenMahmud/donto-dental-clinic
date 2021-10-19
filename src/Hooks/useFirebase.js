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
    const [isLoading, setIsLoading] = useState(true);

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
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(() => setIsLoading(false));

    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));

    };
    const handleGithubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

            }
            setIsLoading(false);
        });
    }, []);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return {
        handleUserRegister,
        handleUserLogin,
        handleLogout,
        setUserName,
        handleGoogleLogin,
        handleGithubLogin,
        error,
        user,
        isLoading
    }

}
export default useFirebase;

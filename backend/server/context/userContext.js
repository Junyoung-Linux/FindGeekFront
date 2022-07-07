import { useState, useEffect, useContext, createContext, useMemo} from "react";
import { auth } from "../firebase";

export const UserContext = createContext({});

import {
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GithubAuthProvider
} from "firebase/auth";



// In order to share the data with other components, putting the initial value. 
export const useUserContext = () => {
    return useContext(UserContext); 
};

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) =>{
            if (res) {
                setUser(res);
            } else{
                setUser(null);
            }
            setError("")
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    const signInWithGithub = () => {
        setLoading(true);
        signInWithPopup(auth, new GithubAuthProvider())
        .then((res) => console.log(res))
        .then((res) => setError(err.code))
        .then((res) => setLoading(false))
    }


    const logOutUser = () => {
        signOut(auth);
    }
    // caching 
    //The reasone I use useMemo is that it prevents all the data which are used this component from rerendering.
    const value = useMemo(() => ({setLoading}), [setLoading])

    const contextValue = {
        user,
        loading,
        error,
        value,
        signInWithGithub,
        logOutUser
    }

    

    return (
        <UserContext.Provider value= {contextValue}>{children}</UserContext.Provider>
    )
}


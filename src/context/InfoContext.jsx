import { createContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {
    const persistedAuth = JSON.parse(localStorage.getItem("auth"));
    const [auth, setAuth] = useState(persistedAuth);

    function login(authData){
        setAuth(authData);
        localStorage.setItem("auth", JSON.stringify(authData));
    }
    return (
        <InfoContext.Provider value={{auth, login}}>{children}</InfoContext.Provider>
    );
};
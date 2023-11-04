import { createContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {
    const persistedAuth = JSON.parse(localStorage.getItem("auth"));
    const [auth, setAuth] = useState(persistedAuth);

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isLoadingSearch, setIsLoadingSearch] = useState(false);
    const [resultSearch, setResultSearch] = useState([]);

    function login(authData){
        setAuth(authData);
        localStorage.setItem("auth", JSON.stringify(authData));
    }
    return (
        <InfoContext.Provider 
        value={{
            auth, 
            login,
            isOpenSearch,
            setIsOpenSearch,
            isLoadingSearch,
            setIsLoadingSearch,
            resultSearch,
            setResultSearch
        }}>{children}</InfoContext.Provider>
    );
};
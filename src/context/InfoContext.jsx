import { createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {
    return (
        <InfoContext.Provider value={{}}>{children}</InfoContext.Provider>
    );
};
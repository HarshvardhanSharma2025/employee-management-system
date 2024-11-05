import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage(); // Sets initial data in localStorage if not present
        const { employees, admin } = getLocalStorage(); // Retrieves employees and admin data
        setUserData({ employees, admin }); // Sets context value
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

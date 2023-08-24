import { createContext, useContext, useEffect, useState } from "react"
import AuthService from "auth/AuthService";
import HttpClient from "services/client/HttpClient";

const AuthContext = createContext({})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken") || '');

    useEffect(() => {
        localStorage.setItem("jwtToken", jwtToken);
    }, [jwtToken])

    return (
        <AuthContext.Provider value={{ user, setUser, jwtToken, setJwtToken }}>
            {children}
        </AuthContext.Provider>
    )
}
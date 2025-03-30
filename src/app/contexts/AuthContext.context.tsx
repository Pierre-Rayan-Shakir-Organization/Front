'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
    token : string | null,
    setToken : (token : string) => void,
    login : (newToken : string) => void,
    logout : () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider : React.FC<{children : ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);

    // Effet pour récupérer le token du localStorage lors du montage
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = (newToken : string) => {
        setToken(newToken);
    }

    const logout = () => {
        setToken(null);
        window.location.href = '/';
    }

    return (
        <AuthContext.Provider value={{token, setToken,login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}

// Création du hook personnalisé
export const useAuth = () : AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
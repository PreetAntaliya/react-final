import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: null
    });

    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem('auth'));
            if (data && data.user && data.token) {
                setAuth({
                    user: data.user,
                    token: data.token
                });
            }
        } catch (error) {
            console.error("Error parsing localStorage data", error);
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth, AuthProvider };


// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState(() => {
//         const savedAuth = localStorage.getItem('auth');
//         return savedAuth ? JSON.parse(savedAuth) : null;
//     });

//     useEffect(() => {
//         localStorage.setItem('auth', JSON.stringify(auth));
//     }, [auth]);

//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);
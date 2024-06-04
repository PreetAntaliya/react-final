import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: null
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth'))
        console.log(data);
        if (data) {
            setAuth({
                user: data.user,
                token: data.token
            })
        }
    },[])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export {useAuth,AuthProvider}
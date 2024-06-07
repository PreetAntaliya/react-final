import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute = () => {
  // const [auth,setAuth] = useAuth()
  // console.log(auth);
  //  return (
  // auth?.token && auth?.user?.role==="admin" ? <Outlet/> : <Navigate to={'/'} />
  // )
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    const validToken = async () => {
      let localData = JSON.parse(localStorage.getItem("auth"));
      const token = localData?.token;
      let response = await fetch(`http://localhost:8000/v1/validateUser`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      console.log(data.data.payload.role);
      if (data.success) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        localStorage.removeItem("auth")
      }
    };
    validToken();
  }, []);
  return authenticated ? <Outlet /> : <Navigate to={"/login"} />;
}

export default AdminRoute

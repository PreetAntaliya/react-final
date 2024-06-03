import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute = () => {
    const [auth,setAuth] = useAuth()
   return (
    auth?.token && auth?.user?.role==="admin" ? <Outlet/> : <Navigate to={'/'} />
  )
}

export default AdminRoute
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import Index from './pages/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Category from './pages/admin/Category';
import AddCategory from './pages/admin/AddCategory';

function App() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(role);
  
  useEffect(() => {
    const validateToken = async () => {
      let local = JSON.parse(localStorage.getItem('auth'));
      let token = local?.token;
      try {
        let response = await fetch(
          "http://localhost:8000/v1/validateUser",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let data = await response.json();
        if (data.success) {
          setRole(data.data.payload.role);
        } else {
          setRole("");
        }
      } catch (err) {
        console.error("Token validation error:", err);
        setRole("");
      } finally {
        setLoading(false);
      }
    }
    validateToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or any loading spinner/component you prefer
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
        <Route path="/add-category" element={<AddCategory />} />

        {/* admin route */}
        <Route path="/category" element={role === 'admin' ? <Category /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <Route path='/' element={<Index />} /> */ }


// import AdminRoute from './Private/AdminRoute';
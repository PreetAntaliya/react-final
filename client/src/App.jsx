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
import AdminRoute from './Private/AdminRoute';
import Category from './pages/admin/Category';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />

        {/* admin route */}
        <Route element={<AdminRoute />}>
          <Route path='/category' element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <Route path='/' element={<Index />} /> */ }

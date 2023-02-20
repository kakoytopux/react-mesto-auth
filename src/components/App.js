import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { ProtectedRoute } from './ProtectedRoute';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path='/sign-up' element={<Register />} />
      <Route path='/sign-in' element={<Login />} />
      <Route path='/' element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />} />
      <Route path='*' element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />} />
    </Routes>
  );
}
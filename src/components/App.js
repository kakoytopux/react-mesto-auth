import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { ProtectedRoute } from './ProtectedRoute';
import signApi from '../utils/signApi';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    tokenCheckValid();
  }, []);
  
  return (
    <Routes>
      <Route path='/sign-up' element={<Register />} />
      <Route path='/sign-in' element={<Login setHandleLogin={setHandleLogin} />} />
      <Route path='/' element={<ProtectedRoute element={Profile} userEmail={userEmail} loggedIn={loggedIn} />} />
      <Route path='*' element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />} />
    </Routes>
  );
  function tokenCheckValid() {
    if(localStorage.getItem('token')) {
      const jwt = localStorage.getItem('token');
      signApi.user(jwt)
      .then(res => {
        setUserEmail(res.data.email);
        setHandleLogin();
        navigate('/');
      })
      .catch(err => console.log(err))
    }
  }
  function setHandleLogin() {
    setLoggedIn(true);
  }
}
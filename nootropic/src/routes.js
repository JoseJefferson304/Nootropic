import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home/home';
import Login from './Paginas/Login/login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Paginas/Home/home';
import Login from './Paginas/Login/login';
import Cadastro from './Paginas/Cadastro/cadastro';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';
import logo from '../../Imagens/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href=" ">
          <img src={logo} className="logo" alt="Logo Lades" />
        </a>
      </div>
    </header>
  );
};

export default Header;
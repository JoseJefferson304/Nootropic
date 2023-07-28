import React from 'react';
import logo from '../../imagens/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div>
        <a href=" ">
          <img src={logo} className="logo" alt="Logo Nootropic" />
        </a>
      </div>
    </header>
  );
};

export default Header;
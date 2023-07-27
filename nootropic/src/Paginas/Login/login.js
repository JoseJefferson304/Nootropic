// login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Header from '../Componentes/header';
import Fundo from '../../Imagens/login.png';
import './login.css';

function Login() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === '1234') {
      setLoggedIn(true);
      if (rememberMe) {
      }
      navigate('/home');
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  if (loggedIn) {
    return null;
  }

  return (
    <main className="login-main">
      <div className="header">
        <Header />
      </div>
      <div className="login-container">
        <div className="image-container">
          <a href=" ">
            <img src={Fundo} className="logo" alt="Logo Lades" />
          </a>
        </div>
        <div className="login-form">
          <h1>Entrar</h1>

          <p>Email</p>
          <input
            type="email"
            placeholder="Digite seu email"
            autoComplete="off"
          />
          
          <p>Senha</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha"
          />

          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Lembrar-me</label>
          </div>

          <br />
          <button onClick={handleLogin}>Enviar</button>
          <br />
          <GoogleLogin
            clientId="SEU_CLIENT_ID_DO_GOOGLE"
            buttonText="Entrar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <br />
          <p>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
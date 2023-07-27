// Cadastro.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Header from '../Componentes/header';
import Fundo from '../../Imagens/login.png';

function Cadastro() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !phone || !password || !agree) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Your registration logic here
    console.log('Registration successful!');
    navigate('/login'); // Redirect to login page after registration
  };

  const responseGoogle = (response) => {
    // Your Google Login handling logic here
    console.log(response);
  };

  return (
    <main className="cadastro-main">
      <div className="cadastro-container">
        <Header />
        <div className="image-container">
          <a href=" ">
            <img src={Fundo} className="logo" alt="Logo Lades" />
          </a>
        </div>
        <div className="cadastro-form">
          <h1>Cadastro</h1>

          <p>Primeiro Nome *</p>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Digite seu primeiro nome"
          />

          <p>Sobrenome *</p>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Digite seu sobrenome"
          />

          <p>Email *</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />

          <p>Telefone *</p>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Digite seu telefone"
          />

          <p>Senha *</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha"
          />

          <div>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label>Você concorda que somos os melhores?</label>
          </div>

          <br />
          <button onClick={handleRegister}>Enviar</button>
          <br />
          <GoogleLogin
            clientId="SEU_CLIENT_ID_DO_GOOGLE"
            buttonText="Entrar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
      <div className="login-link">
        <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
      </div>
    </main>
  );
}

export default Cadastro;

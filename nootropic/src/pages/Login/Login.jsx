import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from "../Components/Header"
import Fundo from '../../Imagens/login.png';
import "./Login.css"

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
    <main>
      <Header />
      <section>
        <img src={Fundo} className="fundo" alt="Cadernos" />
      </section>

      <section>
        <h1>Entrar</h1>

        <p>
        <label htmlFor="email">E-mail</label> <br />
        <input
          id="email"
          type="email"
          autoComplete="off"
        />
        </p>

        <p>
        <label htmlFor="senha">Senha</label> <br />
        <input
          type="password"
          id="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <p>Mínimo 8 caracteres, máximo 16.</p>
        </p>

        <p>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label>Lembrar de mim</label>
        </p>

        <button onClick={handleLogin}>Entrar</button>

        <hr />

        <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>.</p>
      </section>
    </main>
  );
}

export default Login;
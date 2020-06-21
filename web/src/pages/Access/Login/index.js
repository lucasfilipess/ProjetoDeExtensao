import React, { useState } from 'react';
import {
  LoginForm,
  LoginContainer,
  NavigateMenus,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
import api from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function Login() {
  const history = useHistory();

  const [isFocus, setIsFocus] = useState(0);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      email: login.email,
      senha: login.password,
    };
    try {
      await api.post('login', data).then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        history.push('/home');
      });
    } catch (error) {}
  }
  return (
    <>
      <div className={LoginForm}>
        <div className={LoginContainer}>
          <div className={NavigateMenus}>
            <Link to="/">
              <BsArrowLeft />
              <p>Voltar</p>
            </Link>
            <Link to="/access">
              Ainda não possui uma conta? <span>Cadastre-se.</span>
            </Link>
          </div>
          <h2>Login</h2>
          <p>Faça login para acessar suas consultas.</p>
          <form onSubmit={handleLogin}>
            <input
              onFocus={() => setIsFocus(1)}
              placeholder="Email"
              type="email"
              className={isFocus === 1 ? StyledFocus : StyledInput}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              value={login.email}
            />
            <input
              onFocus={() => setIsFocus(2)}
              placeholder="Senha"
              type="password"
              className={isFocus === 2 ? StyledFocus : StyledInput}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              value={login.password}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

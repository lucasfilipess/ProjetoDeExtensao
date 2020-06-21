import React, { useState } from 'react';
import {
  LoginForm,
  LoginContainer,
  StyledInput,
  StyledFocus,
  AdminMessage,
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
      await api.post('admin/login', data).then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('type', response.data.type);
        history.push('/admin');
      });
    } catch (error) {}
  }
  return (
    <>
      <div className={LoginForm}>
        <div className={LoginContainer}>
          <h2>Login</h2>
          <p>Faça login como administrador para acessar.</p>
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
          <div className={AdminMessage}>
            <p>
              Esta plataforma é dedicada aos administradores, caso não possua
              acesso procure um reponsável.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

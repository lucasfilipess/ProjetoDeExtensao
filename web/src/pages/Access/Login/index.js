import React, { useState } from 'react';
import {
  LoginForm,
  LoginContainer,
  NavigateMenus,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
import api from '../../../Services/api';
import { Link, useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { store } from 'react-notifications-component';

function Login() {
  const history = useHistory();

  const [isFocus, setIsFocus] = useState(0);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      email: login.email,
      password: login.password,
    };
    try {
      await api.post('login', data).then((response) => {
        store.addNotification({
          title: 'Sucesso',
          message: `Login realizado com sucesso, ${response.data.name} seja bem vindo a plataforma.`,
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('type', response.data.type);
        history.push(`/${response.data.type}`);
      });
    } catch (error) {
      store.addNotification({
        title: 'Ooops',
        message:
          'Houve um erro ao processar a sua requisição, confira as suas credencias e tente novamente',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 8000,
          onScreen: true,
        },
      });
    }
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
              name="email"
              required
              className={isFocus === 1 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
              value={login.email}
            />
            <input
              onFocus={() => setIsFocus(2)}
              placeholder="Senha"
              type="password"
              name="password"
              required
              className={isFocus === 2 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
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

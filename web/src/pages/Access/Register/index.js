import React, { useState } from 'react';
import {
  LoginForm,
  LoginContainer,
  NavigateMenus,
  StyledInput,
  StyledFocus,
  StyledCheckbox,
} from './styles.module.scss';
import api from '../../../Services/api';
import { Link, useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { store } from 'react-notifications-component';

function Register() {
  const history = useHistory();

  const [isFocus, setIsFocus] = useState(0);
  const [register, setRegister] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(e) {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (register.password === register.confirmPassword) {
      const data = {
        type: 'patient',
        name: register.name,
        surname: register.surname,
        email: register.email,
        password: register.password,
      };
      try {
        await api.post('patient', data).then((response) => {
          store.addNotification({
            title: 'Sucesso',
            message: `Cadastro realizado com sucesso, ${data.name} seja bem vindo a plataforma.`,
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
          localStorage.setItem('type', response.data.type);
          localStorage.setItem('name', data.nome);
          history.push(`/${data.type}`);
        });
      } catch (error) {
        store.addNotification({
          title: 'Ooops',
          message:
            'Houve um erro ao processar a sua requisição, confira se todos os campos estão preenchidos corretamente.',
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
    } else {
      store.addNotification({
        title: 'Ooops',
        message:
          'Houve um erro ao processar a sua requisição, os campos de senha devem ser iguais.',
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
            <Link to="/access/login">
              Já possui uma conta? <span>Faça login.</span>
            </Link>
          </div>
          <h2>Cadastre-se</h2>
          <p>Cadastre-se para realizar consultas.</p>
          <form onSubmit={handleLogin}>
            <input
              onFocus={() => setIsFocus(1)}
              placeholder="Nome"
              type="text"
              name="name"
              required
              className={isFocus === 1 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
              value={register.name}
              maxLength={30}
            />
            <input
              onFocus={() => setIsFocus(2)}
              placeholder="Sobrenome"
              type="text"
              name="surname"
              required
              className={isFocus === 2 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
              value={register.surname}
              maxLength={30}
            />
            <input
              onFocus={() => setIsFocus(3)}
              placeholder="Email"
              type="email"
              name="email"
              required
              className={isFocus === 3 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
              value={register.email}
            />
            <input
              onFocus={() => setIsFocus(4)}
              placeholder="Senha"
              type="password"
              name="password"
              required
              className={isFocus === 4 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
              value={register.password}
              minLength={8}
            />
            <input
              onFocus={() => setIsFocus(5)}
              placeholder="Confirmar senha"
              type="password"
              name="confirmPassword"
              required
              className={isFocus === 5 ? StyledFocus : StyledInput}
              onChange={(e) => handleChange(e)}
              value={register.confirmPassword}
              minLength={8}
            />
            <div>
              <input type="checkbox" className={StyledCheckbox} />
              <p>
                Aceitar <span>Termos e Condições</span> de uso.
              </p>
            </div>
            <button type="submit">CADASTRAR</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

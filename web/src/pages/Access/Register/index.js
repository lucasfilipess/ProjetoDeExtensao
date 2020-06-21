import React, { useState } from 'react';
import {
  LoginForm,
  LoginContainer,
  NavigateMenus,
  StyledInput,
  StyledFocus,
  StyledCheckbox,
} from './styles.module.scss';
import api from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function Register() {
  const history = useHistory();

  const [isFocus, setIsFocus] = useState(0);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      tipo: 3,
      nome: register.name,
      email: register.email,
      senha: register.password,
    };
    try {
      await api.post('patient', data).then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', data.nome);
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
              className={isFocus === 1 ? StyledFocus : StyledInput}
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
              value={register.name}
            />
            <input
              onFocus={() => setIsFocus(2)}
              placeholder="Email"
              type="email"
              className={isFocus === 2 ? StyledFocus : StyledInput}
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
              value={register.email}
            />
            <input
              onFocus={() => setIsFocus(3)}
              placeholder="Senha"
              type="password"
              className={isFocus === 3 ? StyledFocus : StyledInput}
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
              value={register.password}
            />
            <input
              onFocus={() => setIsFocus(4)}
              placeholder="Confirmar senha"
              type="password"
              className={isFocus === 4 ? StyledFocus : StyledInput}
              onChange={(e) =>
                setRegister({ ...register, confirmPassword: e.target.value })
              }
              value={register.confirmPassword}
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

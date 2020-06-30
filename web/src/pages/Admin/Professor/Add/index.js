import React, { useEffect, useState } from 'react';
import {
  Container,
  FormContainer,
  FormNav,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
// import user from '../../../Assets/images/user.svg';
import api from '../../../../Services/api';

function Add({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(2);
  }, [setIsLinkActive]);

  const [values, setValues] = useState({
    type: '',
    name: '',
    surname: '',
    cpf: '',
    rg: '',
    telephone: '',
    cellPhone: '',
    email: '',
    cep: '',
    registration: '',
    uf: '',
    city: '',
    neighborhood: '',
    street: '',
    number: 0,
    complement: '',
    password: '',
    confirmPassword: '',
  });
  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  const [isFocus, setIsFocus] = useState(null);

  async function handleUpdate(e) {
    e.preventDefault();
    const data = {
      type: values.type,
      name: values.name,
      surname: values.surname,
      cpf: values.cpf,
      rg: values.rg,
      telephone: values.telephone,
      cellPhone: values.cellPhone,
      email: values.email,
      cep: values.cep,
      registration: values.registration,
      uf: values.uf,
      city: values.city,
      neighborhood: values.neighborhood,
      street: values.street,
      number: values.number,
      complement: values.complement,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    console.log(data);

    // try {
    //   await api
    //     .put('patient', data, {
    //       headers: {
    //         authorization: localStorage.getItem('token'),
    //       },
    //     })
    //     .then((response) => console.log(response));
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <>
      <div className={Container}>
        <div className={FormContainer}>
          <div className={FormNav}>
            <div>
              <p>Dados do professor</p>
            </div>
          </div>
          <form onSubmit={handleUpdate}>
            <div>
              <div>
                <input
                  placeholder="Nome"
                  required
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={values.name}
                  onFocus={() => setIsFocus(1)}
                  className={isFocus === 1 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={30}
                />
                <input
                  placeholder="CPF"
                  name="cpf"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.cpf}
                  onFocus={() => setIsFocus(2)}
                  className={isFocus === 2 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={14}
                />
                <input
                  placeholder="Email"
                  required
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={values.email}
                  onFocus={() => setIsFocus(3)}
                  className={isFocus === 3 ? StyledFocus : StyledInput}
                  type="email"
                />
                <input
                  placeholder="Celular"
                  required
                  name="cellPhone"
                  onChange={(e) => handleChange(e)}
                  value={values.cellPhone}
                  onFocus={() => setIsFocus(4)}
                  className={isFocus === 4 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={16}
                />
                <input
                  placeholder="CEP"
                  name="cep"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.cep}
                  onFocus={() => setIsFocus(5)}
                  className={isFocus === 5 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={9}
                />
                <input
                  placeholder="CEP"
                  required
                  name="city"
                  onChange={(e) => handleChange(e)}
                  value={values.city}
                  onFocus={() => setIsFocus(6)}
                  className={isFocus === 6 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />
                <input
                  placeholder="Rua"
                  required
                  name="street"
                  onChange={(e) => handleChange(e)}
                  value={values.street}
                  onFocus={() => setIsFocus(7)}
                  className={isFocus === 7 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />
                <input
                  placeholder="Complemento"
                  name="complement"
                  onChange={(e) => handleChange(e)}
                  value={values.complement}
                  onFocus={() => setIsFocus(8)}
                  className={isFocus === 8 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="Senha"
                  name="password"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.password}
                  onFocus={() => setIsFocus(9)}
                  className={isFocus === 9 ? StyledFocus : StyledInput}
                  type="password"
                  minLength={8}
                />
              </div>

              <div>
                <input
                  placeholder="Sobrenome"
                  required
                  name="surname"
                  onChange={(e) => handleChange(e)}
                  value={values.surname}
                  onFocus={() => setIsFocus(10)}
                  className={isFocus === 10 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={30}
                />
                <input
                  placeholder="RG"
                  required
                  name="rg"
                  onChange={(e) => handleChange(e)}
                  value={values.rg}
                  onFocus={() => setIsFocus(11)}
                  className={isFocus === 11 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={13}
                />
                <input
                  placeholder="Telefone"
                  name="telephone"
                  onChange={(e) => handleChange(e)}
                  value={values.telephone}
                  onFocus={() => setIsFocus(12)}
                  className={isFocus === 12 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={14}
                />
                <input
                  placeholder="Cadastro"
                  required
                  name="registration"
                  onChange={(e) => handleChange(e)}
                  value={values.registration}
                  onFocus={() => setIsFocus(13)}
                  className={isFocus === 13 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={9}
                />

                <input
                  placeholder="UF"
                  required
                  name="uf"
                  onChange={(e) => handleChange(e)}
                  value={values.uf}
                  onFocus={() => setIsFocus(14)}
                  className={isFocus === 14 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={2}
                />
                <input
                  placeholder="Bairro"
                  required
                  name="neighborhood"
                  onChange={(e) => handleChange(e)}
                  value={values.neighborhood}
                  onFocus={() => setIsFocus(15)}
                  className={isFocus === 15 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />

                <input
                  placeholder="Número"
                  required
                  name="number"
                  onChange={(e) => handleChange(e)}
                  value={values.number}
                  onFocus={() => setIsFocus(16)}
                  className={isFocus === 16 ? StyledFocus : StyledInput}
                  type="number"
                />

                <select
                  required
                  value={values.type}
                  name="type"
                  onChange={(e) => handleChange(e)}
                  onFocus={() => setIsFocus(17)}
                  className={isFocus === 17 ? StyledFocus : StyledInput}
                >
                  <option value={'professor'} disabled selected>
                    Nível de Acesso
                  </option>
                  <option value={'professor'}>Professor</option>
                  <option value={'admin'}>Administrador</option>
                </select>

                <input
                  placeholder="Confirmar Senha"
                  name="confirmPassword"
                  onChange={(e) => handleChange(e)}
                  value={values.confirmPassword}
                  onFocus={() => setIsFocus(18)}
                  className={isFocus === 18 ? StyledFocus : StyledInput}
                  type="password"
                  minLength={8}
                />
              </div>
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;

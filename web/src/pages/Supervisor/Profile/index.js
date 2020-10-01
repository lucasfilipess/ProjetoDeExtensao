import React, { useEffect, useState } from 'react';
import {
  Container,
  FormContainer,
  FormNav,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
// import user from '../../../assets/images/user.svg';
import api from '../../../services/api';
import { store } from 'react-notifications-component';

function Profile({ setIsActive }) {
  useEffect(() => {
    setIsActive(1);
    async function getClass() {
      try {
        await api.get('/class').then((response) => setClassData(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    async function getAdvice() {
      try {
        await api.get('/advice').then((response) => setAdvice(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    async function getMyData() {
      try {
        await api
          .get('/supervisor/my-data', {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => {
            setValues(response.data[0]);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getClass();
    getAdvice();
    getMyData();
  }, [setIsActive]);

  const [classData, setClassData] = useState([]);
  const [advice, setAdvice] = useState([]);

  const [values, setValues] = useState({
    id_advice: '',
    id_class: '',
    registration: '',
    name: '',
    surname: '',
    birth_date: '',
    cpf: '',
    rg: '',
    telephone: '',
    cellPhone: '',
    email: '',
    cep: '',
    uf: '',
    city: '',
    neighborhood: '',
    street: '',
    number: '',
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

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      id_advice: values.id_advice,
      id_class: values.id_class,
      registration: values.registration,
      type: values.type,
      name: values.name,
      surname: values.surname,
      birth_date: values.birth_date,
      cpf: values.cpf,
      rg: values.rg,
      telephone: values.telephone,
      cellPhone: values.cellPhone,
      email: values.email,
      cep: values.cep,
      uf: values.uf,
      city: values.city,
      neighborhood: values.neighborhood,
      street: values.street,
      number: values.number,
      complement: values.complement,
      password: values.password,
    };
    console.log(data);

    try {
      await api
        .put('/supervisor', data, {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
        .then(() =>
          store.addNotification({
            title: 'Sucesso',
            message: `Seus dados foram alterados com sucesso`,
            type: 'success',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          })
        );
    } catch (error) {
      console.log(error);
      console.log('message', error.response.data);
      console.log('message', error.response.data.message);

      store.addNotification({
        title: 'Ooops',
        message: `Houve um erro ao processar a sua requisição. (${error.response.data.message})`,
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
      <div className={Container}>
        <div className={FormContainer}>
          <div className={FormNav}>
            <div>
              <p>Dados do supervisor</p>
            </div>
          </div>
          <form onSubmit={handleRegister}>
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
                  maxLength={11}
                  minLength={11}
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
                  placeholder="Cidade"
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

                <select
                  required
                  value={values.id_class}
                  name="id_class"
                  onChange={(e) => handleChange(e)}
                  onFocus={() => setIsFocus(9)}
                  className={isFocus === 9 ? StyledFocus : StyledInput}
                >
                  <option value={''} disabled selected>
                    Curso
                  </option>
                  {classData.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <input
                  placeholder="Data de nascimento"
                  name="birth_date"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.birth_date}
                  onFocus={() => setIsFocus(10)}
                  className={isFocus === 10 ? StyledFocus : StyledInput}
                  type="date"
                />
              </div>

              <div>
                <input
                  placeholder="Sobrenome"
                  required
                  name="surname"
                  onChange={(e) => handleChange(e)}
                  value={values.surname}
                  onFocus={() => setIsFocus(11)}
                  className={isFocus === 11 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={30}
                />
                <input
                  placeholder="RG"
                  required
                  name="rg"
                  onChange={(e) => handleChange(e)}
                  value={values.rg}
                  onFocus={() => setIsFocus(12)}
                  className={isFocus === 12 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={13}
                />
                <input
                  placeholder="Telefone"
                  name="telephone"
                  onChange={(e) => handleChange(e)}
                  value={values.telephone}
                  onFocus={() => setIsFocus(13)}
                  className={isFocus === 13 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={14}
                />
                <input
                  placeholder="Cadastro"
                  required
                  name="registration"
                  onChange={(e) => handleChange(e)}
                  value={values.registration}
                  onFocus={() => setIsFocus(14)}
                  className={isFocus === 14 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={9}
                />

                <input
                  placeholder="UF"
                  required
                  name="uf"
                  onChange={(e) => handleChange(e)}
                  value={values.uf}
                  onFocus={() => setIsFocus(15)}
                  className={isFocus === 15 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={2}
                />
                <input
                  placeholder="Bairro"
                  required
                  name="neighborhood"
                  onChange={(e) => handleChange(e)}
                  value={values.neighborhood}
                  onFocus={() => setIsFocus(16)}
                  className={isFocus === 16 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />

                <input
                  placeholder="Número"
                  required
                  name="number"
                  onChange={(e) => handleChange(e)}
                  value={values.number}
                  onFocus={() => setIsFocus(17)}
                  className={isFocus === 17 ? StyledFocus : StyledInput}
                  type="number"
                  max={99999}
                />

                <select
                  required
                  value={values.type}
                  name="type"
                  onChange={(e) => handleChange(e)}
                  onFocus={() => setIsFocus(18)}
                  className={isFocus === 18 ? StyledFocus : StyledInput}
                >
                  <option value={''} disabled selected>
                    Selecione o acesso
                  </option>
                  <option value={'professor'}>Professor</option>
                  <option value={'preceptor'}>Preceptor</option>
                  <option value={'admin'}>Administrador</option>
                </select>

                <select
                  required
                  value={values.id_advice}
                  name="id_advice"
                  onChange={(e) => handleChange(e)}
                  onFocus={() => setIsFocus(19)}
                  className={isFocus === 19 ? StyledFocus : StyledInput}
                >
                  <option value={''} disabled selected>
                    Conselho
                  </option>
                  {advice.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name} ({item.uf})
                    </option>
                  ))}
                </select>

                <input
                  placeholder="Senha"
                  name="password"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.password}
                  onFocus={() => setIsFocus(20)}
                  className={isFocus === 20 ? StyledFocus : StyledInput}
                  type="password"
                  minLength={8}
                />

                <input
                  placeholder="Confirmar Senha"
                  name="confirmPassword"
                  onChange={(e) => handleChange(e)}
                  value={values.confirmPassword}
                  onFocus={() => setIsFocus(21)}
                  className={isFocus === 21 ? StyledFocus : StyledInput}
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

export default Profile;

import React, { useState } from 'react';
import {
  Container,
  FormContainer,
  FormNav,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
// import user from '../../../Assets/images/user.svg';
import api from '../../../../Services/api';
import { store } from 'react-notifications-component';

function UpdateAccompanied({ data }) {
  const [values, setValues] = useState({
    id: '',
    name: '',
    surname: '',
    birth_date: '',
    cpf: '',
    rg: '',
    cep: '',
    uf: '',
    city: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: '',
  });
  useState(() => {
    console.log(data);

    setValues(data);
  }, []);
  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  const [isFocus, setIsFocus] = useState(null);

  async function handleUpdateAccompanied(e) {
    e.preventDefault();
    const data = {
      type: 'accompanied',
      name: values.name,
      surname: values.surname,
      birth_date: values.birth_date,
      cpf: values.cpf,
      rg: values.rg,
      cep: values.cep,
      uf: values.uf,
      city: values.city,
      neighborhood: values.neighborhood,
      street: values.street,
      number: values.number,
      complement: values.complement,
    };
    console.log(data);

    try {
      await api
        .put(`patient/accompanied/${values.id}`, data, {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
        .then(() =>
          store.addNotification({
            title: 'Sucesso',
            message: `O acompanhado ${data.name}, foi atualizado com sucesso`,
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
      console.log(error.response);
      store.addNotification({
        title: 'Ooops',
        message: 'Houve um erro ao processar a sua requisição.',
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
              <p>Dados do acompanhado</p>
            </div>
          </div>
          <form onSubmit={handleUpdateAccompanied}>
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
                  placeholder="Data de nascimento"
                  name="birth_date"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.birth_date}
                  onFocus={() => setIsFocus(2)}
                  className={isFocus === 2 ? StyledFocus : StyledInput}
                  type="date"
                />
                <input
                  placeholder="CPF"
                  name="cpf"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.cpf}
                  onFocus={() => setIsFocus(3)}
                  className={isFocus === 3 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={11}
                />
                <input
                  placeholder="CEP"
                  name="cep"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.cep}
                  onFocus={() => setIsFocus(4)}
                  className={isFocus === 4 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={8}
                />
                <input
                  placeholder="Cidade"
                  required
                  name="city"
                  onChange={(e) => handleChange(e)}
                  value={values.city}
                  onFocus={() => setIsFocus(5)}
                  className={isFocus === 5 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />
                <input
                  placeholder="Rua"
                  required
                  name="street"
                  onChange={(e) => handleChange(e)}
                  value={values.street}
                  onFocus={() => setIsFocus(6)}
                  className={isFocus === 6 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />
              </div>

              <div>
                <input
                  placeholder="Sobrenome"
                  required
                  name="surname"
                  onChange={(e) => handleChange(e)}
                  value={values.surname}
                  onFocus={() => setIsFocus(7)}
                  className={isFocus === 7 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={30}
                />
                <input
                  placeholder="RG"
                  required
                  name="rg"
                  onChange={(e) => handleChange(e)}
                  value={values.rg}
                  onFocus={() => setIsFocus(8)}
                  className={isFocus === 8 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={10}
                />

                <input
                  placeholder="UF"
                  required
                  name="uf"
                  onChange={(e) => handleChange(e)}
                  value={values.uf}
                  onFocus={() => setIsFocus(9)}
                  className={isFocus === 9 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={2}
                />
                <input
                  placeholder="Bairro"
                  required
                  name="neighborhood"
                  onChange={(e) => handleChange(e)}
                  value={values.neighborhood}
                  onFocus={() => setIsFocus(10)}
                  className={isFocus === 10 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={100}
                />

                <input
                  placeholder="Número"
                  required
                  name="number"
                  onChange={(e) => handleChange(e)}
                  value={values.number}
                  onFocus={() => setIsFocus(11)}
                  className={isFocus === 11 ? StyledFocus : StyledInput}
                  type="number"
                  max={20}
                />
                <input
                  placeholder="Complemento"
                  name="complement"
                  onChange={(e) => handleChange(e)}
                  value={values.complement}
                  onFocus={() => setIsFocus(12)}
                  className={isFocus === 12 ? StyledFocus : StyledInput}
                  type="text"
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

export default UpdateAccompanied;

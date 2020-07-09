import React, { useEffect, useState } from 'react';
import {
  Container,
  FormContainer,
  FormNav,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
import api from '../../../../Services/api';
import { store } from 'react-notifications-component';

function Add({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(2);
  }, [setIsLinkActive]);

  const [values, setValues] = useState({
    campus: '',
    name: '',
    duration: '',
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
      campus: values.campus,
      name: values.name,
      duration: values.duration,
    };
    console.log(data);

    try {
      await api.post('class', data).then(() =>
        store.addNotification({
          title: 'Sucesso',
          message: `O curso ${data.name}, foi cadastrado com sucesso`,
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
              <p>Dados do curso</p>
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
                  placeholder="Duração"
                  name="duration"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.duration}
                  onFocus={() => setIsFocus(2)}
                  className={isFocus === 2 ? StyledFocus : StyledInput}
                  type="number"
                  max={99}
                />
              </div>

              <div>
                <input
                  placeholder="Campus"
                  required
                  name="campus"
                  onChange={(e) => handleChange(e)}
                  value={values.campus}
                  onFocus={() => setIsFocus(3)}
                  className={isFocus === 3 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={30}
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

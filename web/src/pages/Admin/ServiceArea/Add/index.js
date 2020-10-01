import React, { useEffect, useState } from 'react';
import {
  Container,
  FormContainer,
  FormNav,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
import api from '../../../../services/api';
import { store } from 'react-notifications-component';

function Add({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(2);
    async function getclassData() {
      try {
        await api.get('/class').then((response) => setClass(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getclassData();
  }, [setIsLinkActive]);

  const [classData, setClass] = useState([]);

  const [values, setValues] = useState({
    id_class: '',
    name: '',
    description: '',
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
      id_class: values.id_class,
      name: values.name,
      description: values.description,
    };
    console.log(data);

    try {
      await api.post('service-area', data).then(() =>
        store.addNotification({
          title: 'Sucesso',
          message: `A area de atendimento ${data.name}, foi cadastrada com sucesso`,
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
              <p>Dados da area de atendimento</p>
            </div>
          </div>
          <form onSubmit={handleUpdate}>
            <div>
              <div>
                <select
                  required
                  value={values.id_class}
                  name="id_class"
                  onChange={(e) => handleChange(e)}
                  onFocus={() => setIsFocus(1)}
                  className={isFocus === 1 ? StyledFocus : StyledInput}
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
                  placeholder="Descrição"
                  required
                  name="description"
                  onChange={(e) => handleChange(e)}
                  value={values.description}
                  onFocus={() => setIsFocus(2)}
                  className={isFocus === 2 ? StyledFocus : StyledInput}
                  type="text"
                  maxLength={140}
                />
              </div>

              <div>
                <input
                  placeholder="Nome"
                  required
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={values.name}
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

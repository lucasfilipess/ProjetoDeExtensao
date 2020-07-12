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
    setIsLinkActive(3);
    async function getMyServicesAreas() {
      try {
        await api
          .get('my-service-area', {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => setServicesAreas(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getMyServicesAreas();
  }, [setIsLinkActive]);

  const [servicesAreas, setServicesAreas] = useState([]);

  const [values, setValues] = useState({
    id_service_area: '',
    date: '',
    hourly: '',
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
      id_service_area: values.id_service_area,
      date: values.date,
      hourly: values.hourly,
    };
    console.log(data);

    try {
      await api
        .post('availability', data, {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
        .then(() =>
          store.addNotification({
            title: 'Sucesso',
            message: `A disponibilidade foi creada com sucesso`,
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
                <select
                  required
                  value={values.id_service_area}
                  name="id_service_area"
                  onChange={(e) => handleChange(e)}
                  onFocus={() => setIsFocus(1)}
                  className={isFocus === 1 ? StyledFocus : StyledInput}
                >
                  <option value={''} disabled selected>
                    Area de atendimento
                  </option>
                  {servicesAreas.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  placeholder="Data"
                  name="date"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.date}
                  onFocus={() => setIsFocus(2)}
                  className={isFocus === 2 ? StyledFocus : StyledInput}
                  type="date"
                />
                <input
                  placeholder="Horário"
                  name="hourly"
                  required
                  onChange={(e) => handleChange(e)}
                  value={values.hourly}
                  onFocus={() => setIsFocus(3)}
                  className={isFocus === 3 ? StyledFocus : StyledInput}
                  type="time"
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

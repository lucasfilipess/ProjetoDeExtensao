import React, { useEffect, useState } from 'react';
import ListTable from '../../../Utils/ListTable';
import api from '../../../../services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getAppointments() {
      try {
        await api
          .get('/supervisor/my-appointments', {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => {
            setAppointments(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getAppointments();
  }, [setIsLinkActive]);
  const [appointments, setAppointments] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Sobrenome', field: 'surname' },
    { title: 'Data', field: 'date' },
    { title: 'Horário', field: 'horary' },
    { title: 'Celular', field: 'cellPhone' },
    { title: 'Telefone', field: 'cellPhone' },
    { title: 'Email', field: 'email' },
    { title: 'Confirmado', field: 'confirmation' },
  ];

  return (
    <>
      <div className={Container}>
        <ListTable
          title={'Agendadas'}
          columnsName={columns}
          rows={appointments}
        />
      </div>
    </>
  );
}

export default List;

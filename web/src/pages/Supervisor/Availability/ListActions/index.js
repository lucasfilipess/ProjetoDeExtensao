import React, { useEffect, useState } from 'react';
import SearchTable from '../../../Utils/SearchTable';
import api from '../../../../services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function ListActions({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(2);
    async function getMyAvailability() {
      try {
        await api
          .get('/my-availability', {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => setAvailability(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getMyAvailability();
  }, [setIsLinkActive]);
  const [availability, setAvailability] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Area de atendimento', field: 'name' },
    { title: 'Data', field: 'date' },
    { title: 'Horário', field: 'hourly' },
  ];

  // "id": 1,
  //   "id_supervisor": 1,
  //   "id_service_area": 1,
  //   "date": "25/07/2020",
  //   "hourly": "08:00",
  //   "has_patient": 0

  async function handleDelete(option, id) {
    if (option) {
      try {
        await api
          .delete(`my-availability/${id}`, {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then(() =>
            store.addNotification({
              title: 'Sucesso',
              message: `A disponibilidade foi deletada com sucesso`,
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
        console.log(error.response.status);

        store.addNotification({
          title: 'Erro',
          message: `Não foi possível deletar disponibilidade do sistema tente novamente.`,
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      }
    }
  }

  return (
    <>
      <div className={Container}>
        <SearchTable
          title={'Areas de atendimento'}
          columnsName={columns}
          rows={availability}
          deleteBtn={handleDelete}
          availability={true}
        />
      </div>
    </>
  );
}

export default ListActions;

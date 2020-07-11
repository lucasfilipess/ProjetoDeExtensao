import React, { useEffect, useState } from 'react';
import SearchTable from '../../../Utils/SearchTable';
import api from '../../../../Services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getSupervisores() {
      try {
        await api
          .get('/supervisor')
          .then((response) => setSupervisores(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getSupervisores();
  }, [setIsLinkActive]);
  const [supervisores, setSupervisores] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Sobrenome', field: 'surname' },
    { title: 'RA', field: 'registration' },
    { title: 'Curso', field: 'class' },
    { title: 'Tipo', field: 'type' },
  ];
  async function handleDelete(option, id) {
    if (option) {
      try {
        await api
          .delete(`admin/supervisor/${id}`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then(() =>
            store.addNotification({
              title: 'Sucesso',
              message: `O supervisor foi desativado do sistema com sucesso.`,
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
          message: `Não foi possível desativar o supervisor do sistema.`,
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
          title={'Supervisores'}
          columnsName={columns}
          rows={supervisores}
          deleteBtn={handleDelete}
          supervisor={true}
        />
      </div>
    </>
  );
}

export default List;

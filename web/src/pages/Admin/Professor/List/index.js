import React, { useEffect, useState } from 'react';
import SearchTable from '../../../Utils/SearchTable';
import api from '../../../../Services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getProfessors() {
      try {
        await api
          .get('/professor')
          .then((response) => setProfessors(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getProfessors();
  }, [setIsLinkActive]);
  const { token } = localStorage;
  const [professors, setProfessors] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Sobrenome', field: 'surname' },
    { title: 'RA', field: 'registration' },
    { title: 'Curso', field: 'class' },
  ];
  async function handleDelete(option, id) {
    if (option) {
      try {
        await api
          .put(
            'professor/delete',
            { id },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then(() =>
            store.addNotification({
              title: 'Sucesso',
              message: `O professor foi desativado do sistema com sucesso.`,
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
          message: `Não foi possível desativar o professor do sistema.`,
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
          title={'Professores'}
          columnsName={columns}
          rows={professors}
          deleteBtn={handleDelete}
          professor={true}
        />
      </div>
    </>
  );
}

export default List;

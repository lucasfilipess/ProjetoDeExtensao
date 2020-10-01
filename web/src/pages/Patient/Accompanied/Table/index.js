import React, { useEffect, useState } from 'react';
import SearchTable from '../../../Utils/SearchTable';
import api from '../../../../services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getAccompanied() {
      try {
        await api
          .get('patient/my-accompanied', {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => setAccompanied(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getAccompanied();
  }, [setIsLinkActive]);
  const [accompanied, setAccompanied] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Sobrenome', field: 'surname' },
    { title: 'Nascimento', field: 'birth_date' },
    { title: 'CPF', field: 'cpf' },
    { title: 'RG', field: 'rg' },
  ];
  async function handleDelete(option, id) {
    if (option) {
      try {
        await api
          .delete(`patient/accompanied/${id}`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then(() =>
            store.addNotification({
              title: 'Sucesso',
              message: `O companhado foi desativado do sistema com sucesso.`,
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
          message: `Não foi possível desativar o acompanhado do sistema.`,
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
          title={'Acompanhados'}
          columnsName={columns}
          rows={accompanied}
          deleteBtn={handleDelete}
          patient={true}
        />
      </div>
    </>
  );
}

export default List;

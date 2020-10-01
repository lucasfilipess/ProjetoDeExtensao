import React, { useEffect, useState } from 'react';
import SearchTable from '../../../Utils/SearchTable';
import api from '../../../../services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getserviceArea() {
      try {
        await api
          .get('/service-area')
          .then((response) => setServiceArea(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getserviceArea();
  }, [setIsLinkActive]);
  const [serviceArea, setServiceArea] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Curso', field: 'class_name' },
    { title: 'Descrição', field: 'description' },
  ];

  async function handleDelete(option, id) {
    if (option) {
      try {
        await api.delete(`service-area/${id}`).then(() =>
          store.addNotification({
            title: 'Sucesso',
            message: `A area de atendimento foi desativada do sistema com sucesso.`,
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
          message: `Não foi possível desativar a area de atendimento do sistema.`,
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
          rows={serviceArea}
          deleteBtn={handleDelete}
          serviceArea={true}
        />
      </div>
    </>
  );
}

export default List;

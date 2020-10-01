import React, { useEffect, useState } from 'react';
import SearchTable from '../../../../Utils/SearchTable';
import api from '../../../../../services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
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

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Duração', field: 'duration' },
    { title: 'Campus', field: 'campus' },
  ];
  async function handleDelete(option, id) {
    if (option) {
      try {
        await api.delete(`class/${id}`).then(() =>
          store.addNotification({
            title: 'Sucesso',
            message: `O curso foi desativado do sistema com sucesso.`,
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
          title={'Cursos'}
          columnsName={columns}
          rows={classData}
          deleteBtn={handleDelete}
          classData={true}
        />
      </div>
    </>
  );
}

export default List;

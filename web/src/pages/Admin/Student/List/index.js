import React, { useEffect, useState } from 'react';
import SearchTable from '../../../Utils/SearchTable';
import api from '../../../../services/api';
import { Container } from './styles.module.scss';
import { store } from 'react-notifications-component';
import { Route, Switch } from 'react-router-dom';

function List({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getStudents() {
      try {
        await api
          .get('/admin/student')
          .then((response) => setStudents(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getStudents();
  }, [setIsLinkActive]);
  const [students, setStudents] = useState([]);

  const columns = [
    { title: '#', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Sobrenome', field: 'surname' },
    { title: 'RA', field: 'ra' },
    { title: 'Curso', field: 'class' },
    { title: 'Campus', field: 'campus' },
    { title: 'Período', field: 'period' },
  ];
  async function handleDelete(option, id) {
    if (option) {
      try {
        await api
          .delete(`admin/student/${id}`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then(() =>
            store.addNotification({
              title: 'Sucesso',
              message: `O aluno foi desativado do sistema com sucesso.`,
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
          message: `Não foi possível desativar o student do sistema.`,
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
          title={'studentes'}
          columnsName={columns}
          rows={students}
          deleteBtn={handleDelete}
          student={true}
        />
      </div>
    </>
  );
}

export default List;

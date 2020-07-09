import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './Pages/Layout';
import Loader from './Pages/Loader';
import Error from './Pages/Error';
import { FaUserGraduate, FaUserMd, FaUniversity } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';

const LoadableProfessor = Loadable({
  loader: () => import('./Pages/Admin/Professor'),
  loading: Loader,
});
const LoadableStudent = Loadable({
  loader: () => import('./Pages/Admin/Student'),
  loading: Loader,
});

const LoadableClass = Loadable({
  loader: () => import('./Pages/Admin/Class'),
  loading: Loader,
});

const LoadableServiceArea = Loadable({
  loader: () => import('./Pages/Admin/ServiceArea'),
  loading: Loader,
});
function Admin() {
  useEffect(() => {
    setType(localStorage.getItem('type'));
  }, []);

  const [type, setType] = useState('');

  const [isActive, setIsActive] = useState(0);

  return (
    <>
      <Layout
        link1={'/admin/professor'}
        link2={'/admin/student'}
        link3={'/admin/class'}
        link4={'/admin/service-area'}
        name1={'Professor'}
        name2={'Aluno'}
        name3={'Curso'}
        name4={'Atendimento'}
        icon1={<FaUserMd />}
        icon2={<FaUserGraduate />}
        icon3={<FaUniversity />}
        icon4={<RiHandHeartLine />}
        activeTab={isActive}
      >
        <Switch>
          <Route
            path="/admin/professor"
            render={(props) => (
              <LoadableProfessor {...props} setIsActive={setIsActive} />
            )}
          />
          <Route
            path="/admin/student"
            render={(props) => (
              <LoadableStudent {...props} setIsActive={setIsActive} />
            )}
          />
          <Route
            path="/admin/class"
            render={(props) => (
              <LoadableClass {...props} setIsActive={setIsActive} />
            )}
          />
          <Route
            path="/admin/service-area"
            render={(props) => (
              <LoadableServiceArea {...props} setIsActive={setIsActive} />
            )}
          />
        </Switch>
      </Layout>
    </>
  );
}

export default Admin;

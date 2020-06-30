import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './Pages/Layout';
import Loader from './Pages/Loader';
import Error from './Pages/Error';
import { FaUserGraduate, FaUserMd } from 'react-icons/fa';

const LoadableProfessor = Loadable({
  loader: () => import('./Pages/Admin/Professor'),
  loading: Loader,
});
const LoadableStudent = Loadable({
  loader: () => import('./Pages/Admin/Student'),
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
        name1={'Professor'}
        name2={'Aluno'}
        icon1={<FaUserMd />}
        icon2={<FaUserGraduate />}
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
        </Switch>
      </Layout>
    </>
  );
}

export default Admin;

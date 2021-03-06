import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './pages/Layout';
import Loader from './pages/Loader';
import Error from './pages/Error';
import { FaUserGraduate, FaUserMd, FaUniversity } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import { RiQuestionLine } from 'react-icons/ri';

const LoadableSupervisor = Loadable({
  loader: () => import('./pages/Admin/Supervisor'),
  loading: Loader,
});
const LoadableStudent = Loadable({
  loader: () => import('./pages/Admin/Student'),
  loading: Loader,
});

// const LoadableClass = Loadable({
//   loader: () => import('./pages/Admin/Class'),
//   loading: Loader,
// });

const LoadableServiceArea = Loadable({
  loader: () => import('./pages/Admin/ServiceArea'),
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
        link1={'/admin/supervisor'}
        link2={'/admin/student'}
        link3={'/admin/class'}
        link4={'/admin/service-area'}
        link5={'/admin'}
        link6={'/admin'}
        name1={'Supervisor'}
        name2={'Aluno'}
        name3={'Curso'}
        name4={'???'}
        name5={'???'}
        name6={'???'}
        icon1={<FaUserMd />}
        icon2={<FaUserGraduate />}
        icon3={<FaUniversity />}
        icon4={<RiHandHeartLine />}
        icon5={<RiQuestionLine />}
        icon6={<RiQuestionLine />}
        activeTab={isActive}
      >
        <Switch>
          <Route
            path="/admin/supervisor"
            render={(props) => (
              <LoadableSupervisor {...props} setIsActive={setIsActive} />
            )}
          />
          <Route
            path="/admin/student"
            render={(props) => (
              <LoadableStudent {...props} setIsActive={setIsActive} />
            )}
          />
          {/* <Route
            path="/admin/class"
            render={(props) => (
              <LoadableClass {...props} setIsActive={setIsActive} />
            )}
          /> */}
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

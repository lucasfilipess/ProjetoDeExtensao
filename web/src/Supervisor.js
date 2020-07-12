import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Pages/Loader';
import Layout from './Pages/Layout';
import { FaUserGraduate, FaUserMd, FaUniversity } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import { AiTwotoneCalendar } from 'react-icons/ai';

const LoadableProfile = Loadable({
  loader: () => import('./Pages/Supervisor/Profile'),
  loading: Loader,
});
const LoadableAvailability = Loadable({
  loader: () => import('./Pages/Supervisor/Availability'),
  loading: Loader,
});

function Professor() {
  const [isActive, setIsActive] = useState(0);

  return (
    <Layout
      link1={'/supervisor'}
      link2={'/supervisor/availability'}
      // link3={'/admin/class'}
      // link4={'/admin/service-area'}
      name1={'Perfil'}
      name2={'Consultas'}
      // name3={'Curso'}
      // name4={'Atendimento'}
      icon1={<FaUserMd />}
      icon2={<AiTwotoneCalendar />}
      // icon3={<FaUniversity />}
      // icon4={<RiHandHeartLine />}
      activeTab={isActive}
    >
      <Switch>
        <Route
          exact
          path="/supervisor"
          render={(props) => (
            <LoadableProfile {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          // exact
          path="/supervisor/availability"
          render={(props) => (
            <LoadableAvailability {...props} setIsActive={setIsActive} />
          )}
        />
      </Switch>
    </Layout>
  );
}

export default Professor;

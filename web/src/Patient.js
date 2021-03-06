import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './pages/Layout';
import Loader from './pages/Loader';
import {
  RiDashboardLine,
  RiSettings4Line,
  RiHandHeartLine,
} from 'react-icons/ri';
import { RiQuestionLine } from 'react-icons/ri';

import { FaHandsHelping } from 'react-icons/fa';
const LoadableDashboard = Loadable({
  loader: () => import('./pages/Patient/Dashboard'),
  loading: Loader,
});
const LoadableSettings = Loadable({
  loader: () => import('./pages/Patient/Settings'),
  loading: Loader,
});

const LoadableServiceArea = Loadable({
  loader: () => import('./pages/Patient/ServiceArea'),
  loading: Loader,
});
const LoadableAccompanied = Loadable({
  loader: () => import('./pages/Patient/Accompanied'),
  loading: Loader,
});

function App() {
  const [isActive, setIsActive] = useState(0);

  return (
    <Layout
      link1={'/patient'}
      link2={'/patient/service-area'}
      link3={'/patient/accompanied'}
      link4={'/patient/settings'}
      link5={'/patient'}
      link6={'/patient'}
      name1={'Dashboard'}
      name2={'Atendimento'}
      name3={'Acompanhante'}
      name4={'Configurações'}
      name5={'???'}
      name6={'???'}
      icon1={<RiDashboardLine />}
      icon2={<RiHandHeartLine />}
      icon3={<FaHandsHelping />}
      icon4={<RiSettings4Line />}
      icon5={<RiQuestionLine />}
      icon6={<RiQuestionLine />}
      activeTab={isActive}
    >
      <Switch>
        <Route
          exact
          path="/patient"
          render={(props) => (
            <LoadableDashboard {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/patient/settings"
          render={(props) => (
            <LoadableSettings {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/patient/service-area"
          render={(props) => (
            <LoadableServiceArea {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/patient/accompanied"
          render={(props) => (
            <LoadableAccompanied {...props} setIsActive={setIsActive} />
          )}
        />
      </Switch>
    </Layout>
  );
}

export default App;

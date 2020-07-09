import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './Pages/Layout';
import Loader from './Pages/Loader';
import {
  RiDashboardLine,
  RiSettings4Line,
  RiHandHeartLine,
} from 'react-icons/ri';
import { FaHandsHelping } from 'react-icons/fa';
const LoadableDashboard = Loadable({
  loader: () => import('./Pages/Patient/Dashboard'),
  loading: Loader,
});
const LoadableSettings = Loadable({
  loader: () => import('./Pages/Patient/Settings'),
  loading: Loader,
});

const LoadableServiceArea = Loadable({
  loader: () => import('./Pages/Patient/ServiceArea'),
  loading: Loader,
});
const LoadableAccompanied = Loadable({
  loader: () => import('./Pages/Patient/Accompanied'),
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
      name1={'Dashboard'}
      name2={'Atendimento'}
      name3={'Acompanhante'}
      name4={'Configurações'}
      icon1={<RiDashboardLine />}
      icon2={<RiHandHeartLine />}
      icon3={<FaHandsHelping />}
      icon4={<RiSettings4Line />}
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

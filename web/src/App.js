import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './pages/Layout';

export function Loader() {
  return <div>Carregando...</div>;
}

const LoadableDashboard = Loadable({
  loader: () => import('./pages/Dashboard'),
  loading: Loader,
});
const LoadableSettings = Loadable({
  loader: () => import('./pages/Settings'),
  loading: Loader,
});

const LoadableServiceArea = Loadable({
  loader: () => import('./pages/ServiceArea'),
  loading: Loader,
});

function App() {
  const [isActive, setIsActive] = useState(0);

  return (
    <Layout
      tab1={'/home'}
      tab2={'/home/service-area'}
      tab3={'/home'}
      tab4={'/home'}
      tab5={'/home'}
      tab6={'/home/settings'}
      activeTab={isActive}
    >
      <Switch>
        <Route
          exact
          path="/home"
          render={(props) => (
            <LoadableDashboard {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/home/settings"
          render={(props) => (
            <LoadableSettings {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/home/service-area"
          render={(props) => (
            <LoadableServiceArea {...props} setIsActive={setIsActive} />
          )}
        />
      </Switch>
    </Layout>
  );
}

export default App;

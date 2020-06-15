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

function App() {
  const [isActive, setIsActive] = useState(1);

  return (
    <Layout activeTab={isActive}>
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
      </Switch>
    </Layout>
  );
}

export default App;

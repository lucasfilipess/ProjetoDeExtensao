import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Pages/Loader';
import Layout from './Pages/Layout';

// const LoadableDashboard = Loadable({
//   loader: () => import('./pages/Dashboard'),
//   loading: Loader,
// });

function Professor() {
  const [isActive, setIsActive] = useState(0);

  return (
    <Layout
      tab1={'/professor'}
      tab2={'/professor/service-area'}
      tab3={'/professor'}
      tab4={'/professor'}
      tab5={'/professor'}
      tab6={'/professor/settings'}
      activeTab={isActive}
    >
      <Switch>
        {/* <Route
          exact
          path="/professor"
          render={(props) => (
            <LoadableDashboard {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/professor/settings"
          render={(props) => (
            <LoadableSettings {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/professor/service-area"
          render={(props) => (
            <LoadableServiceArea {...props} setIsActive={setIsActive} />
          )}
        /> */}
      </Switch>
    </Layout>
  );
}

export default Professor;

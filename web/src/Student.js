import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './pages/Loader';
import Layout from './pages/Layout';

// const LoadableDashboard = Loadable({
//   loader: () => import('./pages/Dashboard'),
//   loading: Loader,
// });

function Student() {
  const [isActive, setIsActive] = useState(0);

  return (
    <Layout
      tab1={'/student'}
      tab2={'/student/service-area'}
      tab3={'/student'}
      tab4={'/student'}
      tab5={'/student'}
      tab6={'/student/settings'}
      activeTab={isActive}
    >
      <Switch>
        {/* <Route
          exact
          path="/student"
          render={(props) => (
            <LoadableDashboard {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/student/settings"
          render={(props) => (
            <LoadableSettings {...props} setIsActive={setIsActive} />
          )}
        />
        <Route
          path="/student/service-area"
          render={(props) => (
            <LoadableServiceArea {...props} setIsActive={setIsActive} />
          )}
        /> */}
      </Switch>
    </Layout>
  );
}

export default Student;

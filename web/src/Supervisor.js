import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Pages/Loader';
import Layout from './Pages/Layout';
import { FaUserGraduate, FaUserMd, FaUniversity } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { RiQuestionLine } from 'react-icons/ri';

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
      link3={'/supervisor'}
      link4={'/supervisor'}
      link5={'/supervisor'}
      link6={'/supervisor'}
      name1={'Perfil'}
      name2={'Consultas'}
      name3={'???'}
      name4={'???'}
      name5={'???'}
      name6={'???'}
      icon1={<FaUserMd />}
      icon2={<AiTwotoneCalendar />}
      icon3={<RiQuestionLine />}
      icon4={<RiQuestionLine />}
      icon5={<RiQuestionLine />}
      icon6={<RiQuestionLine />}
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

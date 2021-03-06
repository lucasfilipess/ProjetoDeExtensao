import React, { useEffect, useState } from 'react';
import { Nav, Content, ActiveLink, StyledLink } from './styles.module.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../Loader';

const LoadableSettingsProfile = Loadable({
  loader: () => import('./SettingsProfile'),
  loading: Loader,
});

const LoadableSettingsNotifications = Loadable({
  loader: () => import('./SettingsNotifications'),
  loading: Loader,
});
const LoadableSettingsConsultations = Loadable({
  loader: () => import('./SettingsConsultations'),
  loading: Loader,
});

function Settings({ setIsActive }) {
  useEffect(() => {
    setIsActive(4);
  }, [setIsActive]);

  const [isLinkActive, setIsLinkActive] = useState(null);

  return (
    <>
      <div className={Nav}>
        <div>
          <Link
            to="/patient/settings"
            className={isLinkActive === 1 ? ActiveLink : StyledLink}
          >
            Perfil
          </Link>
          <Link
            to="/patient/settings/consultations"
            className={isLinkActive === 2 ? ActiveLink : StyledLink}
          >
            Consultas
          </Link>
          <Link
            to="/patient/settings/notifications"
            className={isLinkActive === 3 ? ActiveLink : StyledLink}
          >
            Notificações
          </Link>
        </div>
      </div>
      <div className={Content}>
        <Switch>
          <Route
            exact
            path="/patient/settings"
            render={(props) => (
              <LoadableSettingsProfile
                {...props}
                setIsLinkActive={setIsLinkActive}
              />
            )}
          />
          <Route
            path="/patient/settings/consultations"
            render={(props) => (
              <LoadableSettingsConsultations
                {...props}
                setIsLinkActive={setIsLinkActive}
              />
            )}
          />
          <Route
            path="/patient/settings/notifications"
            render={(props) => (
              <LoadableSettingsNotifications
                {...props}
                setIsLinkActive={setIsLinkActive}
              />
            )}
          />
        </Switch>
      </div>
    </>
  );
}

export default Settings;

import React, { useEffect, useState } from 'react';
import { Nav, Content, ActiveLink, StyledLink } from './styles.module.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loader } from '../../App';

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
    setIsActive(6);
  }, [setIsActive]);

  const [isLinkActive, setIsLinkActive] = useState(null);

  return (
    <>
      <div className={Nav}>
        <div>
          <Link
            to="/home/settings"
            className={isLinkActive === 1 ? ActiveLink : StyledLink}
          >
            Perfil
          </Link>
          <Link
            to="/home/settings/consultations"
            className={isLinkActive === 2 ? ActiveLink : StyledLink}
          >
            Consultas
          </Link>
          <Link
            to="/home/settings/notifications"
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
            path="/home/settings"
            render={(props) => (
              <LoadableSettingsProfile
                {...props}
                setIsLinkActive={setIsLinkActive}
              />
            )}
          />
          <Route
            path="/home/settings/consultations"
            render={(props) => (
              <LoadableSettingsConsultations
                {...props}
                setIsLinkActive={setIsLinkActive}
              />
            )}
          />
          <Route
            path="/home/settings/notifications"
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

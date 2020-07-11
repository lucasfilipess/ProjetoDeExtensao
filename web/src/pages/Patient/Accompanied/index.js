import React, { useEffect, useState } from 'react';
import { Nav, Content, ActiveLink, StyledLink } from './styles.module.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../Loader';

const LoadableTable = Loadable({
  loader: () => import('./Table'),
  loading: Loader,
});

const LoadableAdd = Loadable({
  loader: () => import('./Add'),
  loading: Loader,
});
function Settings({ setIsActive }) {
  useEffect(() => {
    setIsActive(3);
  }, [setIsActive]);

  const [isLinkActive, setIsLinkActive] = useState(null);

  return (
    <>
      <div className={Nav}>
        <div>
          <Link
            to="/patient/accompanied"
            className={isLinkActive === 1 ? ActiveLink : StyledLink}
          >
            Acompanhados
          </Link>
          <Link
            to="/patient/accompanied/add"
            className={isLinkActive === 2 ? ActiveLink : StyledLink}
          >
            Cadastrar
          </Link>
        </div>
      </div>
      <div className={Content}>
        <Switch>
          <Route
            exact
            path="/patient/accompanied"
            render={(props) => (
              <LoadableTable {...props} setIsLinkActive={setIsLinkActive} />
            )}
          />
          <Route
            exact
            path="/patient/accompanied/add"
            render={(props) => (
              <LoadableAdd {...props} setIsLinkActive={setIsLinkActive} />
            )}
          />
        </Switch>
      </div>
    </>
  );
}

export default Settings;

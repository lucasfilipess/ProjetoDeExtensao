import React, { useEffect, useState } from 'react';
import { Nav, Content, ActiveLink, StyledLink } from './styles.module.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../Loader';

const LoadableAdd = Loadable({
  loader: () => import('./Add'),
  loading: Loader,
});

const LoadableList = Loadable({
  loader: () => import('./List'),
  loading: Loader,
});
const LoadableListActions = Loadable({
  loader: () => import('./ListActions'),
  loading: Loader,
});
function ClassSettings({ setIsActive }) {
  useEffect(() => {
    setIsActive(2);
  }, [setIsActive]);

  const [isLinkActive, setIsLinkActive] = useState(null);

  return (
    <>
      <div className={Nav}>
        <div>
          <Link
            to="/supervisor/availability"
            className={isLinkActive === 1 ? ActiveLink : StyledLink}
          >
            Agendadas
          </Link>
          <Link
            to="/supervisor/availability/list"
            className={isLinkActive === 2 ? ActiveLink : StyledLink}
          >
            Disponibilidades
          </Link>
          <Link
            to="/supervisor/availability/add"
            className={isLinkActive === 3 ? ActiveLink : StyledLink}
          >
            Cadastrar
          </Link>
        </div>
      </div>
      <div className={Content}>
        <Switch>
          <Route
            exact
            path="/supervisor/availability"
            render={(props) => (
              <LoadableList {...props} setIsLinkActive={setIsLinkActive} />
            )}
          />
          <Route
            exact
            path="/supervisor/availability/add"
            render={(props) => (
              <LoadableAdd {...props} setIsLinkActive={setIsLinkActive} />
            )}
          />
          <Route
            exact
            path="/supervisor/availability/list"
            render={(props) => (
              <LoadableListActions
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

export default ClassSettings;

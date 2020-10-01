import React, { useEffect, useState } from 'react';
import { Nav, Content, ActiveLink, StyledLink } from './styles.module.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../../Loader';

const LoadableAdd = Loadable({
  loader: () => import('./Add'),
  loading: Loader,
});

const LoadableList = Loadable({
  loader: () => import('./List'),
  loading: Loader,
});
function ClassSettings({ setIsActive }) {
  useEffect(() => {
    setIsActive(3);
  }, [setIsActive]);

  const [isLinkActive, setIsLinkActive] = useState(null);

  return (
    <>
      <div className={Nav}>
        <div>
          <Link
            to="/admin/class"
            className={isLinkActive === 1 ? ActiveLink : StyledLink}
          >
            Cursos
          </Link>
          <Link
            to="/admin/class/add"
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
            path="/admin/class"
            render={(props) => (
              <LoadableList {...props} setIsLinkActive={setIsLinkActive} />
            )}
          />
          <Route
            exact
            path="/admin/class/add"
            render={(props) => (
              <LoadableAdd {...props} setIsLinkActive={setIsLinkActive} />
            )}
          />
        </Switch>
      </div>
    </>
  );
}

export default ClassSettings;

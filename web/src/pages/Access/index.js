import React from 'react';
import { Container, Banner } from './styles.module.scss';
import loginBanner from '../../Assets/images/login-banner.jpg';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function Access() {
  return (
    <>
      <div className={Container}>
        <Switch>
          <Route exact path="/access" component={Register} />
          <Route exact path="/access/login" component={Login} />
        </Switch>
        <div className={Banner}>
          <img src={loginBanner} alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Access;

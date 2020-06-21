import React from 'react';
import { Container, Banner } from './styles.module.scss';
import loginBanner from '../../assets/images/login-banner.jpg';
import Login from './Login';

function Access() {
  return (
    <>
      <div className={Container}>
        <Login />
        <div className={Banner}>
          <img src={loginBanner} alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Access;

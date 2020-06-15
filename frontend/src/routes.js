import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon/';
import App from './App';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon}></Route>
        <Route path="/home" component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

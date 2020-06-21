import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Access from './pages/Access';
import Login from './pages/Access/Login';
import App from './App';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Access}></Route>
        <Route path="/admin" component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

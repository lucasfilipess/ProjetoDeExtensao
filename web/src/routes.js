import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Access from './Pages/Access';
import Patient from './Patient';
import Admin from './Admin';
import Supervisor from './Supervisor';
import Student from './Student';
import WebPage from './Pages/WebPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WebPage}></Route>
        <Route path="/access" component={Access}></Route>
        <Route path="/patient" component={Patient}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/supervisor" component={Supervisor}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

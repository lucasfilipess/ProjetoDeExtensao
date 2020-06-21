import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Access from './pages/Access';
import App from './App';
import WebPage from './pages/WebPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WebPage}></Route>
        <Route path="/access" component={Access}></Route>
        <Route path="/home" component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

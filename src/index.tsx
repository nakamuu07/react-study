import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PagesComponent from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route component={PagesComponent} exact={false} path="/" />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

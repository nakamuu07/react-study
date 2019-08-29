import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import PagesComponent from './pages';
import reducers from './reducers';
import sagas from './sagas';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [middleware, sagaMiddleware];

const logger = createLogger({
  collapsed: true,
  diff: true
});

middlewares.push(logger);

const store = createStore(reducers);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={PagesComponent} exact={false} path="/" />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';

import configureStore from './store';

const lsKeys = Object.keys(localStorage);
let fetching = false;

for (let i = 0; i < lsKeys.length; i++) {
  if (lsKeys[0].includes('firebase:authUser')) {
    fetching = true;
  }
}

const store = configureStore(fetching);

render(
  <div>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </div>,
  document.querySelector('#app'),
);

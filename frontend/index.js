import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';

import configureStore from './store';

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </div>,
  document.querySelector('#app'),
);

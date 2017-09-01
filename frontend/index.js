import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import AppRoutes from './routes';

render(
  <div>
    <AppRoutes />
  </div>,
  document.querySelector('#app'),
);

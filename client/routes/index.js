import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  AuthRoute,
  NoAuthRoute,
} from '../middleware';

import {
  App,
  Auth,
  Track,
} from '../layouts';

const AppRoutes = () => (
  <Router>
    <div>
      <AuthRoute path="/track" Component={Track} />
      <Route path="/login" component={Auth} />
      <Route path="/signup" component={Auth} />
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

export default AppRoutes;

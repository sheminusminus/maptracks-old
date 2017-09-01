import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Track } from '../layouts';

const AppRoutes = () => (
  <Router>
    <div>
      <Route path="/track" component={Track} />
      <Route path="/" component={Track} />
    </div>
  </Router>
);

export default AppRoutes;

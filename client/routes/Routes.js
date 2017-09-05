import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  AuthRoute,
  NoAuthRoute,
} from '../middleware';

import {
  App,
  Auth,
  NotFound,
  Track,
  UserMain,
} from '../layouts';

class Routes extends React.Component {
  componentDidMount() {
    const {
      getFirebaseConfig,
    } = this.props;

    getFirebaseConfig();
  }

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <NoAuthRoute path="/login" Component={Auth} />
            <NoAuthRoute path="/signup" Component={Auth} />
            <AuthRoute path="/track" Component={Track} />
            <AuthRoute exact path="/" Component={UserMain} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default Routes;

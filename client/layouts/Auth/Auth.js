import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './Auth.css';

import {
  Login,
  Register,
} from '../../components';

class Auth extends React.Component {
  render() {
    return (
      <div
        className={styles.auth}>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </div>
    );
  }
}

export default Auth;

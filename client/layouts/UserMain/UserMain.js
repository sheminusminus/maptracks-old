import React from 'react';
import { Route } from 'react-router-dom';

import {
  ConnectSpotify,
  UserOptions,
} from '../../components';

class UserMain extends React.Component {
  render() {
    return (
      <div>
        <Route path="/spotify" component={ConnectSpotify} />
        <Route exact path="/" component={UserOptions} />
      </div>
    );
  }
}

export default UserMain;

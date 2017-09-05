import React from 'react';
import { Route } from 'react-router-dom';

import {
  ConnectSpotify,
} from '../../components';

class UserMain extends React.Component {
  render() {
    return (
      <div>
        <Route path="/me/spotify" component={ConnectSpotify} />
      </div>
    );
  }
}

export default UserMain;

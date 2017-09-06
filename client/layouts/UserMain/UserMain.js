import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ConnectSpotify,
  UserOptions,
  SpotifyRecent,
} from '../../components';

class UserMain extends React.Component {
  render() {
    return (
      <div>
        <Route path="/spotify/recent" component={SpotifyRecent} />
        <Route exact path="/spotify" component={ConnectSpotify} />
        <Route exact path="/" component={UserOptions} />
      </div>
    );
  }
}

export default UserMain;

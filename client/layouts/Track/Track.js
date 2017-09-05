import React from 'react';

import styles from './Track.css';

import { Map } from '../../components';

class Track extends React.Component {
  render() {
    return (
      <div
        className={styles.track}>
        <Map />
      </div>
    );
  }
}

export default Track;

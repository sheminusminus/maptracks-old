import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== null && nextProps.open !== undefined) {
      this.setState({
        open: nextProps.open,
      });
    }
  }

  render() {
    const {
      logout,
      spotifyAuth,
      uid,
    } = this.props;

    const open = this.state.open;
    const classes = open ? styles.menuWrapperOpen : styles.menuWrapper;

    return (
      <div
        className={classes}>
        <ul
          className={styles.menu}>
          <li
            className={styles.menuItem}>
            <Link to="/track">
              Map Tracks
            </Link>
          </li>
          <li
            className={styles.menuItem}>
            <Link to="/spotify/recent">
              Recently Played
            </Link>
          </li>
          <li
            className={styles.menuItem}>
            <a href={`/spotify/auth/${uid}`}>
              Connect Spotify
            </a>
          </li>
          <li
            onClick={logout}
            className={styles.menuItem}>
            Logout
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;


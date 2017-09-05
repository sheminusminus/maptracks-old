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
    const { logout } = this.props;
    const open = this.state.open;
    const classes = open ? styles.menuWrapperOpen : styles.menuWrapper;

    return (
      <div
        className={classes}>
        <ul
          className={styles.menu}>
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


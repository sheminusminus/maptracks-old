import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppHeader.css';

const AppHeader = props => (
  <div
    className={styles.appHeader}>
    <div
      onClick={props.handleMenuToggle}
      className={styles.menuIcon}>
      {String.fromCharCode(8942)}
    </div>
    <div
      className={styles.titleWrapper}>
      <h1 className={styles.title}>Ghostlist</h1>
    </div>
  </div>
);

export default AppHeader;


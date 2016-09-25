/**
*
* Logo
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/" className="resetAnchor">
        <span className={styles.logo}>
          Coin<strong>Dash</strong>
        </span>
      </Link>
    </div>
  );
}

export default Logo;

/**
*
* TopNav
*
*/

import React from 'react';

import Logo from 'components/Logo';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

/* eslint-disable jsx-a11y/href-no-hash */
function UserButton() {
  return (
    <a href="#"><FormattedMessage {...messages.hi} />, User</a>
  );
}

function TopNav() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.navButtons}>
        <UserButton />
      </div>
    </div>
  );
}

export default TopNav;

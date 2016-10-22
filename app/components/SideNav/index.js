/**
*
* SideNav
*
*/

import React from 'react';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

const buttons = [
  {
    id: 'dashboard',
    route: '/dashboard',
    text: messages.dashboard
  },
  {
    id: 'investments',
    route: '/investments',
    text: messages.investments
  },
  {
    id: 'transactions',
    route: '/transactions',
    text: messages.transactions
  }
];

function SideNav() {
  return (
    <div className={styles.sideNav}>
      <ul className={styles.buttonList}>
        {buttons.map((button) => {
          return (
            <li key={button.id} className={styles.button}>
              <Link to={button.route}>
                <FormattedMessage {...button.text} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNav;

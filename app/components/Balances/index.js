/**
*
* Balances
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Balances() {
  return (
    <div className={styles.balances}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Balances;

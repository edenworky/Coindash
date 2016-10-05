/**
*
* BalanceCell
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class BalanceCell extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.balanceCell}>
        { this.props.name + ": " +  this.props.balance }
      </div>
    );
  }
}

export default BalanceCell;

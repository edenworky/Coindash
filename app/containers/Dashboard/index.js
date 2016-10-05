/*
 *
 * Dashboard
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectDashboard from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import { BalancesContainer } from '../BalancesContainer/index';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.dashboard}>
        <BalancesContainer/>
      </div>
      // <div className={styles.dashboard}>
      //   <FormattedMessage {...messages.header} />
      // </div>
    );
  }
}

const mapStateToProps = selectDashboard();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

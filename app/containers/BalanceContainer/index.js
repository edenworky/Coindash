/*
 *
 * BalanceContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBalanceContainer from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import BalanceCell from 'components/BalanceCell';
import BigNumber from 'bignumber.js';
import { AjaxUtils } from '../../utils/AjaxUtils'

export class BalanceContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {    
    super(props);

    this.state = {
      balance: 0,
      name: ""
    };
  }

  componentDidMount() {
    if (!this.props.token) {
      return;
    }

    this.setState({name: this.props.token.symbol});

    let data = AjaxUtils.queryParams(this.props.token.balanceCallData());
    let data2 = $.param(this.props.token.balanceCallData());
    let serverUrl = "https://rpc.myetherwallet.com:8443/api.mew";
    let parentObj = this;

    fetch(serverUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (!data.error) {
        if (parentObj.props.token.symbol == "ETH") {
          parentObj.props.token.balance = data.data.balance;
          var _balance = parentObj.props.token.weiBalance();
          this.setState({balance: _balance});
        }
        else {
          var decimal = parentObj.props.token.decimal;
          var _balance = new BigNumber(data.data).div(new BigNumber(10).pow(decimal));
          this.setState({balance: _balance});
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <BalanceCell balance={ this.state.balance } name={ this.state.name }/>
    );
  }
}

const mapStateToProps = selectBalanceContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);

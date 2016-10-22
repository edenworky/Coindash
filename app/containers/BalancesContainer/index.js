/*
 *
 * BalancesContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBalancesContainer from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import { Token } from '../../utils/Wallet/Token'
import Wallet from '../../utils/Wallet/Wallet'
import { BalanceContainer } from '../BalanceContainer/index'
import SkyLight from 'react-skylight';
import TokenForm from 'components/TokenForm';

export class BalancesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {    
    super(props);
    this.state = {
      tokens: [],
      title: "Loading"
    };
  }

  componentDidMount() {    
    this.setState({tokens: Wallet.getTokens()})
  }

  render() {
    return (
      <div>
        <div>
          <ul className="user-list">
            {this.state.tokens.map(function(token) {
              return (
                <li key={token.contractAddress}>
                  <BalanceContainer token={ token } />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button onClick={() => this.refs.simpleDialog.show()}>Add token</button>
          <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Add Token">
          <br/><br/>
            <TokenForm onSubmited={this.onSubmitedToken.bind(this)} />
          </SkyLight>
        </div>
      </div>
    );
  }


  onSubmitedToken(symbol, address, decimal) {
    W.addToken(symbol, address, parseInt(decimal));
    this.setState({tokens: Wallet.getTokens()})
  }

}

const mapStateToProps = selectBalancesContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BalancesContainer);

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
import { Token } from './Token'
import { BalanceContainer } from '../BalanceContainer/index'

export class BalancesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {    
    super(props);
    this.state = {
      tokens: [],
      title: "Loading"
    };
  }

  componentDidMount() {    

    var hardCodedTokens = [{
                "address": "",
                "symbol" : "ETH",
                "decimal" : 0
              },
              {
                "address": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
                "symbol": "DAO",
                "decimal": 16
              },
              {
                "address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
                "symbol": "DGD",
                "decimal": 9
              },
              {
                "address": "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
                "symbol": "MKR",
                "decimal": 18
              },
              {
                "address": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
                "symbol": "🦄 Unicorn",
                "decimal": 0
              },
              {
                "address": "0x74c1e4b8cae59269ec1d85d3d4f324396048f4ac",
                "symbol": "🍺 BeerCoin",
                "decimal": 0
              }];
    var _tokens = [];
    for (var i = 0; i < hardCodedTokens.length; i++) {
      _tokens.push(new Token(hardCodedTokens[i].address,
                             "d7e10d75cf87abc5a2f34a83ccf27cd54108cbc3", 
                             hardCodedTokens[i].symbol, 
                             hardCodedTokens[i].decimal)
                  );
    }
    this.setState({tokens: _tokens})
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
      </div>
    );
  }
}

const mapStateToProps = selectBalancesContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BalancesContainer);

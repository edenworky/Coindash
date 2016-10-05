import { Token } from './Token'

export class Wallet {
	static walletFromDisk() {
		return new Wallet();
	}

	constructor(props) {    
	    this.walletAddress = "d7e10d75cf87abc5a2f34a83ccf27cd54108cbc3";
	}

	// tokens
	getTokens() {
		var allTokens = Wallet.allTokens();
	    var _tokens = [];
	    for (var i = 0; i < allTokens.length; i++) {
	      let address = allTokens[i].address;
	      let symbol = allTokens[i].symbol;
	      let decimal = allTokens[i].decimal;

    	  console.log("token symbol: " + symbol + ", address: " + address + ", decimal: " + decimal);


	      if (address == null || symbol == null || decimal == null) continue;

	      _tokens.push(new Token(allTokens[i].address,
	                             this.walletAddress, 
	                             allTokens[i].symbol, 
	                             allTokens[i].decimal)
	                  );
	    }
	    return _tokens;
	}

	addToken(token) {
		this.addToken(token.symbol, token.contractAddress, token.decimal);
	}

	addToken(symbol, address, decimal) {
		console.log("adding token with symbol: " + symbol + ", address: " + address + ", decimal: " + decimal);
		var tokens = Wallet.savedTokens() 
		tokens.push({
					address: address,
					symbol: symbol,
					decimal: decimal
				});
		localStorage.setItem("localTokens",JSON.stringify(tokens));
	}

	static allTokens() {
		return Wallet.savedTokens().concat(Wallet.hardcodedTokes());
	}


	static savedTokens() {
	    return localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
	}

	static hardcodedTokes() {
		return [{
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
	}
}

const W = Wallet.walletFromDisk();
Object.freeze(W);
export default W;
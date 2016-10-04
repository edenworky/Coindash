export class Token {
	constructor(contractAddress, userAddress, symbol, decimal) {
	    this.contractAddress = contractAddress;
		this.userAddress = userAddress
		this.symbol = symbol;
		this.decimal = decimal;
	}

	prettyName() {
		return this.symbol;
	}

	// const hardCodedTokens = [{
	// 							"address": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
	// 							"symbol": "DAO",
	// 							"decimal": 16
	// 						},
	// 						{
	// 							"address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
	// 							"symbol": "DGD",
	// 							"decimal": 9
	// 						},
	// 						{
	// 							"address": "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
	// 							"symbol": "MKR",
	// 							"decimal": 18
	// 						},
	// 						{
	// 							"address": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
	// 							"symbol": "🦄 Unicorn",
	// 							"decimal": 0
	// 						},
	// 						{
	// 							"address": "0x74c1e4b8cae59269ec1d85d3d4f324396048f4ac",
	// 							"symbol": "🍺 BeerCoin",
	// 							"decimal": 0
	// 						}];
}
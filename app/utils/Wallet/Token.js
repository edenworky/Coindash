
import BigNumber from 'bignumber.js';

export class Token {

	constructor(contractAddress, userAddress, symbol, decimal) {
	    this.contractAddress = contractAddress;
		this.userAddress = userAddress
		this.symbol = symbol;
		this.decimal = decimal;
		this.balance = 0;
		this.balanceHex = "0x70a08231";

		this.unitMap = {
			'wei': '1',
			'kwei': '1000',
			'ada': '1000',
			'femtoether': '1000',
			'mwei': '1000000',
			'babbage': '1000000',
			'picoether': '1000000',
			'gwei': '1000000000',
			'shannon': '1000000000',
			'nanoether': '1000000000',
			'nano': '1000000000',
			'szabo': '1000000000000',
			'microether': '1000000000000',
			'micro': '1000000000000',
			'finney': '1000000000000000',
			'milliether': '1000000000000000',
			'milli': '1000000000000000',
			'ether': '1000000000000000000',
			'kether': '1000000000000000000000',
			'grand': '1000000000000000000000',
			'einstein': '1000000000000000000000',
			'mether': '1000000000000000000000000',
			'gether': '1000000000000000000000000000',
			'tether': '1000000000000000000000000000000'
		};
	}

	// uitl
	prettyName() {
		return this.symbol;
	}

	// ajax utils
	getDataObj(to, func, arrVals) {
		var val="";
	    for(var i=0;i<arrVals.length;i++) val+=this.padLeft(arrVals[i],64);
	    return {to: to, data: func+val};
	}

	padLeft(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	getNakedAddress() {
		return this.userAddress.toLowerCase().replace('0x', '');
	}

	balanceCallData() {
		if (this.symbol != "ETH") {
			var data = this.getDataObj(this.contractAddress,
											 this.balanceHex, 
											 [this.getNakedAddress()]
										 );

			return {
					ethCall: data,
			        isClassic: false
				};
		}
		
		// ETH
		return {
					balance: this.userAddress,
			        isClassic: false
				};
	}


	// balance
	weiBalance() {
		// wei
		var wei = new BigNumber(String(this.balance)).times(this.getValueOfUnit('wei'));
		wei = wei.toString(10);

		var returnValue = new BigNumber(wei).div(this.getValueOfUnit('ether'));
		return returnValue.toString(10);
	}

	getValueOfUnit(unit) {
		unit = unit ? unit.toLowerCase() : 'ether';
		var unitValue = this.unitMap[unit];
		if (unitValue === undefined) {
			throw 0;
		}
		return new BigNumber(unitValue, 10);
	}
}
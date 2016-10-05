/**
*
* AddTokenForm
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import Form from "react-jsonschema-form";

const schema = {
  title: "Fill token details",
  type: "object",
  required: ["Symbol", "ContractAddress", "Decimal"],
  properties: {
    Symbol: {type: "string", title: "Symbol: ", default: ""},
    ContractAddress: {type: "string", title: "Contract Address: ", default: "0x"},
    Decimal: {type: "string", title: "Decimal: ", default: "0"},
  }
};

class AddTokenForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
	constructor(props) {    
	    super(props);		
	}

    render() {
      return (
        <Form schema={schema}
        onSubmit={this.onFormSubmit.bind(this)}
        onError={this.onFormError} />
      );
    }

    onFormSubmit(formData) {
    	this.props.onSubmited(formData.formData.Symbol,
    							formData.formData.ContractAddress,
    							formData.formData.Decimal);
    }

    onFormError(errors) {
    	console.log("error:");
    	console.log(errors);
    }
}

export default AddTokenForm;

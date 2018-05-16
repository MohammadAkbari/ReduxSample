import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class PhoneNumberNotConfirm extends Component {

	sendCode(phoneNumber) {
		this.props.dispatch(settingActionCreators.verifyPhoneNumber(phoneNumber, this.code));
	}

	render() {

		let {phoneNumber, isPrimary, confirmed} = this.props.input;

		return (
			<div>
				<div>
					<span>{phoneNumber} </span> 
					<input type="text" ref={(input) => this.code = input} />
					<button onClick={()=>{this.sendCode(phoneNumber)}}>Send Code</button>
				</div>
			</div>
		);
	}
}

PhoneNumberNotConfirm.propTypes = {
    phoneNumber: PropTypes.string, 
    isPrimary: PropTypes.bool, 
    confirmed: PropTypes.bool
};

export default connect()(PhoneNumberNotConfirm);
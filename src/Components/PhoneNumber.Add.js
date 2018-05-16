import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class PhoneNumberAdd extends Component {

	ondit() {
		this.props.dispatch(settingActionCreators.editPhoneNumbers());
	}

	render() {

		let {phoneNumber, isPrimary, confirmed} = this.props.input;

		return (
			<div>
				<div>
					<span>{phoneNumber} </span> 
                    <span> {isPrimary? "Primary" : 
                            confirmed? "Confirmed" : 
                            "NotConfirmed"} 
                    </span>
					<button onClick={this.ondit.bind(this)}>Edit</button>
				</div>
			</div>
		);
	}
}

PhoneNumberAdd.propTypes = {
    phoneNumber: PropTypes.string, 
    isPrimary: PropTypes.bool, 
    confirmed: PropTypes.bool
};

export default connect()(PhoneNumberAdd);
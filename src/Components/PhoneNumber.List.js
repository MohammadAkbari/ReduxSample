import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class PhoneNumberList extends Component {

	onBack() {
		this.props.dispatch(settingActionCreators.editNameFamily());
	}

	confirm(phoneNumber){
		this.props.dispatch(settingActionCreators.confirmPhoneNumber(phoneNumber));
	}

	render() {

		let items = this.props.items;

		return (
			<div>
				<div>
					{
						items.map((item, index)=>(
							<div key={index}>
								<span>{item.phoneNumber} </span> 
								<span> {
											item.isPrimary? "Primary" : 
												item.confirmed? "Confirmed" : "NotConfirmed"
										} 
								</span>
								<button onClick={()=>{this.confirm(item.phoneNumber)}}>Confirm</button>
							</div>
						))
					}
					<button onClick={this.onBack.bind(this)}>Back</button>
				</div>
			</div>
		);
	}
}

PhoneNumberList.propTypes = {
    items: PropTypes.array
};

export default connect()(PhoneNumberList);
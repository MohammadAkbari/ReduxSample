import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class DisplayPrivateInfo extends Component {

	onNameFamilyEdit() {
		this.props.dispatch(settingActionCreators.editNameFamily());
	}

	render() {

		let {name, family} = this.props;

		return (
			<div>
				<div>
					<span>{name} {family} </span>	
					<button onClick={this.onNameFamilyEdit.bind(this)}>Edit</button>
				</div>
			</div>
		);
	}
}

DisplayPrivateInfo.propTypes = {
	name: PropTypes.string,
	family: PropTypes.string
};

export default connect()(DisplayPrivateInfo);
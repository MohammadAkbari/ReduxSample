
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class DisplayPrivateInfo extends Component {

	onNameFamilyEdit() {
		this.props.editNameFamily();
	}

	render() {

		let {Name, Family} = this.props;

		return (
			<div>
				<div>
					<span>{Name} {Family} </span>	
					<button onClick={this.onNameFamilyEdit.bind(this)}>Edit</button>
				</div>
			</div>
		);
	}
}

DisplayPrivateInfo.propTypes = {
	Name: PropTypes.string,
	Family: PropTypes.string
};

const mapStateToProps = (state) => {
	return {
		Name: state.setting.Name,
		Family: state.setting.Family,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		editNameFamily: () => dispatch(settingActionCreators.editNameFamily()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPrivateInfo);
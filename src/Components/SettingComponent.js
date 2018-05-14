
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 
import PrivateInfo from './PrivateInfo';
import ProfileInfo from './ProfileInfo';
import ParentingInfo from './ParentingInfo';

class SettingComponent extends Component {

	render() {

		return (
			<div>
				<PrivateInfo />
				<ProfileInfo />
				<ParentingInfo />
			</div>
		);
	}
}

SettingComponent.propTypes = {

};

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent);
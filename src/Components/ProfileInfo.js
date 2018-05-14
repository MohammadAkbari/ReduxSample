
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

class ProfileInfo extends Component {

	render() {

		return (
			<div>
				<h1>ProfileInfo</h1>
			</div>
		);
	}
}

ProfileInfo.propTypes = {

};

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
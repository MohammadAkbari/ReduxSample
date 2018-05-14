
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

class ParentingInfo extends Component {

	render() {

		return (
			<div>
				<h1>ParentingInfo</h1>
			</div>
		);
	}
}

ParentingInfo.propTypes = {

};

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentingInfo);
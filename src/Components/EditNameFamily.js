
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class PrivateInfo extends Component {

	onNameFamilySave() {
		const name = this.getName.value;
		const family= this.getFamily.value;

		this.props.dispatch(settingActionCreators.saveNameFamily(name, family));
	}

	render() {

		let {name, family} = this.props;

		return (
			<div>
				<div>
					<input type="text" ref={(input) => this.getName = input} defaultValue={name} />
					<input type="text" ref={(input) => this.getFamily = input} defaultValue={family} />

					<button onClick={this.onNameFamilySave.bind(this)}>Save</button>
				</div>
			</div>
		);
	}
}

PrivateInfo.propTypes = {
	Name: PropTypes.string,
	Family: PropTypes.string,
};

export default connect()(PrivateInfo);
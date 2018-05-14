
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'

class PrivateInfo extends Component {

	onNameFamilySave() {
		const name = this.getName.value;
		const family= this.getFamily.value;

		this.props.saveNameFamily(name, family);
	}

	render() {

		let {Name, Family} = this.props;

		return (
			<div>
				<div>
					<input type="text" ref={(input) => this.getName = input} defaultValue={Name} />
					<input type="text" ref={(input) => this.getFamily = input} defaultValue={Family} />

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

const mapStateToProps = (state) => {
	return {
		Name: state.setting.Name,
		Family: state.setting.Family,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveNameFamily: (name, family) => dispatch(settingActionCreators.saveNameFamily(name, family))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateInfo);
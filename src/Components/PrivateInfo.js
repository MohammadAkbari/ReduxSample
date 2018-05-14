import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'
import DisplayNameFamily from './DisplayNameFamily';
import EditNameFamily from './EditNameFamily';

class PrivateInfo extends Component {

	componentDidMount() {
		this.props.getPrivateInfo();
	}

	onNameFamilyEdit() {
		this.props.editNameFamily(this.props);
	}

	onNameFamilySave() {
		const name = this.getName.value;
		const family = this.getFamily.value;

		const data = {
			Name: name,
			Family: family,
			Nickname: this.props.Nickname,
			Emails: this.props.Emails,
			PhoneNumbers: this.props.PhoneNumbers,
		};

		this.props.saveNameFamily(data);
	}

	render() {

		let { Name, Family, Nickname, editing } = this.props;
		return (
			<div>

				{
					editing ? <EditNameFamily name={Name} family={Family} /> :
						<DisplayNameFamily name={Name} family={Family} />
				}

				<div>{Nickname}</div>
			</div>
		);
	}
}

PrivateInfo.propTypes = {
	Name: PropTypes.string,
	Family: PropTypes.string,
	Nickname: PropTypes.string,
	Emails: PropTypes.array,
	PhoneNumbers: PropTypes.array,
	editing: PropTypes.bool
};

const mapStateToProps = (state) => {
	return {
		Name: state.setting.Name,
		Family: state.setting.Family,
		Nickname: state.setting.Nickname,
		Emails: state.setting.Emails,
		PhoneNumbers: state.setting.PhoneNumbers,
		editing: state.setting.editing
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPrivateInfo: () => dispatch(settingActionCreators.getPrivateInfo())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateInfo);
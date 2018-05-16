import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import settingActionCreators from '../Actions/settingActionCreators'
import DisplayNameFamily from './DisplayNameFamily';
import EditNameFamily from './EditNameFamily';
import PhoneNumber from './PhoneNumber';
import PhoneNumberList from './PhoneNumber.List';
import PhoneNumberAdd from './PhoneNumber.Add';
import PhoneNumberNotConfirm from './PhoneNumber.NotConfirmed';
import MODE from '../Mode';

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

	phoneSwitch = (mode, phone, phones) => {
		switch (mode) {
		   case MODE.DEFAULT:
			  return <PhoneNumber input={phone} />;
			case MODE.LIST:
				return <PhoneNumberList items={phones} />;
			case MODE.ADD:
				return <PhoneNumberAdd input={phone} />;
			case MODE.NOTCONFIRMED:
				return <PhoneNumberNotConfirm input={phone} />;
			default:
				return null;
		}
	 }

	render() {

		let { Name, Family, Nickname, editing, phoneNumber, PhoneNumbers, phoneNumberMode } = this.props;
		return (
			<div>

				{
					editing ? <EditNameFamily name={Name} family={Family} /> :
						<DisplayNameFamily name={Name} family={Family} />
				}
				{
					this.phoneSwitch(phoneNumberMode, phoneNumber, PhoneNumbers)	
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
	phoneNumber: PropTypes.object,
	editing: PropTypes.bool,
	phoneNumberMode: PropTypes.number
};

const mapStateToProps = (state) => {
	return {
		Name: state.setting.Name,
		Family: state.setting.Family,
		Nickname: state.setting.Nickname,
		Emails: state.setting.Emails,
		PhoneNumbers: state.setting.PhoneNumbers,
		phoneNumber: state.setting.phoneNumber,
		editing: state.setting.editing,
		phoneNumberMode: state.setting.phoneNumberMode
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPrivateInfo: () => dispatch(settingActionCreators.getPrivateInfo())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateInfo);
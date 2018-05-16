import constants from '../constants';
import SettingApi from '../Api/SettingApi';

const settingActionCreators = {

	getPrivateInfo() {

		return (dispatch) => {

			dispatch({ type: constants.REQUEST_PRIVATE_INFO });

			SettingApi.getPrivateInfo()
				.then(
				(response) => {

					response.phoneNumber = response.PhoneNumbers[0];

					dispatch({ 
						type: constants.RECEIVE_PRIVATE_INFO,
						success: true, 
						info: response
					})
				},
				(error) => dispatch({ type: constants.RECEIVE_PRIVATE_INFO, success: false })
				);
		};
	},
	editNameFamily() {
		return (dispatch) => {
			dispatch({ type: constants.EDIT_NAME_FAMILLY });
		}
	},
	saveNameFamily(name, family) {
		return (dispatch) => {
			dispatch({ type: constants.SAVE_NAME_FAMILLY, name: name, family: family });
		}
	},
	editPhoneNumbers() {
		return (dispatch) => {
			dispatch({ type: constants.EDIT_PHONE_NUMBERS });
		}
	},
	editPhoneNumber() {
		return (dispatch) => {
			dispatch({ type: constants.EDIT_PHONE_NUMBER });
		}
	},
	confirmPhoneNumber(){
		return (dispatch) => {
			dispatch({ type: constants.CONFIRM_PHONE_NUMBER });
		}
	},
	verifyPhoneNumber(phoneNumber, code){

		dispatch({ type: constants.REQUEST_VERIFY_PHONE_NUMBER });
		
		SettingApi.verifyPhoneNumber(phoneNumber, code)
			.then(
			(response) => {
				dispatch({ 
					type: constants.RECEIVE_VERIFY_PHONE_NUMBER,
					success: true, 
					info: response
				})
			},
			(error) => dispatch({ type: constants.RECEIVE_VERIFY_PHONE_NUMBER, success: false })
			);
	}


};

export default settingActionCreators;
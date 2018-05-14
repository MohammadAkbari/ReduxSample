import constants from '../constants';
import SettingApi from '../Api/SettingApi';

const settingActionCreators = {

	getPrivateInfo() {

		return (dispatch) => {

			dispatch({ type: constants.REQUEST_PRIVATE_INFO });

			SettingApi.getPrivateInfo()
				.then(
				(response) => dispatch({ type: constants.RECEIVE_PRIVATE_INFO, success: true, info: response }),
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
	}
};

export default settingActionCreators;
import constants from '../constants';
import MODE from '../Mode';

const initialState = {
    Name: "",
    Family: "",
    Nickname: "",
    Emails: [],
    PhoneNumbers: [],
    phoneNumber: {},
    editing: false,
    phoneNumberMode: MODE.DEFAULT
}

const setting = (state = initialState, action) => {

    switch (action.type) {

        case constants.RECEIVE_PRIVATE_INFO:
            return Object.assign({}, state, action.info);
        case constants.EDIT_NAME_FAMILLY:
            return Object.assign({}, state, { editing: true });
        case constants.SAVE_NAME_FAMILLY:
            return Object.assign({}, state, { Name: action.name, Family: action.family, editing: false });
        case constants.EDIT_PHONE_NUMBERS:
            return Object.assign({}, state, { phoneNumberMode: MODE.LIST });
        case constants.ADD_PHONE_NUMBER:
            return Object.assign({}, state, { phoneNumberMode: MODE.ADD });
        case constants.CONFIRM_PHONE_NUMBER:
            return Object.assign({}, state, { phoneNumberMode: MODE.NOTCONFIRMED });
        default:
            return state;
    }
};

export default setting;
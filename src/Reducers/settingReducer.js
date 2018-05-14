import constants from '../constants';

const initialState = {
    Name: "",
    Family: "",
    Nickname: "",
    Emails: [],
    PhoneNumbers: [],
    editing: false
}

const setting = (state = initialState, action) => {

    switch (action.type) {

        case constants.RECEIVE_PRIVATE_INFO:
            return action.info;
        case constants.EDIT_NAME_FAMILLY:
            return Object.assign({}, state, { editing: true });
        case constants.SAVE_NAME_FAMILLY:
            return Object.assign({}, state, { Name: action.name, Family: action.family, editing: false });
        default:
            return state;
    }
};

export default setting;
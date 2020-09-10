import {LOGGED, LOGOUT_ACTION} from "./Constants";

const initState = {
    users: [],
    chatRooms: [],
    loginStatus: false,
}

const mReducers = (state = initState, action) => {
    switch(action.type) {
        case LOGGED:
            return {
                ...state,
                loginStatus: true,
            };
        case LOGOUT_ACTION:
            return {
                ...state,
                loginStatus: false,
            };
        default:
            return { ...state }
    }
}

export default mReducers;

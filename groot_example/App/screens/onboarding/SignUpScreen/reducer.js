import {
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE
} from './constant';

const INITIAL_STATE = {
    signUpData: null,
    error: null,
    loading: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                signUpData: action.response,
            };
        case SIGNUP_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
export default reducer;
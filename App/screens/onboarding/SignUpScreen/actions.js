import {
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAILURE,
} from './constant';

export function signUpRequest(payload) {
    return {
        type: SIGNUP_REQUEST,
        payload,
    };
}
export function signUpRequestSuccess(response){
    return{
        type:SIGNUP_REQUEST_SUCCESS,
        response,
    };
}
export function signUpRequestFailure(error){
    return{
        type:SIGNUP_REQUEST_FAILURE,
        error,
    };
}

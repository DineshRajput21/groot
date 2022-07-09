import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE
} from "./constant";

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload,
});
export const loginRequestSuccess = (response) => ({
    type: LOGIN_REQUEST_SUCCESS,
    response,
});
export const loginRequestFailure = (error) => ({
    type: LOGIN_REQUEST_FAILURE,
    error,
});

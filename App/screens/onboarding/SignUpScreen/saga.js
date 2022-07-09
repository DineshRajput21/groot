import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP_REQUEST } from './constant';
import { signUpRequestSuccess, signUpRequestFailure } from './actions';

function* onSignUpRequest({ payload }) {
    try {
        if (payload) {
            alert(JSON.stringify("SignUp Successfully"));
            yield put(signUpRequestSuccess(payload));
        } else {
            yield put(signUpRequestFailure("Server Error!"));
        }
    } catch (error) {
        yield put(signUpRequestFailure("Something went wron!"));
    }
}

function* SignUpSaga() {
    yield takeEvery(SIGNUP_REQUEST, onSignUpRequest);
}
export default SignUpSaga;
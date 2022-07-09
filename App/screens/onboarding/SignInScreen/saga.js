import { call, put, takeEvery } from 'redux-saga/effects';
import { navigate } from '../../../navigation/RootNavigation';
import { LOGIN_REQUEST } from './constant';
import { loginRequestSuccess, loginRequestFailure } from './actions';
import { saveData } from '../../../utils';

function* onLoginRequest({ payload }) {
    try {
        if (payload) {
            navigate("BottomTabs");
            yield put(loginRequestSuccess(payload));
            yield call(saveData, 'email', payload.email);
        } else {
            yield put(loginRequestFailure("Server Error!"));
        }
    } catch (error) {
        yield put(loginRequestFailure("Something went wrong!"));
    }
}

function* SignInSaga() {
    yield takeEvery(LOGIN_REQUEST, onLoginRequest);
}

export default SignInSaga;
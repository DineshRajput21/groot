import {all} from 'redux-saga/effects';
import SignInSaga from '../screens/onboarding/SignInScreen/saga.js';
import SignUpSaga from '../screens/onboarding//SignUpScreen/saga.js';

const root = function* rootSaga() {
  yield all([SignInSaga(), SignInSaga(),SignUpSaga()]);
};

export default root;

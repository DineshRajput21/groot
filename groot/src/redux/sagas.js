import {all} from 'redux-saga/effects';
import SignInSaga from '../common/screens/SignInScreen/Redux/Saga';
import SignUpSaga from '#/common/screens/SignUpScreen/Redux/Saga';
import SignJoinSaga from '#/common/screens/SignInToJoin/Redux/Saga';
const root = function* rootSaga() {
  yield all([SignInSaga(),SignJoinSaga(),SignUpSaga()]);
};

export default root;

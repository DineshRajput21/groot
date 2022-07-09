import loginReducer from '../screens/onboarding/SignInScreen/reducer';
import signUpReducer from '../screens/onboarding/SignUpScreen/reducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  loginReducer,
  signUpReducer,
});

export default appReducer;

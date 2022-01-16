import loginReducer from '../common/screens/SignInScreen/Redux/reducer';
import signUpReducer from '../common/screens/SignUpScreen/Redux/reducer';
import signJoinReducer from '../common/screens/SignInToJoin/Redux/reducer';
import mainReducer from '../delivery/screens/MainScreen/Redux/reducer';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  loginReducer,
  signUpReducer,
  signJoinReducer,
  mainReducer,

});

export default appReducer;

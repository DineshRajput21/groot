import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
let store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);

export {store};

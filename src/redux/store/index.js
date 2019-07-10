import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { jwtKey } from '../../helpers/defaults';

const sagaMiddleware = createSagaMiddleware();
// onst tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composec;
// const composeEnhancers = tool;
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, middleware);

AsyncStorage.getItem(jwtKey)
    .then((token) => {
        console.log(token, 'a token=====');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    });

sagaMiddleware.run(rootSaga);

export default store;

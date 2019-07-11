/* eslint-disable */
import { all } from 'redux-saga/effects';

import { watchSignUpUserSagaAsync, watchLogInUserSagaAsync } from './userSaga';

function* rootSaga() {
	yield all([
		watchSignUpUserSagaAsync(),
		watchLogInUserSagaAsync()
	]);
}

export default rootSaga;

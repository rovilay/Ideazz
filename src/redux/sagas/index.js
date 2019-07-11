/* eslint-disable */
import { all } from 'redux-saga/effects';

import { watchPostUserDataSagaAsync } from './userSaga';

function* rootSaga() {
	yield all([
		watchPostUserDataSagaAsync()
	]);
}

export default rootSaga;

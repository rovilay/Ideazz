/* eslint-disable */
import { all } from 'redux-saga/effects';

import { watchSignUpUserSagaAsync, watchLogInUserSagaAsync } from './userSaga';
import {
	watchCreateIdeaSagaAsync,
	watchEditIdeaSagaAsync,
	watchUpdateIdeaSagaAsync,
	watchGetAllIdeasSagaAsync
} from './ideaSaga';

function* rootSaga() {
	yield all([
		watchSignUpUserSagaAsync(),
		watchLogInUserSagaAsync(),
		watchUpdateIdeaSagaAsync(),
		watchEditIdeaSagaAsync(),
		watchCreateIdeaSagaAsync(),
		watchGetAllIdeasSagaAsync(),
	]);
}

export default rootSaga;

import { put, takeLatest, call  } from 'redux-saga/effects';

import { userDetails, apiErrorHandler } from '../../helpers/utils';
import { ideaFeedsScreenName } from '../../helpers/defaults';
import * as NavigationService from '../../services/NavigationService';
import UserAPI from '../../services/UserAPI';
import {
    signUpUser,
    signUpUserSuccess,
    signUpUserFailure,
    logInUser,
    logInUserSuccess,
    logInUserFailure,
} from '../actionCreators/userActions';

export function* watchSignUpUserSagaAsync() {
  yield takeLatest(signUpUser().type, signUpUserSagaAsync);
}

export function* signUpUserSagaAsync(action) {
    try {
        const response = yield call(UserAPI.signUpUser, action.userData);
        const userData = yield userDetails(response.data.token);
        yield put(signUpUserSuccess(userData));
        yield put(NavigationService.navigate(ideasScreenName));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(signUpUserFailure(errorMessage));
    }
}

export function* watchLogInUserSagaAsync() {
  yield takeLatest(logInUser().type, logInUserSagaAsync);
}

export function* logInUserSagaAsync(action) {
    try {
        const response = yield call(UserAPI.logInUser, action.userData);
        const userData = yield userDetails(response.data.token);
        yield put(logInUserSuccess(userData));
        yield put(NavigationService.navigate(ideaFeedsScreenName));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(logInUserFailure(errorMessage));
    }
}

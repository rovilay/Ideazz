import { put, takeLatest, call  } from 'redux-saga/effects';

import { userDetails, apiErrorHandler } from '../../helpers/utils';
import { jwtKey } from '../../helpers/defaults';
import UserAPI from '../../services/UserAPI';
import { AsyncStorage } from 'react-native';
import {
    setCurrentUser,
    setCurrentUserSuccess,
    setCurrentUserFailure,
    postUserData,
    postUserDataSuccess,
    postUserDataFailure,
} from '../actionCreators/userActions';

// export function* userAuth() {
//   yield takeLatest(setCurrentUser().type, setUser);
// }

// export function* setUser() {
//   try {
//     const response = yield call(userDetails);
//     yield put(setCurrentUserSuccess(response));

//   } catch (error) {
//     yield put(setCurrentUserFailure(error));
//   }
// }

export function* watchPostUserDataSagaAsync() {
  yield takeLatest(postUserData().type, postUserDataSagaAsync);
}

export function* postUserDataSagaAsync(action) {
    try {
        const response = yield call(UserAPI.postNewUser, action.userData);
        const userData = yield userDetails(response.data.token);
        console.log(userData), '****j';
        yield put(postUserDataSuccess(userData));
        // yield put(getUserDataSuccess(userData));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(postUserDataFailure(errorMessage));
    }
}

// export function* watchGetUserDataSagaAsync() {
//     yield takeLatest(getUserData().type, fetchUserDataSaga);
// }

// export function* fetchUserDataSaga(action) {
//     try {
//         const response = yield call(UserAPI.getUserData, action.id);
//         const dataFromStagingApi = yield call(UserAPI.getUserDataFromStagingApi,
//             response.data.result.email,
//         );
//         const location = (dataFromStagingApi.data.values[0].location) ?
//             dataFromStagingApi.data.values[0].location.name : process.env.REACT_APP_DEFAULT_LOCATION;
//         response.data.result.location = location;
//         yield put(getUserDataSuccess(response.data));
//     } catch (error) {
//         const errorMessage = apiErrorHandler(error);
//         yield put(getUserDataFailure(errorMessage));
//     }
// }


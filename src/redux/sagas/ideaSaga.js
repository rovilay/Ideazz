import { put, takeLatest, call  } from 'redux-saga/effects';

import { apiErrorHandler } from '../../helpers/utils';
import { ideasScreenName, ideaFeedsScreenName } from '../../helpers/defaults';
import * as NavigationService from '../../services/NavigationService';
import IdeaAPI from '../../services/IdeaAPI';
import {
    createIdea,
    updateIdea,
    editIdea,
    createIdeaSuccess,
    updateIdeaSuccess,
    createIdeaFailure,
    updateIdeaFailure,
} from '../actionCreators/ideaActions';

export function* watchCreateIdeaSagaAsync() {
  yield takeLatest(createIdea().type, createIdeaSagaAsync);
}

export function* createIdeaSagaAsync(action) {
    try {
        const response = yield call(IdeaAPI.postIdea, action.ideaData);
        yield put(createIdeaSuccess(response.data.idea));
        yield put(NavigationService.navigate(ideaFeedsScreenName));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(createIdeaFailure(errorMessage));
    }
}

export function* watchEditIdeaSagaAsync() {
  yield takeLatest(editIdea().type, editIdeaSagaAsync);
}

export function* editIdeaSagaAsync() {
    try {
        yield put(NavigationService.navigate(ideasScreenName));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(updateIdeaFailure(errorMessage));
    }
}

export function* watchUpdateIdeaSagaAsync() {
  yield takeLatest(updateIdea().type, updateIdeaSagaAsync);
}

export function* updateIdeaSagaAsync(action) {
    try {
        const response = yield call(IdeaAPI.updateIdea, action.updateData);
        yield put(updateIdeaSuccess(response.data.idea));
        yield put(NavigationService.navigate(ideaFeedsScreenName));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(updateIdeaFailure(errorMessage));
    }
}

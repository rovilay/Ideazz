import { put, takeLatest, call  } from 'redux-saga/effects';

import { apiErrorHandler } from '../../helpers/utils';
import { ideasScreenName, ideaFeedsScreenName } from '../../helpers/defaults';
import * as NavigationService from '../../services/NavigationService';
import IdeaAPI from '../../services/IdeaAPI';
import {
    createIdea,
    updateIdea,
    editIdea,
    getAllIdeas,
    createIdeaSuccess,
    updateIdeaSuccess,
    getAllIdeasSuccess,
    createIdeaFailure,
    updateIdeaFailure,
    getAllIdeasFailure
} from '../actionCreators/ideaActions';

export function* watchCreateIdeaSagaAsync() {
  yield takeLatest(createIdea().type, createIdeaSagaAsync);
}

export function* createIdeaSagaAsync(action) {
    try {
        const response = yield call(IdeaAPI.postIdea, action.ideaData);
        yield put(createIdeaSuccess(response.data.idea));
        NavigationService.navigate(ideaFeedsScreenName);
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
        NavigationService.navigate(ideasScreenName);
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
        NavigationService.navigate(ideaFeedsScreenName);
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(updateIdeaFailure(errorMessage));
    }
}

export function* watchGetAllIdeasSagaAsync() {
  yield takeLatest(getAllIdeas().type, getAllIdeasSagaAsync);
}

export function* getAllIdeasSagaAsync(action) {
    try {
        const response = yield call(IdeaAPI.getAllIdeas, action.options);
        const { ideas, offset, limit, total } = response.data;
        yield put(getAllIdeasSuccess({ ideas, 
            offset: Number(offset),
            limit: Number(limit),
            total 
        }));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);
        yield put(getAllIdeasFailure(errorMessage));
    }
}

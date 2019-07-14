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
    deleteIdea,
    createIdeaSuccess,
    updateIdeaSuccess,
    getAllIdeasSuccess,
    deleteIdeaSuccess,
    createIdeaFailure,
    updateIdeaFailure,
    getAllIdeasFailure,
    deleteIdeaFailure
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

        if (errorMessage.includes('network')) {
            alert(errorMessage);
        }

        yield put(createIdeaFailure(errorMessage));
    }
}

export function* watchEditIdeaSagaAsync() {
  yield takeLatest(editIdea().type, editIdeaSagaAsync);
}

export function* editIdeaSagaAsync() {
    try {
        NavigationService.navigate(ideasScreenName, { view: 'update' });
    } catch (error) {
        const errorMessage = apiErrorHandler(error);

        if (errorMessage.includes('network')) {
            alert(errorMessage);
        }

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

        if (errorMessage.includes('network')) {
            alert(errorMessage);
        }
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

        // if (errorMessage.includes('network')) {
        //     alert(errorMessage);
        // }

        yield put(getAllIdeasFailure(errorMessage));
    }
}

export function* watchDeleteIdeaSagaAsync() {
  yield takeLatest(deleteIdea().type, deleteIdeaSagaAsync);
}

export function* deleteIdeaSagaAsync(action) {
    try {
        const response = yield call(IdeaAPI.deleteIdea, action.ideaId);
        yield put(deleteIdeaSuccess(action.ideaId));
    } catch (error) {
        const errorMessage = apiErrorHandler(error);

        if (errorMessage.includes('network')) {
            alert(errorMessage);
        }

        yield put(deleteIdeaFailure(errorMessage));
    }
}

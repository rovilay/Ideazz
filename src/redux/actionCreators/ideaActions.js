import * as types from '../constants/actionTypes';
import { limit } from '../../helpers/defaults';
  
export const createIdea = ideaData => ({
    type: types.CREATE_IDEA,
    ideaData
});
  
export const createIdeaSuccess = ideaData => ({
    type: types.CREATE_IDEA_SUCCESS,
    ideaData
});
  
export const createIdeaFailure = error => ({
    type: types.CREATE_IDEA_FAILURE,
    error
});

export const editIdea = (ideaId) => ({
    type: types.EDIT_IDEA,
    ideaId
});

export const updateIdea = (ideaId, ideaData) => ({
    type: types.UPDATE_IDEA,
    updateData: {
        ideaId,
        ideaData
    }
});
  
export const updateIdeaSuccess = updatedIdea => ({
    type: types.UPDATE_IDEA_SUCCESS,
    updatedIdea
});
  
export const updateIdeaFailure = error => ({
    type: types.UPDATE_IDEA_FAILURE,
    error
});

export const getIdea = (ideaId) => ({
    type: types.GET_IDEA,
    ideaId
});

export const getAllIdeas = (Limit = limit, offset = 0) => ({
    type: types.GET_ALL_IDEAS,
    options: {
        limit: Limit,
        offset
    }
});
  
export const getAllIdeasSuccess = ({ ideas, limit, offset, total }) => ({
    type: types.GET_ALL_IDEAS_SUCCESS,
    ideas,
    pagination: {
        limit,
        offset,
        total
    }
});
  
export const getAllIdeasFailure = error => ({
    type: types.GET_ALL_IDEAS_FAILURE,
    error
});

export const deleteIdea = ideaId => ({
    type: types.DELETE_IDEA,
    ideaId
});

export const deleteIdeaSuccess = ideaId => ({
    type: types.DELETE_IDEA_SUCCESS,
    ideaId
});
  
export const deleteIdeaFailure = error => ({
    type: types.DELETE_IDEA_FAILURE,
    error
});

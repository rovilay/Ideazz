import * as types from '../constants/actionTypes';
  
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

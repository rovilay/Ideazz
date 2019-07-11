import * as types from '../constants/actionTypes';
  
export const postUserData = userData => ({
    type: types.POST_USER_DATA,
    userData
});
  
export const postUserDataSuccess = userData => ({
    type: types.POST_USER_DATA_SUCCESS,
    userData
});
  
export const postUserDataFailure = error => ({
    type: types.POST_USER_DATA_FAILURE,
    error
});

export const logOutUser = () => ({
    type: types.LOG_OUT_USER,
});
  
export const getUserData = id => ({
    type: types.GET_USER_DATA,
    id
});
  
export const getUserDataSuccess = response => ({
    type: types.GET_USER_DATA_SUCCESS,
    response
});
  
  
export const getUserDataFailure = error => ({
    type: types.GET_USER_DATA_FAILURE,
    error
});

export const setCurrentUser = () => {
  return {
    type: types.SET_CURRENT_USER
  };
};

export const setCurrentUserSuccess = (response) => {
  return {
    type: types.SET_CURRENT_USER_SUCCESS,
    response: response
  };
};

export const setCurrentUserFailure = (error) => {
  return {
    type: types.SET_CURRENT_USER_FAILURE,
    error: error
  };
};

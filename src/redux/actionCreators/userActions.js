import * as types from '../constants/actionTypes';
  
export const signUpUser = userData => ({
    type: types.SIGN_UP_USER,
    userData
});
  
export const signUpUserSuccess = userData => ({
    type: types.SIGN_UP_USER_SUCCESS,
    userData
});
  
export const signUpUserFailure = error => ({
    type: types.SIGN_UP_USER_FAILURE,
    error
});
  
export const logInUser = userData => ({
    type: types.LOG_IN_USER,
    userData
});
  
export const logInUserSuccess = userData => ({
    type: types.LOG_IN_USER_SUCCESS,
    userData
});
  
  
export const logInUserFailure = error => ({
    type: types.LOG_IN_USER_FAILURE,
    error
});

export const logOutUser = () => ({
  type: types.LOG_OUT_USER,
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

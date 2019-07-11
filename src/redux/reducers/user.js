import {
    SIGN_UP_USER,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
    LOG_IN_USER,
    LOG_IN_USER_SUCCESS,
    LOG_IN_USER_FAILURE,
    LOG_OUT_USER,
} from '../constants/actionTypes';

const initialState = {
    currentUser: {},
    errors: [],
    getCurrentUserRole: [],
    isLoading: false,
    error: false
};
const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_USER:
            return { ...state, isLoading: true };
        case SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.userData,
                error: false,
                errors: []
            };
        case SIGN_UP_USER_FAILURE:
            return {
                ...state,
                currentUser: {},
                isLoading: false,
                errors: action.error,
                error: true
            };
        case LOG_IN_USER:
            return {
                ...state,
                isLoading: true,
            };
        case LOG_IN_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.userData,
                errors: [],
                error: false,
                isLoading: false
            };
        case LOG_IN_USER_FAILURE:
            return {
                ...state,
                currentUser: {},
                isLoading: false,
                errors: action.error,
                error: true
            };
        case LOG_OUT_USER:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default user;

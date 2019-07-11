import {
    POST_USER_DATA,
    POST_USER_DATA_SUCCESS,
    POST_USER_DATA_FAILURE,
    GET_USER_DATA,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
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
        case GET_USER_DATA:
            return {
                ...state, isLoaded: false
            };
        case GET_USER_DATA_SUCCESS:
            return {
                ...state,
                getUserData: action.response,
                currentUser: action.response.result,
                errors: [],
                isLoaded: true
            };
        case GET_USER_DATA_FAILURE:
            return {
                ...state,
                errors: action.error,
                    isLoaded: false
            };
        case POST_USER_DATA:
            return { ...state, isLoading: true };
        case POST_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.userData,
            };
        case POST_USER_DATA_FAILURE:
            return {
                ...state,
                currentUser: {},
                isLoading: false,
                errors: action.error
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

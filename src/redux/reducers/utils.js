import * as types from '../constants/actionTypes';

const initialState = {
    fontLoaded: false,
    modal: {
        isVisible: false
    }
};
const utils = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_FONTS:
            return {
                ...state,
                fontLoaded: action.fontLoaded
            };
        case types.LOAD_FONTS_SUCCESS:
            return {
                ...state,
                fontLoaded: action.fontLoaded
            };
        case types.LOAD_FONTS_FAILURE:
            return {
                ...state,
                fontLoaded: action.fontLoaded
            };
        case types.OPEN_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isVisible: action.visibility
                }
            };
        case types.CLOSE_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isVisible: action.visibility
                }
            };
        default:
            return state;
    }
};

export default utils;

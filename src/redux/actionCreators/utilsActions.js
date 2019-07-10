import * as types from '../constants/actionTypes';

export const loadFonts = () => ({
    type: types.LOAD_FONTS,
    fontLoaded: false
});

export const loadFontsSuccess = fontLoaded => ({
    type: types.LOAD_FONTS_SUCCESS,
    fontLoaded
});

export const loadFontsFailure = fontLoaded => ({
    type: types.LOAD_FONTS_FAILURE,
    fontLoaded
});

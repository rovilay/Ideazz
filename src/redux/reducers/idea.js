import {
    CREATE_IDEA,
    CREATE_IDEA_SUCCESS,
    CREATE_IDEA_FAILURE,
    EDIT_IDEA,
    UPDATE_IDEA,
    UPDATE_IDEA_SUCCESS,
    UPDATE_IDEA_FAILURE
} from '../constants/actionTypes';

const initialState = {
    ideas: [],
    ideaOnEdit: {},
    isLoading: false,
    errors: {
        message: '',
        errors: [],
        state: false
    }
};

const idea = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_IDEA:
            return { ...state, isLoading: true };
        case CREATE_IDEA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ideas: [ ...state.ideas, action.ideaData ],
                errors: initialState.errors,
                ideaOnEdit: initialState.ideaOnEdit
            };
        case CREATE_IDEA_FAILURE:
            return { 
                ...state,
                isLoading: false,
                errors: {
                    message: action.error,
                    errors: action.error,
                    state: true,
                },
                ideaOnEdit: initialState.ideaOnEdit
            };
        case EDIT_IDEA:
            return { 
                ...state,
                isLoading: false,
                ideaOnEdit: state.ideas.find(idea => idea.id === action.ideaId)
            };
        case UPDATE_IDEA:
            return { ...state, isLoading: true };
        case UPDATE_IDEA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ideas: [ action.updatedIdea,
                    ...state.ideas.filter(idea => idea.id !== action.updatedIdea.id)],
                errors: initialState.errors,
                ideaOnEdit: initialState.ideaOnEdit
            };
        case UPDATE_IDEA_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.error,
                    errors: action.error,
                    state: true,
                },
                ideaOnEdit: initialState.ideaOnEdit
            };
        default:
            return state;
    }
}

export default idea;

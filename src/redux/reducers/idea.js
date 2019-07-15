import {
    CREATE_IDEA,
    CREATE_IDEA_SUCCESS,
    CREATE_IDEA_FAILURE,
    EDIT_IDEA,
    UPDATE_IDEA,
    UPDATE_IDEA_SUCCESS,
    UPDATE_IDEA_FAILURE,
    GET_IDEA,
    GET_ALL_IDEAS,
    GET_ALL_IDEAS_SUCCESS,
    GET_ALL_IDEAS_FAILURE,
    DELETE_IDEA,
    DELETE_IDEA_SUCCESS,
    DELETE_IDEA_FAILURE,
    LOG_OUT_USER,
    REMOVE_IDEA_ON_FOCUS
} from '../constants/actionTypes';
import { limit } from '../../helpers/defaults';


const initialState = {
    ideas: [],
    ideaOnFocus: {},
    isLoading: false,
    errors: {
        message: '',
        errors: [],
        state: false
    },
    pagination: {
        limit,
        offset: 0,
        total: 0,
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
                ideas: [ action.ideaData, ...state.ideas ],
                pagination: { 
                    ...state.pagination, 
                    total: state.pagination.total + 1 
                },
                errors: initialState.errors,
                ideaOnFocus: initialState.ideaOnFocus
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
                ideaOnFocus: initialState.ideaOnFocus
            };
        case EDIT_IDEA:
            return { 
                ...state,
                isLoading: false,
                ideaOnFocus: state.ideas.find(idea => idea.id === action.ideaId)
            };
        case REMOVE_IDEA_ON_FOCUS:
            return { 
                ...state,
                isLoading: false,
                ideaOnFocus: initialState.ideaOnFocus
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
                ideaOnFocus: initialState.ideaOnFocus
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
                ideaOnFocus: initialState.ideaOnFocus
            };
        case GET_IDEA:
            return {
                ...state,
                isLoading: false,
                ideaOnFocus: state.ideas.find(idea => idea.id === action.ideaId)
            };
        case GET_ALL_IDEAS:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALL_IDEAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ideas: [...state.ideas, ...action.ideas],
                pagination: {...action.pagination},
                errors: initialState.errors,
                ideaOnFocus: initialState.ideaOnFocus
            };
        case GET_ALL_IDEAS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.error,
                    errors: action.error,
                    state: true,
                },
                ideaOnFocus: initialState.ideaOnFocus
            };
        case DELETE_IDEA:
            return {
                ...state,
                isLoading: true,
            };
        case DELETE_IDEA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ideas: state.ideas.filter(idea => idea.id !== action.ideaId),
                errors: initialState.errors,
            };
        case DELETE_IDEA_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.error,
                    errors: action.error,
                    state: true,
                },
            };
        case LOG_OUT_USER:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}

export default idea;

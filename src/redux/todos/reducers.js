import {SET_TODOS, ADD_NEW_TODO, SET_ERROR} from '../actions';

const initialState = {
    data: {
        todos: [],
    },
    errorMessage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return {...state, data: action.payload};
        case ADD_NEW_TODO: {
            return {
                ...state,
                data: {
                    todos: [...state.data.todos, action.payload],
                },
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
        default:
            return state;
    }
}

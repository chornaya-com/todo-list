import {SET_TODOS, ADD_NEW_TODO} from '../actions/types';

const initialState = {
    data: {
        todos: [],
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return {data: action.payload};
        case ADD_NEW_TODO: {
            return {
                data: {
                    todos: [...state.data.todos, action.payload],
                },
            };
        }
        default:
            return state;
    }
}

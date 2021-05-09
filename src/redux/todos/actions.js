export const SET_TODOS = 'SET_TODOS';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const SET_ERROR = 'SET_ERROR';

export function setTodos(data) {
    return {
        type: SET_TODOS,
        payload: data,
    };
}

export function addNewTodo(todoItem) {
    return {
        type: ADD_NEW_TODO,
        payload: {task: todoItem},
    };
}

export function setError(errorMessage) {
    return {
        type: SET_ERROR,
        payload: errorMessage,
    };
}

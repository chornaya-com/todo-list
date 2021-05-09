import axios from 'axios';
import {FETCH_TODOS} from './types';

export function fetchTodos() {
    return function (dispatch) {
        return axios.get('http://localhost:9091/api/todo').then(({data}) => {
            dispatch(setTodos(data));
        });
    };
}

export function addTodoItem(todoItem) {
    return function (dispatch, getState) {
        const state = getState();
        const currentTodosData = state.data;
        const nextTodoItem = {task: todoItem};
        const nextTodos = {
            todos: [...currentTodosData.todos, nextTodoItem],
        };

        dispatch(setTodos(nextTodos));

        return axios.post('http://localhost:9091/api/todo', nextTodoItem).catch((error) => {
            console.error(error);
        });
    };
}

function setTodos(data) {
    return {
        type: FETCH_TODOS,
        payload: data,
    };
}

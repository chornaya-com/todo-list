import axios from 'axios';
import {ADD_NEW_TODO, SET_TODOS, SET_ERROR} from './types';

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

        dispatch(addNewTodo(todoItem));

        return axios.post('http://localhost:9091/api/todo', {task: todoItem}).catch(() => {
            dispatch(setError('Something went wrong! Try to add your task again.'));
            setTimeout(() => {
                dispatch(setError(''));
            }, 4000);

            dispatch(setTodos(currentTodosData));
        });
    };
}

function setTodos(data) {
    return {
        type: SET_TODOS,
        payload: data,
    };
}

function addNewTodo(todoItem) {
    return {
        type: ADD_NEW_TODO,
        payload: {task: todoItem},
    };
}

function setError(errorMessage) {
    return {
        type: SET_ERROR,
        payload: errorMessage,
    };
}

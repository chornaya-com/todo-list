import axios from 'axios';
import {ADD_NEW_TODO, SET_TODOS} from './types';

export function fetchTodos() {
    return function (dispatch) {
        return axios.get('http://localhost:9091/api/todo').then(({data}) => {
            dispatch(setTodos(data));
        });
    };
}

export function addTodoItem(todoItem) {
    return function (dispatch) {
        dispatch(addNewTodo(todoItem));

        return axios.post('http://localhost:9091/api/todo', {task: todoItem}).catch((error) => {
            console.error(error);
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

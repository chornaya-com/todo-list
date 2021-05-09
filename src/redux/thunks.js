import axios from 'axios';
import {setTodos, addNewTodo, setError} from './actions';

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

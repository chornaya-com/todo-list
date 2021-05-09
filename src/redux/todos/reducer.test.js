import todosReducer, {initialState} from './reducer';
import {setError, setTodos} from './actions';

describe('test todosReducer', () => {
    it('should set todos', () => {
        const todos = {
            todos: [{task: 'To do 1'}, {task: 'To do 2'}, {task: 'To do 3'}],
        };
        const stateTodos = todosReducer(initialState, setTodos(todos));
        expect(stateTodos.data.todos).toHaveLength(3);
        expect(stateTodos.data).toBe(todos);
    });

    it('should set error message', () => {
        const stateErrorMessage = todosReducer(initialState, setError('Something went wrong!'));
        expect(stateErrorMessage.errorMessage).toEqual('Something went wrong!');
    });
});

import React from 'react';
import './styles.css';
import {TodoListConnected} from './components/TodoList/TodoList.connected';

export function TodoApp(props) {
    const {addTodoItem, error} = props;
    const [todoItem, setTodoItem] = React.useState('');

    const onChange = (event) => {
        setTodoItem(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (todoItem === '') {
            return;
        }
        addTodoItem(todoItem);
        setTodoItem('');
    };

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <div>{error}</div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Add new todo..."
                    onChange={onChange}
                    value={todoItem}
                />
                <button type={'submit'}>Add</button>
            </form>
            <TodoListConnected />
        </div>
    );
}

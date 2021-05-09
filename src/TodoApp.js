import React from 'react';
import {TodoListConnected} from './components/TodoList/TodoList.connected';
import * as cn from './TodoApp.module.css';

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
        <div className={cn.container}>
            <div className={cn.title}>Todo List</div>
            <div className={cn.error}>{error}</div>
            <form className={cn.formContainer} onSubmit={onSubmit}>
                <input
                    className={cn.inputField}
                    type="text"
                    placeholder="Add new todo..."
                    onChange={onChange}
                    value={todoItem}
                />
                <button className={cn.addButton} type={'submit'}>
                    Add
                </button>
            </form>
            <TodoListConnected />
        </div>
    );
}

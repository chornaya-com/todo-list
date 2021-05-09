import React, {Component} from 'react';
import {Todo} from '../Todo/Todo';
import * as cn from './TodoList.module.css';

export class TodoList extends Component {
    state = {};

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const {todos} = this.props;

        return (
            <div className={cn.todoListContainer}>
                <ul className={cn.todoList}>
                    {todos && todos.length ? (
                        todos.map((todo, index) => {
                            return <Todo key={`todo-${index}`} todo={todo.task} />;
                        })
                    ) : (
                        <div className={cn.noTodosMessage}>No todos, yay!</div>
                    )}
                </ul>
            </div>
        );
    }
}

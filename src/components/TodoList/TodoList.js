import React, {Component} from 'react';
import Todo from '../Todo/Todo';

export class TodoList extends Component {
    state = {};

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const {todos} = this.props.data;
        return (
            <ul className="todo-list">
                {todos && todos.length
                    ? todos.map((todo, index) => {
                          return <Todo key={`todo-${index}`} todo={todo.task} />;
                      })
                    : 'No todos, yay!'}
            </ul>
        );
    }
}

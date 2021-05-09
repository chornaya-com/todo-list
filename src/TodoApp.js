import React from 'react';
import TodoList from './component/TodoList';
import './styles.css';
import {addTodoItem} from './actions';
import {connect} from 'react-redux';

function TodoApp(props) {
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
            <TodoList />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {error: state.errorMessage};
};

const dispatchProps = {
    addTodoItem,
};

export default connect(mapStateToProps, dispatchProps)(TodoApp);

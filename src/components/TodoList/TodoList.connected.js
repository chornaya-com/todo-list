import {connect} from 'react-redux';
import {fetchTodos} from '../../redux/todos/thunks';
import {TodoList} from './TodoList';
import {selectTodos} from '../../selectors/selectors';

const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state),
    }
};

export const TodoListConnected = connect(mapStateToProps, {
    fetchTodos,
})(TodoList);

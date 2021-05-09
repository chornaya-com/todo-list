import {connect} from 'react-redux';
import {fetchTodos} from '../../redux/todos/thunks';
import {TodoList} from './TodoList';

const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
    data,
    isLoadingData,
});

export const TodoListConnected = connect(mapStateToProps, {
    fetchTodos,
})(TodoList);

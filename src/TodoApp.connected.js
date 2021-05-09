import {addTodoItem} from './redux/todos/thunks';
import {connect} from 'react-redux';
import {TodoApp} from './TodoApp';

const mapStateToProps = (state) => {
    return {error: state.errorMessage};
};

const dispatchProps = {
    addTodoItem,
};

export const TodoAppConnected = connect(mapStateToProps, dispatchProps)(TodoApp);

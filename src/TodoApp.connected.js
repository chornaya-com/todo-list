import {addTodoItem} from './redux/todos/thunks';
import {connect} from 'react-redux';
import {TodoApp} from './TodoApp';
import {selectErrorMessage} from './selectors/selectors';

const mapStateToProps = (state) => {
    return {
        error: selectErrorMessage(state),
    };
};

const dispatchProps = {
    addTodoItem,
};

export const TodoAppConnected = connect(mapStateToProps, dispatchProps)(TodoApp);

export function selectTodos(state) {
    return state.todosState.data.todos;
}

export function selectErrorMessage(state) {
    return state.todosState.errorMessage;
}

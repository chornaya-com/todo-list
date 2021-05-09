import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {todosReducer} from './todos/reducer';

// Debugging purposes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = {
    todosState: todosReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

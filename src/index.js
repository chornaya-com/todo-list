import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {TodoAppConnected} from './TodoApp.connected';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <TodoAppConnected />
    </Provider>,
    rootElement,
);

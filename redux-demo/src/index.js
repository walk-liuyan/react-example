import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
// Provider 是一个提供器，我里面所有的组件都能得到这个store
import { Provider } from 'react-redux'
import store from './store'
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));

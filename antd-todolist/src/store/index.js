import reducer from './reducer';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
// 如果window有这样的拓展应用redux dev，则使用这个工具,
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
/*
// thunk的使用
import thunk from 'redux-thunk';
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
*/
import createSagaMiddleware from 'redux-saga'
import todoSagas from '../store/sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(
    reducer,
    enhancer
);
sagaMiddleware.run(todoSagas)

export default store;

// thunk & saga 具体使用可见
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    // 如果window有这样的拓展应用redux dev，则使用这个工具
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
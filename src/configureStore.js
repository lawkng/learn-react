import { createStore } from 'redux';

import allReducers from './reducers';

export const configureStore = (initialState) => {
    return createStore(
        allReducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
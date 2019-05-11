import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

const initData = {
    customer: {
        firstname: 'John',
        middlename: 'G',
        lastname: 'Lake'
    },
    prices: '10'
}
const store = configureStore(initData);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
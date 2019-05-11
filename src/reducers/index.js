import { combineReducers } from 'redux';

const customerFormReducer = (state = {}, action) => {
    if (action.type === 'CHANGE_FORM') {
        return action.payload.newState;
    }

    return state;
};

const pricesReducer = (state = '', action) => {
    if (action.type === 'CHANGE_PRICE') {
        return action.payload.newState;
    }
    return state;
};

const allReducers = combineReducers({
    customer: customerFormReducer,
    prices: pricesReducer
});

export default allReducers;
import { combineReducers } from 'redux';

const customerFormReducer = (state = {}, action) => {
    /*
    if (action.type === 'CHANGE_FORM_FIELD') {
        return {
            ...state,
            ...action.payload.newState
        }
    }

    return state;
    */
    switch(action.type) {
        case 'UPDATE_FIRST_NAME':
        case 'UPDATE_MIDDLE_NAME':    
        case 'UPDATE_LAST_NAME':
            return {
            ...state,
            ...action.payload.newState
            }
        default:
            return state;
    }
};

const pricesReducer = (state = '', action) => {
    if (action.type === 'CHANGE_PRICE') {
        return action.payload.newState;
    }
    return state;
};

const cryptoReducer = (state = [], action) => {
    if (action.type === 'ADD_CRYPTO') {
        return [
            ...state,
            action.payload.newState
        ]
    }
    return state;
};

const allReducers = combineReducers({
    customer: customerFormReducer,
    crypto: cryptoReducer,
    prices: pricesReducer
});

export default allReducers;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import squareReducer from './../reducers/squareReducer';

import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    brunch1: squareReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
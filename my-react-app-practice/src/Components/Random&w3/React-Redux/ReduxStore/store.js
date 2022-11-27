import React from 'react';
import { legacy_createStore as createStore,applyMiddleware, combineReducers } from 'redux';
import userReducer1 from '../Reducers/userReducer1';
import productReducer from '../Reducers/ProductReducer';
import logger from 'redux-logger';



const combineReducer1 = combineReducers({
    userReducer1,
    productReducer,
});

export const store = createStore(combineReducer1, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
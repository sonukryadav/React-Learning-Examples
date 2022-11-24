import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import userReducer1 from '../Reducers/userReducer1';

export const store = createStore(userReducer1, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



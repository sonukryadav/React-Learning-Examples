import React from 'react';
import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import userReducer1 from '../Reducers/userReducer1';
import logger from 'redux-logger';

export const store = createStore(userReducer1,applyMiddleware(logger) );
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './component/reducers/index';
const initialState = {};
const middleware = [thunk];

const store = configureStore({
	reducer: rootReducer,
	middleware: middleware,
	initialState,
});
export default store;

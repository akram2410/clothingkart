import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import roorReducer from './redux/root-reducer';
const middleWares =[logger];

const store = createStore(roorReducer, applyMiddleware(...middleWares));

export default store;
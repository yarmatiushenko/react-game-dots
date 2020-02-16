import { createStore, applyMiddleware} from 'redux';
import {gameReducer} from '../reducers/reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const IS_DEV = process.env.NODE_ENV !== 'production';
const loggerMiddleware = createLogger();
let middleware;

if (IS_DEV) {
  middleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  );
} else {
  middleware = applyMiddleware(
    thunkMiddleware,
  );
}



export const store = createStore(
  gameReducer,
  middleware

);

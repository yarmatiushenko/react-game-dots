import { createStore, applyMiddleware} from 'redux';
import {gameReducer} from '../reducers/reducer'
import thunkMiddleware from 'redux-thunk';

// import { createLogger } from 'redux-logger';

// const loggerMiddleware = createLogger();
export const store = createStore(
    gameReducer,
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware
    )
);

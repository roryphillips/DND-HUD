import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from "redux-logger";

const reduxLogger = createLogger();

export default function configureStore(preloadedState) {
    if (process.env.NODE_ENV === 'Production') {
        return createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(
                thunkMiddleware
            )
        )
    } else {
        return createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(
                thunkMiddleware,
                reduxLogger
            )
        )
    }


}
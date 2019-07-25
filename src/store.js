import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers/index';
import { logger } from './middleware/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    // logger
];

export function initStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    )
}

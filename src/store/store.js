import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from './promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const logger = store => next => action => {
    console.log('action before reducer', action);
    return next(action);
  };
  
const store = createStore(
    rootReducer,
    {}, 
    compose(
        applyMiddleware(
            logger,
            thunk,
            promiseMiddleware
        )
    )
);

export default store;
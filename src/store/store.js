import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import promiseMiddleware from './promise-middleware';


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
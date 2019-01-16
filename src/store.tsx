import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root_reducer';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export default function configureStore() {
  const middlewares: [] = [];

    // If Redux DevTools Extension is installed use it. Otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares)),
    );
}

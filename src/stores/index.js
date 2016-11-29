import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = [createLogger()];
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

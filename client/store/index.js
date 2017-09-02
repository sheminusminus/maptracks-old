import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import root from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const middleware = [thunk];

  const store = createStore(
    root,
    composeEnhancers(
      applyMiddleware(
        ...middleware,
      ),
    ),
  );

  return store;
}

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import root from '../reducers';

import hydrateAuth from './hydrate-auth';
import hydrateUser from './hydrate-user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(fetching) {
  const middleware = [thunk];

  const auth = hydrateAuth(fetching);
  const user = hydrateUser(fetching);

  const store = createStore(
    root,
    {
      auth,
      user,
    },
    composeEnhancers(
      applyMiddleware(
        ...middleware,
      ),
    ),
  );

  return store;
}

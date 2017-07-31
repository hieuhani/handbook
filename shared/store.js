import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import reducers from './reducers';

function configureStore(initialState) {
  const enhancers = compose(
    // Middleware store enhancer.
    applyMiddleware(),
    // Redux Dev Tools store enhancer.
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    // We only want this enhancer enabled for development and when in a browser
    // with the extension installed.
    process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    typeof window.devToolsExtension !== 'undefined'
      ? // Call the brower extension function to create the enhancer.
        window.devToolsExtension()
      : // Else we return a no-op function.
        f => f,
  );

  const store = initialState
    ? createStore(reducers, fromJS(initialState), enhancers)
    : createStore(reducers, enhancers);
  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers. This is so that we
    // don't lose all of our current application state during hot reloading.
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;

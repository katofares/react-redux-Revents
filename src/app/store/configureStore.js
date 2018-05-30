/**
 * First :  Configure the store
 */


import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

 export const configureStore = (preloadState) => {
  
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);


  const store = createStore(
    rootReducer,
    preloadState,
    composedEnhancer
  )

  return store;

}


/**
 * Next : create reducers THEM combine them in rootReducer
 * so in this example the next step is to create a test reducer
 */

// After get the rootReducer : connect the store to the top level file(in our case index.js)
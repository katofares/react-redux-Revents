import  testReducer  from '../../features/testarea/testReducer';

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer

/**
 * next : import the rootReducer in the configur store
 */
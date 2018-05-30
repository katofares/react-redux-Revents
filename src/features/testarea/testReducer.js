import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';
import {createReducer} from '../../app/common/util/reducerUtil';

const initialStat = {
  data: 24
}


export const incrementCounter = (state, payload) => {
  return {...state, data: state.data + 1 };
}

export const decrementCounter = (state, payload) => {
  return {...state, data: state.data - 1 };
}


export default createReducer(initialStat, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
})
/**
 * Get this reducer in the rootReducer
 */
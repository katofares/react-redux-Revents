import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

const initialStat = {
  data: 24
}

const testReducer = (state = initialStat, action) => {
  switch(action.type){
    case INCREMENT_COUNTER:
      return {...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return {...state, data: state.data - 1 };      
    default:
      return state;
  }
  
}

export default testReducer
/**
 * Get this reducer in the rootReducer
 */
import { combineReducers } from 'redux';
import datesReducer from './datesReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  dates: datesReducer,
  session: sessionReducer
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';

import CounterSlice from './CounterSlice';
import LoginSlice from './LoginSlice';

const rootReducer = combineReducers({
  counter: CounterSlice,
  auth: LoginSlice,
  
});

export default rootReducer;
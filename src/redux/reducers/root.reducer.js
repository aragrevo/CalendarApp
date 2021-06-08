import { combineReducers } from 'redux';
import { uiReducer } from './ui.reducer';

// import { calendarReducer } from './calendarReducer';
// import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  // calendar: calendarReducer,
  // auth: authReducer
});

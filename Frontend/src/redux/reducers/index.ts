import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
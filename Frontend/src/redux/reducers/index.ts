import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
import staffDetailsReducer from './staffDetails';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  staffDetails: staffDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
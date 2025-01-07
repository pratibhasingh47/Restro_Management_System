import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
import staffPersonalReducer from './staffPersonal';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  staffPersonal: staffPersonalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
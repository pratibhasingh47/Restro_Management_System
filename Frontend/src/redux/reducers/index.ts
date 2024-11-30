import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
// import staffDetailsReducer from './staffDetails';
import { staffPersonalReducer } from './staffPersonal';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  // staffDetails: staffDetailsReducer,
  staffPersonal: staffPersonalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
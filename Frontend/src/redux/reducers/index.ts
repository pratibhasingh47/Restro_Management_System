import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
import staffPersonalReducer from './staffPersonal';
import jobReducer from './jobDetail';
import payReducer from './payDetail';
import store from '../store/store';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  staffPersonal: staffPersonalReducer,
  job: jobReducer,
  pay: payReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default rootReducer;
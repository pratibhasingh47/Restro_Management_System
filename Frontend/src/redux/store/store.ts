import { configureStore } from '@reduxjs/toolkit';
import staffPersonalReducer from '../reducers/staffPersonal';
import { useDispatch } from 'react-redux';
import menuReducer from '../reducers/menuSlice';

const store = configureStore({
	reducer: {
		staffPersonal: staffPersonalReducer,
		menu: menuReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
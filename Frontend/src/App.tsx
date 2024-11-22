import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Routes from './router/router';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};
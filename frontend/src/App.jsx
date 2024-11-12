// src/App.jsx

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router/Router';
import store from './redux/store/store'; // Import the Redux store

function App() {
	return (
		<Provider store={store}>
			{/* Wrap the app in the Provider to make Redux store accessible */}
			<div className="app">
				<RouterProvider router={Router} />
			</div>
		</Provider>
	);
}

export default App;

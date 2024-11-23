import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { RouterProvider } from 'react-router-dom';
import Router from './router/router';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={Router} />
        </Provider>
    );
};

export default App;
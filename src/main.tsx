import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import './i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

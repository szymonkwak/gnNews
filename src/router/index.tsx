import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { MainContent } from '../components';
import ErrorPage from '../components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'country/:countryId',
        element: <MainContent />,
      },
    ],
  },
]);

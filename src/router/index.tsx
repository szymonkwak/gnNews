import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { MainContent } from '../components';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import EmptyStarter from '../components/MainContent/components/EmptyStarter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <EmptyStarter />,
      },
      {
        path: 'country/:countryId',
        element: <MainContent />,
      },
    ],
  },
]);

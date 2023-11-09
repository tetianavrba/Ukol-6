import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { TanaPage } from './pages/TanaPage';
import { TynaPage } from './pages/TynaPage';

import './global.css';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },

      {
        path: 'tanapage',
        element: <TanaPage />,
      },
      {
        path: 'tynapage',
        element: <TynaPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Main from './component/Layout/Main';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Blog from './component/Blog/Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewDetails from './component/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('featured.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'application',
        element: <AppliedJob />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path:'/featured/:Id',
        element: <ViewDetails />,
        loader: ({ params }) => fetch('/featured.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

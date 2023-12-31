import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import House from './Components/Home/House/House';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <House />,
      },
      {
        path: "/applied",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json')
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

reportWebVitals();

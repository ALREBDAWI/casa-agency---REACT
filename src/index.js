import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import Error from './components/Error';
// import Header from './components/Header';
// import Footer from './components/Footer';
import App from './App';
import './styles/style.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FicheLogement from './pages/Fiche_Logement';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     errorElement: <Error />,
//   },

//   {
//     path: "/fiche_logement",
//     element: <FicheLogement />,
//     errorElement: <Error />,
//   },

// ]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <React.StrictMode>
    <App />
    {/* <Headers /> */}
    {/* <RouterProvider router={router} /> */}
    {/* <Footer /> */}
  </React.StrictMode>

);

reportWebVitals();

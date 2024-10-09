import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from './Account.jsx';
import Sign from './Sign.jsx';
import Log from './Log.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "account",
    element: <Account />
  },{
    path: "account/sign",
    element: <Sign />
  },{
    path: "account/log",
    element: <Log />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)

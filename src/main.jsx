import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
import Form from './Components/Form.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/form',
        element: <Form />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>

  </React.StrictMode>,
)
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",//đường dẫn
    element: <HomePage />,//element show lên cho giao diện
  },
  {
  path: "/login",//đường dẫn
  element: <LoginPage/>,
  },

   {
  path: "/register",//đường dẫn
  element: <RegisterPage/>,
  },
]);
  return  <RouterProvider router={router} />

  
}

export default App
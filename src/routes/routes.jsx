import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { ErrorPage } from '../pages/ErrorPage'
import { Home } from '../pages/Task2/Home/Home'
import { Abuto } from '../pages/Task2/Abuto/Abuto'

import { Count } from '../pages/Task3/Count/Count'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'abuto', element: <Abuto /> }
    ]
  }, {
    path: '/task3',
    element: <Count />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Count /> },
      { path: 'task3', element: <Count /> }
    ]
  }
])
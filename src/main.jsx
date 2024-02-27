import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main/Main.jsx'
import Exhibitions from './pages/Exhibition/Exhibitions.jsx'
import Schedule from './pages/Schedule/Schedule.jsx'
import Error from './pages/Error/Error.jsx'
import About from './pages/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/exhibitions',
    element: <Exhibitions />
  },
  {
    path: '/schedule',
    element: <Schedule />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '*',
    element: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

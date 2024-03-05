import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main/Main.jsx'
import Exhibitions from './pages/Exhibition/Exhibitions.jsx' 
import Error from './pages/Error/Error.jsx'
import About from './pages/About/About.jsx'
import Layout from './layout/Menu.jsx'
import Articles from './pages/Articles/Articles.jsx'
import PaymentTop from './components/paymentTop/PaymentTop.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
    path: '/',
    element: <Main />
  },
      {
    path: '/exhibitions',
    element: <Exhibitions />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/payment',
    element: <PaymentTop />
  },
    ]
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

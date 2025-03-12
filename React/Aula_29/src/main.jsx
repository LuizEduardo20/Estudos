import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Dashboard from './Routes/Dashboard.jsx'
import Contact from './Routes/Contact.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/dashboard', element: <Dashboard/>},
  {path: '/contact', element: <Contact/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

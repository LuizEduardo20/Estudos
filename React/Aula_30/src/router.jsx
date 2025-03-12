import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Dashboard from './Routes/Dashboard'
import Contact from './Routes/Contact'

export const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/contact', element: <Contact/>}
])
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Homepage/Home.jsx'
const router = createBrowserRouter([
  {
    element: <App />, path: '/', children: [
  {element:<Home/>,path:'/'}
]}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>,
)

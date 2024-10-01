import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import BackgroundOverlay from './components/BackgroundOverlay.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Home/>
  },
  {
    path: "/about",
    element: <Home/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundOverlay/>
    <RouterProvider router={router} />
  </StrictMode>,
)

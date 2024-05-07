import React from 'react'
import ReactDOM from 'react-dom/client'
import { TimerProvider } from './contexts/TimerContext.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Timer from './pages/Timer.tsx'
import Home from './pages/Home.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {}
    ]
  },
  {
    path: 'timer',
    element: <Timer />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TimerProvider>
      <RouterProvider router={router} />
    </TimerProvider>
  </React.StrictMode>,
)

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

// Components
import Authentication from './components/auth/authentication'
import DashboardContainer from './Container/DashboardContianer'

function App() {
  {/* Router */}
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />
    },
    {
      path: "/dashboard",
      element: <DashboardContainer />
    }
  ])

  {/* return */}
  return (
    <RouterProvider router={router} />
  )
}

export default App
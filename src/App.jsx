import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

// Components
import Authentication from './components/auth/authentication'
import DashboardContainer from './Container/DashboardContianer'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  {/* Router */}
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />
    },
    {
      path: "/dashboard",
      element: <DashboardContainer />,
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    }
  ])

  {/* return */}
  return (
    <RouterProvider router={router} />
  )
}

export default App
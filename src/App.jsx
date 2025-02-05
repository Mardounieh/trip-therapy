import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ThemeProvider } from './context/ThemeContext'

// Components
import Authentication from './components/auth/authentication'
import DashboardContainer from './Container/DashboardContianer'
import Dashboard from './components/Dashboard/Travel'
import TravelMode from './components/Dashboard/Travel/TravelMode'
import Travel from './components/Dashboard/Travel'

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
        },
        {
          path: "travel-mode",
          element: <TravelMode />
        },
        {
          path: "travel-mode/:modeId",
          element: <Travel />
        }
      ]
    }
  ])

  {/* return */}
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
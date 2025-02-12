import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ThemeProvider } from './context/ThemeContext'

// Components
import Authentication from './components/auth/authentication'
import DashboardContainer from './Container/DashboardContainer'
import Dashboard from './components/Dashboard/Travel'
import TravelMode from './components/Dashboard/Travel/TravelMode'
import Travel from './components/Dashboard/Travel'
import Container from './Container/Container'
import Landing from './components/Landing/Landing'

function App() {
  {/* Router */}
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
    {
      path: "/dashboard",
      element: <DashboardContainer />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "travel-mode",
          element: <TravelMode />,
        },
        {
          path: "travel-mode/:modeId",
          element: <Travel />,
        },
      ],
    },
  ]);

  {/* return */}
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
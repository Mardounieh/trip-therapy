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
import Blog from './components/Blog/Blog'
import BlogDetail from './components/Blog/BlogDetail'
import BlogContainer from './Container/BlogContainer'
import ContactUs from './components/ContactUs/ContactUs'
import EdLanding from './components/EdLanding/Landing'
import EdContainer from './Container/EdContainer'

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
      path: "/ed",
      element: <EdContainer />,
      children: [
        {
          index: true,
          element: <EdLanding />
        }
      ]
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
    {
      path: "/blog",
      element: <BlogContainer />,
      children : [
        {
          index: true,
          element: <Blog />
        },
        {
          path: "/blog/:id",
          element: <BlogDetail />
        }
      ]
    },
    {
      path: "/contact",
      element: <ContactUs />
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
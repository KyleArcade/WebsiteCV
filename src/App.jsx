import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Profile from './pages/Profile'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Profile />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

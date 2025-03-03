import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Dashboard />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

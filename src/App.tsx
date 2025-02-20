import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

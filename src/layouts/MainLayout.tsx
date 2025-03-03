import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <main className="flex bg-gray-200 h-screen">
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default MainLayout
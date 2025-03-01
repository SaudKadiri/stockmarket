import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <main className="flex bg-blue-500">
        <Sidebar />
          <Outlet />
    </main>
    
  )
}

export default MainLayout
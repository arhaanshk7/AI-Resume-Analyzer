import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-gray-100">

        <TopNavbar />

        <main className="p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;
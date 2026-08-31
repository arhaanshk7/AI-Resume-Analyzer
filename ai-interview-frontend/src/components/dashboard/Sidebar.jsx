import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaFileUpload,
  FaMicrophone,
  FaRobot,
  FaHistory,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Sidebar() {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const handleLogout = () => {

    localStorage.removeItem("token");
    setUser(null)

    navigate("/login");

  };


  return (

    <aside className="w-72 min-h-screen bg-purple-700 text-white flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-purple-600">

        <h1 className="text-3xl font-bold">
          InterviewAI
        </h1>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4">

        <ul className="space-y-2">

          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
            >
              <FaHome />
              <span>Overview</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
            >
              <FaUser />
              <span>Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/resume"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
            >
              <FaFileUpload />
              <span>Upload Resume</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/interview"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
            >
              <FaMicrophone />
              <span>AI Interview</span>
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/dashboard/history"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 transition"
            >
              <FaHistory />
              <span>Interview History</span>
            </NavLink>
          </li>

        </ul>

      </nav>

      {/* Logout */}

      <div className="p-4 border-t border-purple-600">

        <button onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          <FaSignOutAlt />

          <span>Logout</span>

        </button>

      </div>

    </aside>

  );

}

export default Sidebar;
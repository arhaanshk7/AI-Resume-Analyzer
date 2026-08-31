import {
  FaMicrophone,
  FaFileUpload,
  FaRobot,
  FaHistory,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Overview() {
  return (
    <div>

      {/* Heading */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Welcome 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Ready to ace your next interview?
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       <Link to="/dashboard/interview">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition cursor-pointer">

          <FaMicrophone className="text-4xl text-purple-600 mb-4" />

          <h2 className="text-2xl font-bold">
            Start AI Interview
          </h2>

          <p className="text-gray-500 mt-2">
            Practice technical interviews with AI.
          </p>

        </div>
        </Link>
         
        <Link to="/dashboard/resume">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition cursor-pointer">

          <FaFileUpload className="text-4xl text-purple-600 mb-4" />

          <h2 className="text-2xl font-bold">
            Upload Resume
          </h2>

          <p className="text-gray-500 mt-2">
            Upload your latest resume for AI analysis.
          </p>

        </div>
        </Link>


        <Link to ="/dashboard/history">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition cursor-pointer">

          <FaHistory className="text-4xl text-purple-600 mb-4" />

          <h2 className="text-2xl font-bold">
            Interview History
          </h2>

          <p className="text-gray-500 mt-2">
            View your previous interview sessions.
          </p>

        </div>
        </Link>

      </div>

    </div>
  );
}

export default Overview;
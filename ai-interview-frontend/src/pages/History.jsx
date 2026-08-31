import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InterviewHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/interviews/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setHistory(response.data.history);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Interview History
          </h1>

          <p className="text-gray-500 mt-2">
            View all your previous resume analyses and interview reports.
          </p>
        </div>

        {/* Empty State */}
        {history.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              No History Found
            </h2>

            <p className="text-gray-500 mt-3">
              Upload your resume to generate your first interview report.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {history.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-xl transition duration-300"
              >
                {/* Left Side */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Resume Analysis
                  </h2>

                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-semibold">
                      ATS Score: {item.analysis.atsScore}%
                    </span>

                    <span className="text-gray-500">
                      {new Date(item.uploadedAt).toDateString()}
                    </span>
                  </div>
                </div>

                {/* Right Side */}
                <div className="mt-6 md:mt-0">
                  <Link
                    to={`/dashboard/history/${item._id}`}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewHistory;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const InterviewDetail = () => {
  const { id } = useParams();

  const [resume, setResume] = useState(null);
  

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/interviews/history/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResume(response.data.resume);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }

    };

    fetchDetail();
  }, [id]);



  if (!resume) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-red-500">
          Resume Analysis Not Found
        </h2>
      </div>
    );
  }

  const analysis = resume.analysis;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Resume Analysis Report
          </h1>

          <p className="text-gray-500 mt-2">
            Uploaded on{" "}
            <span className="font-medium">
              {new Date(resume.uploadedAt).toDateString()}
            </span>
          </p>
        </div>

        {/* Overall Score */}
        <div className="mt-6 bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-xl text-gray-500 mb-3">
            ATS Score
          </h2>

          <div className="text-6xl font-bold text-green-600">
            {analysis.atsScore}%
          </div>
        </div>

        {/* Strengths & Missing Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-5">
              ✅ Strengths
            </h2>

            <ul className="space-y-3 list-disc list-inside">
              {analysis.strengths?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-5">
              🚀 Missing Skills
            </h2>

            <ul className="space-y-3 list-disc list-inside">
              {analysis.missingSkills?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Weaknesses & Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-yellow-600 mb-5">
              ⚠️ Weaknesses
            </h2>

            <ul className="space-y-3 list-disc list-inside">
              {analysis.weaknesses?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-5">
              💡 Resume Suggestions
            </h2>

            <ul className="space-y-3 list-disc list-inside">
              {analysis.resumeSuggestions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Project Review */}
        {analysis.projectReview && (
          <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-5">
              📄 Project Review
            </h2>

            <p className="text-gray-700 leading-8">
              {analysis.projectReview}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default InterviewDetail;
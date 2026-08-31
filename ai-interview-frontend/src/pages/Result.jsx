import { useLocation } from "react-router-dom";
import ScoreCard from "../components/cards/ScoreCard";
import InfoCard from "../components/cards/InfoCard";

function Result() {
  const location = useLocation();
  const analysis = location.state.analysis;

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-8">

          <h1 className="text-4xl font-bold text-gray-800">
            AI Resume Analysis
          </h1>

          <p className="text-gray-500 mt-2">
            Your resume has been analyzed successfully.
          </p>

        </div>

        {/* Score Cards */}
        <div className="mt-4">
          <ScoreCard 
            title="Overall Score"
            score={analysis.overallScore}
            color="text-purple-600"
            bgColor="bg-purple-600"
          />
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mt-8">

          <ScoreCard
            title="ATS Score"
            score={analysis.atsScore}
            color="text-green-600"
            bgColor="bg-green-600"
          />

          <ScoreCard
            title="Grammar Score"
            score={analysis.grammarScore}
            color="text-blue-600"
            bgColor="bg-blue-600"
          />

          <ScoreCard
            title="Formatting Score"
            score={analysis.formattingScore}
            color="text-orange-500"
            bgColor="bg-orange-600"
          />

        </div>

        {/* Strengths & Missing Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <InfoCard
            title="Strengths"
            items={analysis.strengths}
            color="text-green-600"
          />

          <InfoCard
            title="Missing Skills"
            items={analysis.missingSkills}
            color="text-red-600"
          />

        </div>

        {/* Weaknesses & Project Review */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <InfoCard
            title="Weaknesses"
            items={analysis.weaknesses}
            color="text-yellow-600"
          />

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-4">
              Project Review
            </h2>

            <p className="text-gray-700 leading-7">
              {analysis.projectReview}
            </p>

          </div>

        </div>

        {/* Resume Improvement Suggestions */}
        <div className="mt-8">

          <InfoCard
            title="Resume Improvement Suggestions"
            items={analysis.resumeSuggestions}
            color="text-blue-600"
          />

        </div>

      </div>

    </div>
  );
}

export default Result;
function ScoreCard({ title, score, color,bgColor }) {

  let status = "";

  if (score >= 90) {
    status = "Excellent";
  } else if (score >= 75) {
    status = "Good";
  } else if (score >= 60) {
    status = "Average";
  } else {
    status = "Needs Improvement";
  }

  return (

    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">

      <div className="flex items-center gap-2">

        <span className="text-2xl">
          📊
        </span>

        <h2 className="text-lg font-semibold text-gray-600">
          {title}
        </h2>
        

      </div>

      <p className={`text-5xl font-bold mt-6 ${color}`}>
        {score}
        <span className="text-2xl text-gray-400">
          /100
        </span>
      </p>

      <p className="mt-3 font-medium text-gray-500">
        {status}
      </p>

      <div className="w-full h-3 bg-gray-200 rounded-full mt-5 overflow-hidden">

        <div
          className={`h-full rounded-full ${bgColor}`}
          style={{ width: `${score}%` }}
        ></div>

      </div>

    </div>

  );
}

export default ScoreCard;
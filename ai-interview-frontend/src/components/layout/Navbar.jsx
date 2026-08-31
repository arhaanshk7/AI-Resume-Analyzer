import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50 flex justify-between items-center px-10 py-5">

      <h2 className="text-2xl font-bold text-purple-600">
        InterviewAI
      </h2>

      <ul className="flex gap-8 items-center">

        <li>
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <a
            href="#features"
            className="text-gray-700 hover:text-purple-600 transition"
          >
            Features
          </a>
        </li>

        {token ? (

          <>

            <li>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
              >
                Logout
              </button>
            </li>

          </>

        ) : (

          <>

            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition shadow-md"
              >
                Sign Up
              </Link>
            </li>

          </>

        )}

      </ul>

    </nav>

  );
}

export default Navbar;
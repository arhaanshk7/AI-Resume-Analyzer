import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);


  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setError("");
    setSuccess("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");
  

    try {

      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );

      localStorage.setItem("token", response.data.token);

      await fetchUser();

      setSuccess(response.data.message);

      navigate("/dashboard");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Something went wrong. Please try again."
      );

    }

  };

  return (

    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-white px-6">

      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-2xl
          border
          border-purple-100
          p-8
        "
      >

        {/* Logo */}

        <div className="flex justify-center">

          <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg">

            <span className="text-white text-2xl font-bold">
              AI
            </span>

          </div>

        </div>

        {/* Heading */}

        <h1 className="mt-6 text-4xl font-extrabold text-center text-gray-900">

          Welcome Back 👋

        </h1>

        <p className="mt-3 text-center text-gray-600 leading-7">

          Continue your AI Interview journey by signing in to your account.

        </p>

        {/* Form */}

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>

          {/* Email */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Email Address

            </label>

            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-200 transition">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent"
                required
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Password

            </label>

            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-200 transition">

              <FaLock className="text-gray-400" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent"
                required
              />

            </div>

          </div>

          {success && (

            <p className="text-green-600 text-center font-medium">

              {success}

            </p>

          )}

          {error && (

            <p className="text-red-500 text-center font-medium">

              {error}

            </p>

          )}

          {/* Button */}

          <button
            type="submit"
            className="
              w-full
              bg-purple-600
              hover:bg-purple-700
              text-white
              font-semibold
              py-4
              rounded-xl
              transition
              duration-300
              hover:scale-[1.02]
              shadow-lg
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >

            Sign In

          </button>

        </form>

        {/* Bottom */}

        <p className="mt-8 text-center text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:text-purple-700"
          >

            Sign Up

          </Link>

        </p>

      </div>

    </section>

  );

}

export default Login;
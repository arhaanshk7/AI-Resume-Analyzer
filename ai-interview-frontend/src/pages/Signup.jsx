import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


function Signup() {
  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const[error,setError]=useState("");
  const[success,setSuccess]=useState("");

  const[formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try{
      const response = await axios.post("http://localhost:5000/signup",formData);
      setSuccess(response.data.message)
      localStorage.setItem("token",response.data.token);
      await fetchUser();
      setSuccess(response.data.message);
      sessionStorage.setItem(
        "successMessage",
        "Account created successfully!"
      );

      navigate("/dashboard");
            
    }
    catch(err){
      setError(err.response.data.message);
    }
    
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-white px-6 py-10">
      

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

           

        <h1 className="mt-6 text-4xl font-extrabold text-center text-gray-900">
          Create Account 🚀
        </h1>

        <p className="mt-3 text-center text-gray-600 leading-7">
          Join InterviewAI and start preparing for your dream job with AI-powered interview practice.
        </p>

        {/* Form */}

        <form 
         onSubmit={handleSubmit}
         className="mt-10 space-y-6">

          {/* Full Name */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-200 transition">

              <FaUser className="text-gray-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full outline-none bg-transparent"
                required:true
              />

            </div>

          </div>

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
                required:true
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
                placeholder="Create a password"
                className="w-full outline-none bg-transparent"
                required:true
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

          
          {/* Create Account Button */}

          <button
            className="
              w-full
              mt-4
              bg-purple-600
              hover:bg-purple-700
              text-white
              font-semibold
              py-4
              rounded-xl
              shadow-lg
              transition
              duration-300
              hover:scale-[1.02]
            "
          >
            Create Account
          </button>

        </form>


        {/* Login */}

        <p className="mt-8 text-center text-gray-600">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Login
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Signup;
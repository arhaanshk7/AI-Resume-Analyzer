import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FaUserCircle, FaEnvelope, FaUser } from "react-icons/fa";

function Profile() {

  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        Loading Profile...
      </div>
    );
  }

  return (

    <div className="max-w-4xl mx-auto">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="flex items-center gap-6 mb-10">

          <FaUserCircle className="text-8xl text-purple-600" />

          <div>

            <h1 className="text-4xl font-bold">
              {user.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome to your AI Interview Dashboard
            </p>

          </div>

        </div>

        {/* Profile Details */}

        <div className="space-y-8">

          <div className="flex items-center gap-5">

            <FaUser className="text-2xl text-purple-600" />

            <div>

              <p className="text-gray-500">
                Full Name
              </p>

              <h2 className="text-xl font-semibold">
                {user.name}
              </h2>

            </div>

          </div>


          <div className="flex items-center gap-5">

            <FaEnvelope className="text-2xl text-purple-600" />

            <div>

              <p className="text-gray-500">
                Email Address
              </p>

              <h2 className="text-xl font-semibold">
                {user.email}
              </h2>

            </div>

          </div>


          <div>


          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;
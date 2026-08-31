import { FaBell, FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

function TopNavbar() {

  const { user } = useContext(AuthContext);

  const [message, setMessage] = useState("");


  useEffect(() => {

    const savedMessage = sessionStorage.getItem(
      "successMessage"
    );


    if(savedMessage){

      setMessage(savedMessage);


      sessionStorage.removeItem(
        "successMessage"
      );


      setTimeout(()=>{

        setMessage("");

      },5000);


    }


  }, []);



  return (

    <header 
      className="
        relative
        bg-white
        shadow-sm
        px-8
        py-5
        flex
        items-center
        justify-between
      "
    >


      {/* Success Notification */}

      {message && (

        <div
          className="
            absolute
            top-5
            left-1/2
            -translate-x-1/2
            bg-green-100
            text-green-700
            px-6
            py-3
            rounded-xl
            shadow-md
            font-semibold
            z-50
            animate-fade-in
          "
        >

          ✅ {message}

        </div>

      )}



      {/* Left Section */}

      <div>

        <h1 
          className="
            text-3xl
            font-bold
            text-gray-800
          "
        >

          Dashboard

        </h1>


        <p 
          className="
            text-gray-500
            mt-1
          "
        >

          Welcome back 👋

        </p>


      </div>




      {/* Right Section */}

      <div 
        className="
          flex
          items-center
          gap-6
        "
      >


        {/* Notification */}

        <button
          className="
            text-2xl
            text-gray-600
            hover:text-purple-600
            transition
          "
        >

          <FaBell />

        </button>



        {/* User */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <FaUserCircle
            className="
              text-4xl
              text-purple-600
            "
          />


          <div>

            <h2
              className="
                font-semibold
                text-gray-800
              "
            >

              {user?.name || "User"}

            </h2>


            <p
              className="
                text-sm
                text-gray-500
              "
            >

              Candidate

            </p>


          </div>


        </div>


      </div>


    </header>

  );

}


export default TopNavbar;
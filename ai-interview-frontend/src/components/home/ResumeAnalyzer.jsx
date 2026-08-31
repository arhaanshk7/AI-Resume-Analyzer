import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaCheckCircle,
  FaStar,
  FaLightbulb
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
function ResumeAnalyzer() {

  const navigate = useNavigate();
  return (

    <section
      id="resume-analyzer"
      className="
      relative
      py-24
      bg-white
      overflow-hidden"
    >



      {/* Background Glow */}

      <div
        className="
        absolute
        left-10
        top-20
        w-72
        h-72
        bg-purple-300
        rounded-full
        blur-3xl
        opacity-20"
      >
      </div>





      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        relative"
      >




        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.8
          }}

          className="
          text-center
          max-w-3xl
          mx-auto"
        >


          <h2
            className="
            text-4xl
            lg:text-5xl
            font-extrabold
            text-gray-900"
          >

            Analyze Your Resume With{" "}

            <span className="text-purple-600">
              AI
            </span>

          </h2>



          <p
            className="
            mt-5
            text-lg
            text-gray-600"
          >

            Get instant AI-powered insights,
            ATS scoring, and personalized recommendations.

          </p>


        </motion.div>








        {/* Main Content */}


        <div
          className="
          mt-16
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center"
        >





          {/* Upload Card */}


          <motion.div


            initial={{
              opacity:0,
              x:-50
            }}


            whileInView={{
              opacity:1,
              x:0
            }}


            viewport={{
              once:true
            }}


            transition={{
              duration:0.8
            }}



            className="
            bg-purple-50
            rounded-3xl
            p-10"
          >



            <h3
              className="
              text-2xl
              font-bold
              text-gray-900"
            >

              Upload Your Resume

            </h3>



            <p
              className="
              mt-3
              text-gray-600"
            >

              Upload your PDF or DOCX resume
              and let AI analyze your profile.

            </p>






            {/* Upload Box */}


            <div
              className="
              mt-8
              border-2
              border-dashed
              border-purple-300
              rounded-3xl
              bg-white
              p-10
              text-center"
            >


              <FaCloudUploadAlt
                className="
                mx-auto
                text-5xl
                text-purple-600"
              />





              <p
                className="
                text-sm
                text-gray-500
                mt-2"
              >

                PDF, DOCX supported

              </p>



              <button onClick={()=>navigate("/dashboard")}
                className="
                mt-6
                bg-purple-600
                hover:bg-purple-700
                text-white
                px-8
                py-3
                rounded-xl
                transition"
              >

                Analyze Resume

              </button>



            </div>



          </motion.div>








          {/* AI Report Dashboard */}



          <motion.div


            initial={{
              opacity:0,
              x:50
            }}


            whileInView={{
              opacity:1,
              x:0
            }}


            viewport={{
              once:true
            }}


            transition={{
              duration:0.8
            }}



            className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-8
            border
            border-gray-100"
          >





            <h3
              className="
              text-xl
              font-bold
              text-gray-900"
            >

              AI Resume Report

            </h3>







            {/* Score */}


            <div
              className="
              mt-8
              flex
              items-center
              justify-between"
            >


              <div>

                <p className="text-gray-500 text-sm">
                  Overall Score
                </p>


                <h2
                  className="
                  text-5xl
                  font-extrabold
                  text-purple-600"
                >

                  92%

                </h2>

              </div>



              <FaStar
                className="
                text-5xl
                text-yellow-400"
              />

            </div>








            {/* Metrics */}


            <div
              className="
              mt-8
              space-y-5"
            >



              <div className="flex justify-between">

                <span className="text-gray-600">
                  ATS Compatibility
                </span>


                <span className="font-bold">
                  94%
                </span>


              </div>





              <div className="flex justify-between">


                <span className="text-gray-600">
                  Skills Match
                </span>


                <span className="font-bold">
                  89%
                </span>


              </div>




            </div>








            {/* Recommendations */}


            <div
              className="
              mt-8
              bg-purple-50
              rounded-2xl
              p-5"
            >



              <h4
                className="
                font-bold
                text-purple-700
                flex
                items-center
                gap-2"
              >

                <FaLightbulb />

                AI Recommendations

              </h4>





              <ul
                className="
                mt-4
                space-y-3
                text-gray-600"
              >


                <li className="flex gap-2">

                  <FaCheckCircle className="text-green-500 mt-1"/>

                  Add AWS cloud skills

                </li>



                <li className="flex gap-2">

                  <FaCheckCircle className="text-green-500 mt-1"/>

                  Improve project descriptions

                </li>



                <li className="flex gap-2">

                  <FaCheckCircle className="text-green-500 mt-1"/>

                  Add measurable achievements

                </li>



              </ul>



            </div>






          </motion.div>






        </div>



      </div>



    </section>

  );

}


export default ResumeAnalyzer;
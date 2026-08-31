import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaBullseye } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white">

      {/* Background Glow Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20"></div>



      <div className="max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex flex-col lg:flex-row items-center gap-12">


        {/* Left Side */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

          className="w-full lg:w-1/2"
        >


          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">

            Crack Your Next{" "}

            <span className="text-purple-600">
              Interview
            </span>

            <br />

            With AI

          </h1>



          <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">

            Practice AI-powered mock interviews, analyze your resume,
            and receive intelligent feedback to land your dream job.

          </p>




        </motion.div>





        {/* Right Side */}

        <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1
          }}

          className="w-full lg:w-1/2 flex justify-center relative"
        >



          {/* AI Feedback Card */}

          <motion.div

            animate={{
              y:[0,-8,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            className="
            absolute 
            -top-6 
            -left-4 
            bg-white 
            shadow-xl 
            rounded-2xl 
            px-5 
            py-3
            z-10"
          >

            <p className="text-sm text-gray-500 flex items-center gap-2">

              <FaRobot className="text-purple-600"/>

              AI Feedback

            </p>


            <p className="font-bold text-green-600">
              Excellent Resume
            </p>


          </motion.div>






          {/* Main Dashboard */}

          <motion.div

            animate={{
              y:[0,-10,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            whileHover={{
              scale:1.02
            }}


            className="
            w-full 
            max-w-[430px]
            bg-white 
            rounded-3xl 
            shadow-2xl 
            p-8"
          >



            <h3 className="text-xl font-bold text-gray-900">
              Resume Analysis
            </h3>





            <div className="mt-6">


              <p className="text-sm text-gray-500">
                Overall Score
              </p>



              <h2 className="text-5xl font-extrabold text-purple-600 mt-2">
                92%
              </h2>



              <div className="w-full h-3 bg-gray-200 rounded-full mt-4 overflow-hidden">


                <motion.div

                  initial={{
                    width:0
                  }}

                  animate={{
                    width:"92%"
                  }}

                  transition={{
                    duration:1.5
                  }}

                  className="h-full bg-purple-600 rounded-full"

                />


              </div>


            </div>






            <div className="mt-8 space-y-4">


              <div className="flex justify-between">

                <span className="text-gray-600">
                  ATS Score
                </span>

                <span className="font-semibold">
                  94%
                </span>

              </div>




              <div className="flex justify-between">

                <span className="text-gray-600">
                  Job Match
                </span>

                <span className="font-semibold">
                  89%
                </span>

              </div>


            </div>







            <div className="mt-8">


              <h4 className="font-semibold text-gray-900">
                Strengths
              </h4>


              <ul className="mt-3 space-y-2 text-gray-600">

                <li>
                  ✅ Strong MERN Projects
                </li>

                <li>
                  ✅ Excellent Formatting
                </li>

                <li>
                  ⚠ Add Docker Skills
                </li>

              </ul>


            </div>







            <div className="mt-8 bg-purple-50 rounded-2xl p-4">


              <h4 className="font-semibold text-purple-700">
                🤖 AI Recommendation
              </h4>


              <p className="text-gray-600 mt-2 text-sm leading-6">

                Add AWS skills, improve project descriptions,
                and include measurable achievements to increase
                your interview chances.

              </p>


            </div>


          </motion.div>







          {/* ATS Card */}

          <motion.div

            animate={{
              y:[0,-8,0]
            }}

            transition={{
              duration:3.5,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            className="
            absolute
            -bottom-6
            -left-6
            bg-white
            shadow-xl
            rounded-2xl
            px-5
            py-4"
          >

            <p className="text-sm text-gray-500 flex items-center gap-2">

              <FaChartLine className="text-purple-600"/>

              ATS Score

            </p>


            <p className="text-xl font-bold text-purple-600">
              94%
            </p>


          </motion.div>







          {/* Job Match Card */}


          <motion.div

            animate={{
              y:[0,-10,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            className="
            absolute
            top-1/2
            -right-8
            bg-white
            shadow-xl
            rounded-2xl
            px-5
            py-4"
          >


            <p className="text-sm text-gray-500 flex items-center gap-2">

              <FaBullseye className="text-green-600"/>

              Job Match

            </p>


            <p className="text-xl font-bold text-green-600">
              89%
            </p>


          </motion.div>



        </motion.div>


      </div>


    </section>
  );
}


export default Hero;
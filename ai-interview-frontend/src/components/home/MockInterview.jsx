import { motion } from "framer-motion";
import {
  FaRobot,
  FaUser,
  FaMicrophone,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";


import { useNavigate } from "react-router-dom";


function MockInterview() {

  const navigate = useNavigate()


  const feedback = [
    {
      title: "Technical Skills",
      score: "92%"
    },
    {
      title: "Communication",
      score: "88%"
    },
    {
      title: "Confidence",
      score: "90%"
    }
  ];



  return (

    <section
      id="mock-interview"
      className="
      relative
      py-24
      bg-gradient-to-b
      from-purple-50
      to-white
      overflow-hidden"
    >



      {/* Background Glow */}

      <div
        className="
        absolute
        right-10
        top-20
        w-80
        h-80
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

            Practice Interviews With{" "}

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

            Experience realistic interview conversations
            and receive intelligent AI feedback instantly.

          </p>



        </motion.div>









        {/* Main Interview Interface */}



        <div
          className="
          mt-16
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center"
        >






          {/* Chat Interface */}


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



            className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-8
            border
            border-gray-100"
          >




            {/* Header */}


            <div
              className="
              flex
              items-center
              gap-4
              border-b
              pb-5"
            >


              <div
                className="
                w-14
                h-14
                rounded-full
                bg-purple-100
                flex
                items-center
                justify-center
                text-purple-600
                text-2xl"
              >

                <FaRobot />

              </div>



              <div>

                <h3 className="font-bold text-gray-900">
                  AI Interviewer
                </h3>

                <p className="text-sm text-green-600">
                  ● Online
                </p>

              </div>



            </div>









            {/* AI Question */}


            <div
              className="
              mt-8
              bg-purple-50
              rounded-2xl
              p-5"
            >


              <p
                className="
                text-sm
                text-purple-600
                font-semibold"
              >

                AI Question

              </p>



              <p
                className="
                mt-3
                text-gray-800
                leading-7"
              >

                Explain your MERN stack project
                architecture and how data flows
                between frontend and backend.

              </p>



            </div>









            {/* User Answer */}


            <div
              className="
              mt-6
              flex
              gap-3
              items-start"
            >



              <div
                className="
                w-10
                h-10
                rounded-full
                bg-gray-100
                flex
                items-center
                justify-center"
              >

                <FaUser />

              </div>





              <div
                className="
                bg-gray-100
                rounded-2xl
                p-4
                text-gray-700
                flex-1"
              >

                I created a MERN application where
                React handles UI, Node and Express
                manage APIs, and MongoDB stores data.

              </div>



            </div>









            {/* Answer Button */}


            <button onClick={()=>navigate("/dashboard")}
              className="
              mt-8
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-purple-600
              hover:bg-purple-700
              text-white
              py-4
              rounded-xl
              transition
              "
            >

              <FaMicrophone />

              Start Answering

            </button>





          </motion.div>









          {/* Feedback Dashboard */}



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
              text-2xl
              font-bold
              text-gray-900"
            >

              AI Performance Analysis

            </h3>





            <p
              className="
              mt-3
              text-gray-600"
            >

              AI evaluates your answers and provides
              detailed improvement insights.

            </p>








            {/* Scores */}


            <div
              className="
              mt-8
              space-y-5"
            >



              {feedback.map((item,index)=>(


                <div
                  key={index}
                  className="
                  bg-purple-50
                  rounded-2xl
                  p-5"
                >



                  <div
                    className="
                    flex
                    justify-between"
                  >

                    <span className="font-semibold">
                      {item.title}
                    </span>


                    <span
                      className="
                      font-bold
                      text-purple-600"
                    >

                      {item.score}

                    </span>


                  </div>



                  <div
                    className="
                    mt-3
                    h-2
                    bg-gray-200
                    rounded-full"
                  >

                    <div
                      className="
                      h-full
                      bg-purple-600
                      rounded-full"
                      style={{
                        width:item.score
                      }}
                    >
                    </div>


                  </div>



                </div>


              ))}



            </div>








            {/* AI Suggestions */}


            <div
              className="
              mt-8
              bg-green-50
              rounded-2xl
              p-5"
            >


              <h4
                className="
                font-bold
                text-green-700"
              >

                AI Suggestions

              </h4>




              <ul
                className="
                mt-4
                space-y-3
                text-gray-700"
              >


                <li className="flex gap-2">

                  <FaCheckCircle className="text-green-500"/>

                  Improve explanation clarity

                </li>


                <li className="flex gap-2">

                  <FaCheckCircle className="text-green-500"/>

                  Add more technical details

                </li>


                <li className="flex gap-2">

                  <FaCheckCircle className="text-green-500"/>

                  Increase confidence

                </li>


              </ul>


            </div>





          </motion.div>





        </div>



      </div>


    </section>

  );

}


export default MockInterview;
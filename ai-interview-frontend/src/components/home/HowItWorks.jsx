import { motion } from "framer-motion";
import {
  FaFileUpload,
  FaRobot,
  FaMicrophone,
  FaChartBar
} from "react-icons/fa";


function HowItWorks() {


  const steps = [

    {
      number: "01",
      icon: <FaFileUpload />,
      title: "Upload Your Resume",
      description:
        "Upload your resume and let our AI analyze your skills, experience, projects, and profile."
    },


    {
      number: "02",
      icon: <FaRobot />,
      title: "AI Analyzes Your Profile",
      description:
        "Our AI evaluates your resume, identifies strengths, weaknesses, and calculates your ATS score."
    },


    {
      number: "03",
      icon: <FaMicrophone />,
      title: "Practice Mock Interview",
      description:
        "Take realistic AI-powered interviews based on your role, skills, and career goals."
    },


    {
      number: "04",
      icon: <FaChartBar />,
      title: "Get Detailed Feedback",
      description:
        "Receive performance analytics, improvement suggestions, and personalized recommendations."
    }

  ];



  return (

    <section
      id="how-it-works"
      className="
      relative
      py-24
      bg-gradient-to-b
      from-white
      to-purple-50
      overflow-hidden"
    >



      {/* Background Glow */}

      <div className="
      absolute
      right-10
      top-20
      w-72
      h-72
      bg-purple-300
      rounded-full
      blur-3xl
      opacity-20
      ">
      </div>





      <div className="
      max-w-7xl
      mx-auto
      px-6
      lg:px-10
      relative
      ">





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


          <h2 className="
          text-4xl
          lg:text-5xl
          font-extrabold
          text-gray-900"
          >

            How{" "}

            <span className="text-purple-600">
              AI Interview
            </span>

            Works

          </h2>



          <p className="
          mt-5
          text-lg
          text-gray-600"
          >

            From resume analysis to personalized interview feedback,
            our AI helps you prepare smarter and perform better.

          </p>



        </motion.div>








        {/* Steps Container */}


        <div className="
        relative
        mt-20
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-10"
        >





          {/* Connecting Line Desktop */}

          <div className="
          hidden
          lg:block
          absolute
          top-16
          left-0
          right-0
          h-[2px]
          bg-purple-200
          ">
          </div>








          {steps.map((step,index)=>(


            <motion.div


              key={index}


              initial={{
                opacity:0,
                y:50
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                duration:0.6,
                delay:index * 0.15
              }}



              className="
              relative
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              hover:shadow-2xl
              transition
              duration-300
              "

            >





              {/* Number Badge */}


              <div className="
              absolute
              -top-5
              left-8
              bg-purple-600
              text-white
              w-12
              h-12
              rounded-full
              flex
              items-center
              justify-center
              font-bold
              shadow-lg"
              >

                {step.number}

              </div>







              {/* Icon */}


              <div className="
              mt-8
              w-16
              h-16
              rounded-2xl
              bg-purple-100
              text-purple-600
              flex
              items-center
              justify-center
              text-3xl"
              >

                {step.icon}

              </div>







              {/* Title */}


              <h3 className="
              mt-6
              text-xl
              font-bold
              text-gray-900"
              >

                {step.title}

              </h3>







              {/* Description */}


              <p className="
              mt-3
              text-gray-600
              leading-7"
              >

                {step.description}

              </p>





            </motion.div>


          ))}




        </div>




      </div>




    </section>

  );

}


export default HowItWorks;
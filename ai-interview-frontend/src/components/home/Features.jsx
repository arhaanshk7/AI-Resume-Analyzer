import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaBolt
} from "react-icons/fa";

function Features() {


  const features = [
    {
      icon: <FaRobot />,
      title: "AI Mock Interviews",
      description:
        "Practice real interview scenarios with an AI interviewer and improve your confidence."
    },

    {
      icon: <FaFileAlt />,
      title: "Resume Analysis",
      description:
        "Upload your resume and receive AI-powered feedback, ATS score, and improvement suggestions."
    },

    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      description:
        "Track your interview scores, progress, strengths, and areas that need improvement."
    },

    {
      icon: <FaBolt />,
      title: "Instant Feedback",
      description:
        "Get immediate AI feedback after every answer to improve faster."
    }

  ];



  return (

    <section
      id="features"
      className="
      relative
      py-24
      bg-white
      overflow-hidden"
    >



      {/* Background Glow */}

      <div className="
      absolute
      top-20
      left-10
      w-72
      h-72
      bg-purple-200
      rounded-full
      blur-3xl
      opacity-30
      ">
      </div>





      <div className="
      max-w-7xl
      mx-auto
      px-6
      lg:px-10
      relative
      ">



        {/* Section Heading */}


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
          text-gray-900
          ">

            Why Choose{" "}

            <span className="text-purple-600">
              AI Interview?
            </span>


          </h2>



          <p className="
          mt-5
          text-lg
          text-gray-600
          ">

            Improve your interview preparation with AI-powered
            analysis, personalized feedback, and intelligent insights.

          </p>


        </motion.div>







        {/* Feature Cards */}


        <div className="
        mt-16
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">



          {features.map((feature,index)=>(


            <motion.div

              key={index}


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
                duration:0.5,
                delay:index * 0.15
              }}


              whileHover={{
                y:-10
              }}


              className="
              bg-white
              border
              border-gray-100
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition
              duration-300
              "

            >



              {/* Icon */}


              <div className="
              w-14
              h-14
              flex
              items-center
              justify-center
              rounded-2xl
              bg-purple-100
              text-purple-600
              text-2xl
              ">

                {feature.icon}

              </div>






              {/* Title */}

              <h3 className="
              mt-6
              text-xl
              font-bold
              text-gray-900
              ">

                {feature.title}

              </h3>






              {/* Description */}

              <p className="
              mt-3
              text-gray-600
              leading-7
              ">

                {feature.description}

              </p>



            </motion.div>


          ))}



        </div>



      </div>



    </section>

  );

}


export default Features;
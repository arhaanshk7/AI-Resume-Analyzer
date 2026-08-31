import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRobot,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-purple-100 mt-24 ">

      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white text-xl">

                <FaRobot />

              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                AI Interview
              </h2>

            </div>

            <p className="mt-6 text-gray-600 leading-7">

              Helping developers prepare smarter with
              AI-powered resume analysis, realistic mock
              interviews and personalized career guidance.

            </p>

          </motion.div>





          {/* Product */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-lg font-bold text-gray-900">
              Product
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-purple-600 cursor-pointer transition">
                Resume Analyzer
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                AI Mock Interview
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                Dashboard
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                Analytics
              </li>

            </ul>

          </motion.div>





          {/* Resources */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="text-lg font-bold text-gray-900">
              Resources
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-purple-600 cursor-pointer transition">
                Documentation
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                FAQs
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                Blog
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                Contact
              </li>

            </ul>

          </motion.div>





          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3 className="text-lg font-bold text-gray-900">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-purple-600 cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-purple-600 cursor-pointer transition">
                Terms & Conditions
              </li>

            </ul>

          </motion.div>

        </div>





        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-purple-100 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center md:text-left">

            © 2026 AI Interview. All Rights Reserved.

          </p>





          <div className="flex gap-5 text-2xl">

            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-purple-600 transition"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
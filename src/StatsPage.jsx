import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

// Stats/Info Page Component
const StatsPage = ({ darkMode }) => {
  return (
    <section id="stats" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Overview
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A quick look at my journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>3+</div>
              <div className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>6+</div>
              <div className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</div>
            </motion.div>
          </div>

          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
            } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h3>
            <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm passionate about creating innovative solutions that bridge the gap between 
              artificial intelligence and user experience. Currently exploring machine learning, 
              full-stack development, and mobile app creation.
            </p>
            
            {/* Contact Info */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Available for opportunities</div>
              </div>
              <div className="flex space-x-3">
                <motion.a
                  href="https://github.com/YashShinde6-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yash-naresh-shinde-ab1012332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
            } backdrop-blur-sm hover:shadow-lg transition-all duration-300 text-center`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              AI Development
            </h4>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Machine learning models and intelligent solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
            } backdrop-blur-sm hover:shadow-lg transition-all duration-300 text-center`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">FS</span>
            </div>
            <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Full Stack
            </h4>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              End-to-end web application development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
            } backdrop-blur-sm hover:shadow-lg transition-all duration-300 text-center`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">MB</span>
            </div>
            <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Mobile Apps
            </h4>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Android development with modern frameworks
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsPage;
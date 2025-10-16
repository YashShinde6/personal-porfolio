import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

// Work Experience Section
const WorkExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      title: "Campus Ambassador",
      company: "GeeksforGeeks",
      period: "May 2025 - Present",
      location: "Remote",
      type: "work",
      color: "blue",
      achievements: [
        "Represented GeeksforGeeks on campus as a Campus Ambassador.",
        "Promoted coding culture and GfG events among peers.",
        "Organized workshops and sessions to enhance student engagement.",
        "Collaborated with the GfG team to drive outreach and participation."
      ]
    },
    {
      title: "Web Developer",
      company: "Om Sai Traders Pvt Ltd, Dhule",
      period: "Apr 2023 - May 2023",
      location: "Dhule, Maharashtra",
      type: "work",
      color: "purple",
      achievements: [
        "Worked as a Web Developer in a 6-week internship program.",
        "Developed an application using Django, Mediapipe, and SQLite.",
        "Enhanced problem-solving skills through practical implementation.",
        "Gained hands-on experience in full-stack development."
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "Unified Mentor Private Limited",
      period: "Jan 2025 - Feb 2025",
      location: "Remote",
      type: "work",
      color: "green",
      achievements: [
        "Completed a one-month remote web development internship.",
        "Designed, developed, and optimized web applications while enhancing problem-solving skills.",
        "Gained understanding of industry best practices.",
        "Worked on multiple projects using modern web technologies."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
                      } backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {exp.title}
                        </h3>
                        <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        exp.color === 'purple' ? 'from-purple-500 to-purple-600' :
                          'from-green-500 to-green-600'
                        }`}>
                        <Briefcase size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6 text-sm">
                      <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (i * 0.1) }}
                          className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${exp.color === 'blue' ? 'from-blue-500 to-blue-600' :
                            exp.color === 'purple' ? 'from-purple-500 to-purple-600' :
                              'from-green-500 to-green-600'
                            }`} />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      exp.color === 'purple' ? 'from-purple-500 to-purple-600' :
                        'from-green-500 to-green-600'
                      } flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Briefcase size={24} className="text-white" />
                  </motion.div>

                  {/* Period Label */}
                  <motion.div
                    className={`absolute ${index % 2 === 0 ? 'left-20' : 'right-20'} top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'
                      } shadow-lg whitespace-nowrap`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <span className="text-sm font-medium">{exp.period}</span>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = ({ darkMode }) => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Engineering",
      institution: "Pillai HOC College of Engineering and Technology",
      location: "Maharashtra, India",
      period: "Aug 2024 - June 2027",
      grade: "Current Student",
      color: "blue",
      achievements: [
        "Key coursework: Data Structures, Algorithms, Computer Networks, and Database Systems",
        "Participated in coding events and hackathons to improve technical proficiency",
        "Active member of technical clubs and societies"
      ]
    },
    {
      degree: "Diploma in Computer Engineering - 80.40%",
      institution: "SMDR Government Polytechnic Dhule",
      location: "Maharashtra, India",
      period: "Oct 2021 - July 2024",
      grade: "80.40%",
      color: "green",
      achievements: [
        "Received high distinction for academic performance and excellence in programming",
        "Led projects focused on practical applications of database and web technologies",
        "Consistently maintained high academic standards throughout the program"
      ]
    },
    {
      degree: "10th Grade (SSC) - 90.80%",
      institution: "Sardar G.G. High School and Junior College, Raver",
      location: "Maharashtra, India",
      period: "June 2021",
      grade: "90.80%",
      color: "red",
      achievements: [
        "Completed secondary education under Maharashtra State Board of Secondary & Higher Secondary Education",
        "Participated in state level cricket competitions and science exhibitions",
        "Received academic excellence award for outstanding performance across all subjects"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-red-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
                      } backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {edu.degree}
                        </h3>
                        <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {edu.institution}
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {edu.location}
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        edu.color === 'green' ? 'from-green-500 to-green-600' :
                          'from-red-500 to-red-600'
                        }`}>
                        <GraduationCap size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6 text-sm">
                      <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      {edu.grade !== "Current Student" && (
                        <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Award size={16} />
                          <span>{edu.grade}</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (i * 0.1) }}
                          className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${edu.color === 'blue' ? 'from-blue-500 to-blue-600' :
                            edu.color === 'green' ? 'from-green-500 to-green-600' :
                              'from-red-500 to-red-600'
                            }`} />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      edu.color === 'green' ? 'from-green-500 to-green-600' :
                        'from-red-500 to-red-600'
                      } flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    <GraduationCap size={24} className="text-white" />
                  </motion.div>

                  {/* Period Label */}
                  <motion.div
                    className={`absolute ${index % 2 === 0 ? 'left-20' : 'right-20'} top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'
                      } shadow-lg whitespace-nowrap`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <span className="text-sm font-medium">{edu.period}</span>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { WorkExperienceSection, EducationSection };
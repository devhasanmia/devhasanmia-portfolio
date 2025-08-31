import { motion } from "framer-motion";
import { GraduationCap, Calendar, Code2 } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Diploma in Engineering",
      institution: "Bangladesh Polytechnic Institute",
      duration: "2020 - 2024",
      gpa: "3.75 / 4.00",
      description:
        "Studied core engineering subjects with focus on Computer Technology. Learned practical skills in software, networking, and electronics.",
      achievements: [
        "Final Year Project on IoT & Automation",
        "Inter-Polytechnic Programming Contest (Top 5)",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Purulia Adarsha ML High School",
      duration: "2018 - 2020",
      gpa: "4.43 / 5.00",
      description:
        "Completed SSC with focus on Science. Built strong foundation in Mathematics, Physics, and Computer Studies.",
      achievements: ["School Top 10 Merit List", "Science Fair Participant"],
    }
  ];

  const programmingCourses = [
    {
      title: "Programming Hero Level-1",
      duration: "2021",
      details:
        "Learned fundamentals of JavaScript, ES6, and modern web development.",
    },
    {
      title: "Programming Hero Level-2",
      duration: "2025",
      details:
        "Focused on advanced React, backend with Node.js, and REST APIs.",
    },
    {
      title: "Full Stack Army - Stack Learner ",
      duration: "2024",
      details: "Full-stack MERN development with real-life projects.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-600 dark:border-purple-500 ml-6 space-y-12 mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <span className="absolute -left-6 top-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5 text-white" />
              </span>

              {/* Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  GPA: {edu.gpa}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 uppercase tracking-wide">
                      Achievements
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="text-sm">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Programming Courses & Bootcamps
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmingCourses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.duration}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {course.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

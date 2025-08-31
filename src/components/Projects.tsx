import { motion } from "framer-motion";
import { Link } from "react-router";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";

const projectsData = [
  {
    _id: "674015a9d2c5972892e02abd",
    thumbnail:
      "https://res.cloudinary.com/ddoacwzvp/image/upload/v1732253003/Screenshot_2024-11-22_at_11-22-37_Meeting_room_booking_system_x8dzrg.png",
    title: "Meeting Room Management System",
    description:
      "A web-based application to manage and book meeting rooms with real-time availability and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "AmarPay"],
    liveLink: "https://meeting-room-five.vercel.app/",
    githubLink: "https://github.com/devhasanmia/meeting-room",
    projectType: "personal",
  },
  {
    _id: "674015a9d2c5972892e02abe",
    thumbnail:
      "https://res.cloudinary.com/deicntkum/image/upload/v1756656282/Screenshot_2025-08-31_at_22-02-05_Digital_Wallet_gx0pco.png",
    title: "Digital Wallet Platform",
    description: `A modern, secure, and user-friendly Digital Wallet System frontend (similar to bKash/Nagad), built with React, Redux Toolkit, RTK Query, and Tailwind CSS.
This application provides a role-based dashboard experience for Users, Agents, and Admins, with seamless API integration and responsive UI.`,
    technologies: ["React", "Express", "MongoDB", "Mongoose", "Redux"],
    liveLink: "https://digital-wallet-dev.netlify.app//",
    githubLink: "https://github.com/devhasanmia/digital-wallet",
    projectType: "Personal",
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-700 dark:text-gray-200 text-gray-700 text-sm font-medium rounded-full">
                    {project.projectType}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>

                  <Link
                    to="#"
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

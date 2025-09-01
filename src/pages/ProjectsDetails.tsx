import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useGetSingleProjectQuery } from "../redux/features/projects/projectApi";

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: project, isLoading, isError } = useGetSingleProjectQuery(id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-xl text-gray-600 dark:text-gray-400">
                Loading project details...
            </div>
        );
    }

    if (isError || !project?.data) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-xl text-red-500 dark:text-red-400">
                <span className="mr-2">❌</span> Project not found!
            </div>
        );
    }

    const proj = project.data;

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Project Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300"
                >
                    {/* Thumbnail */}
                    <div className="relative h-96 overflow-hidden">
                        <img
                            src={proj.thumbnail}
                            alt={proj.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <div className="p-8 md:p-10 lg:p-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                            {proj.title}
                        </h1>

                        {/* Description (HTML Rendered) */}
                        <div
                            className="prose prose-lg prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-8"
                            dangerouslySetInnerHTML={{ __html: proj.description }}
                        />

                        {/* Technologies */}
                        <div className="mb-8 border-t border-b border-gray-200 dark:border-gray-700 py-6">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                Technologies Used:
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {proj.technologies.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-blue-500/10 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {proj.liveLink && (
                                <motion.a
                                    href={proj.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center gap-2 font-semibold shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </motion.a>
                            )}
                            {proj.githubLink && (
                                <motion.a
                                    href={proj.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                    Source Code
                                </motion.a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectDetails;
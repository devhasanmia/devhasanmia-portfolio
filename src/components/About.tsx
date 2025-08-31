import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'Maintainable, scalable, and efficient code adhering to best practices.',
        },
        {
            icon: Palette,
            title: 'User-Centric Design',
            description: 'Crafting intuitive and visually appealing interfaces with TailwindCSS and shadcn/ui.',
        },
        {
            icon: Zap,
            title: 'Optimized Performance',
            description: 'Ensuring fast, accessible, and reliable web applications.',
        },
    ];

    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                            Passionate MERN Stack Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                            Hello! I’m MD. Hasan Mia, a dedicated MERN Stack Developer from Natore, Bangladesh with over 4 years of professional experience. I build scalable and maintainable web applications using React, Redux Toolkit, Node.js, Express.js, MongoDB (Mongoose), PostgreSQL, and Prisma.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                            I focus on writing clean, efficient code and designing seamless, user-friendly interfaces using TailwindCSS and shadcn/ui. I’m committed to delivering high-performance applications that provide excellent user experiences.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Beyond coding, I love exploring new technologies, contributing to open source projects, and sharing knowledge with the developer community. Currently, I’m continuously learning and evolving alongside the fast-paced tech landscape.
                        </p>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
                            >
                                <div className="flex items-center space-x-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg flex items-center justify-center"
                                    >
                                        <highlight.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {highlight.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;

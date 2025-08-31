import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/devhasanmia', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/hasanmiaweb/', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://x.com/devhashmia', label: 'Twitter' },
        { icon: Mail, href: 'mailto:dev.hasanmia@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Passionate developer creating innovative solutions with modern technologies.
                            Always learning, always building.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                About
                            </a>
                            <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                Projects
                            </a>
                            <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                Skills
                            </a>
                            <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-300">+8801740398196</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-300">dev.hasanmia@gmail.com</span>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-gray-700 dark:text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                        &copy; 2024 -{new Date().getFullYear()} MD. HASAN MIA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
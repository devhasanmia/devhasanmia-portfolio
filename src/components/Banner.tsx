import { motion } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Banner = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/devhasanmia', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hasanmiaweb/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/devhashmia', label: 'Twitter' },
    { icon: Mail, href: 'mailto:dev.hasanmia@gmail.com', label: 'Email' },
  ];
  const email = 'dev.hasanmia@gmail.com';
  const location = 'Natore, Bangladesh';
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden  dark:bg-gradient-to-br dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements - Show only in dark mode */}
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-emerald-900/10 opacity-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 hidden dark:block bg-blue-600/15 rounded-full mix-blend-screen filter blur-xl opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 hidden dark:block bg-purple-600/15 rounded-full mix-blend-screen filter blur-xl opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 hidden dark:block bg-emerald-600/15 rounded-full mix-blend-screen filter blur-xl opacity-60 animate-pulse delay-2000 transform -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Profile Picture */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-700 p-1">
              <div className="absolute inset-0 rounded-full border-4 border-green-600 animate-pulse-slow z-0"></div>
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_mU6iTvJnI51qTRwy1vmExh2SmF0vwm0mW3_nSuzuNekQ=s900-c-k-c0x00ffffff-no-rj"
                alt="John Doe"
                className="w-full h-full object-cover rounded-full z-10 relative"
              />
              <span className="absolute bottom-2 right-2 block w-4 h-4 bg-green-600 rounded-full ring-2 ring-white dark:ring-gray-900 z-20"></span>
            </div>

          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              HASAN
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            className="text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I create innovative digital experiences that bridge the gap between design and technology.
            Passionate about building user-centric applications with clean code and beautiful interfaces.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer space-x-2 bg-gradient-to-r from-blue-400 to-blue-700  text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>


            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Learn More</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 text-gray-600 dark:text-gray-400">
            <p className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{email}</span>
            </p>
            <span className="hidden sm:block">|</span>
            <p>{location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

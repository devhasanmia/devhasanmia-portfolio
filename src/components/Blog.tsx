import { motion } from "framer-motion";
import { Link } from "react-router";
import { Calendar, ArrowRight, Tag } from "lucide-react";

interface BlogPost {
  _id: string;
  thumbnail: string;
  title: string;
  category: string;
  author: string;
  tags: string[];
  description: string;
  status: string;
  createdAt: string;
}

interface BlogProps {
  blogs: BlogPost[];
}

const Blog = ({ blogs }: BlogProps) => {
  return (
    <section
      id="blog"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development,
            technology trends, and best practices in software engineering.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 
                         rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                         overflow-hidden group border border-gray-200/50 dark:border-gray-700"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 
                                   text-gray-700 dark:text-gray-200 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Tags & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center space-x-1 px-2 py-1 
                                   bg-white dark:bg-gray-800 
                                   text-gray-600 dark:text-gray-300 
                                   text-xs font-medium rounded-md 
                                   border border-gray-200 dark:border-gray-600"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    to="#"
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-medium 
                               hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

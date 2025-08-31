export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenges: string[];
  solutions: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced features like real-time inventory, payment integration, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, product management, shopping cart functionality, payment processing with Stripe, order tracking, and an admin dashboard for inventory management. The platform handles thousands of products and supports multiple payment methods.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'TypeScript'],
    category: 'Full Stack',
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    featured: true,
    challenges: [
      'Handling high traffic and concurrent users',
      'Implementing secure payment processing',
      'Managing complex inventory systems',
      'Optimizing database queries for performance'
    ],
    solutions: [
      'Implemented Redis caching for session management',
      'Used Stripe for secure payment processing',
      'Created efficient database indexing strategy',
      'Added horizontal scaling with load balancers'
    ],
    features: [
      'User authentication and profiles',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard for inventory management',
      'Real-time notifications',
      'Mobile-responsive design'
    ]
  },
  {
    id: 'task-management-app',
    title: 'TaskFlow - Project Management',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive task organization.',
    longDescription: 'TaskFlow is a comprehensive project management application designed for modern teams. Built with React and real-time technologies, it provides seamless collaboration through live updates, drag-and-drop task management, team chat, file sharing, and detailed project analytics. The application supports multiple project views including Kanban boards, Gantt charts, and calendar views.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    category: 'Full Stack',
    liveUrl: 'https://taskflow-demo.com',
    githubUrl: 'https://github.com/johndoe/taskflow',
    featured: true,
    challenges: [
      'Implementing real-time collaboration features',
      'Managing complex state across multiple views',
      'Ensuring data consistency in real-time updates',
      'Creating intuitive drag-and-drop interactions'
    ],
    solutions: [
      'Used Socket.io for real-time communication',
      'Implemented Redux for state management',
      'Added optimistic updates with conflict resolution',
      'Created custom drag-and-drop components'
    ],
    features: [
      'Real-time collaboration and updates',
      'Drag-and-drop task management',
      'Multiple project views (Kanban, List, Calendar)',
      'Team chat and commenting system',
      'File uploads and sharing',
      'Project analytics and reporting',
      'Customizable workflows',
      'Mobile app with offline support'
    ]
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'An AI-powered content creation tool that helps writers and marketers generate high-quality content using advanced language models.',
    longDescription: 'A sophisticated AI content generation platform that leverages modern language models to help content creators, marketers, and writers produce high-quality content efficiently. The platform includes features for blog posts, social media content, email campaigns, and SEO-optimized articles, with customizable templates and tone adjustment.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Redis'],
    category: 'AI/ML',
    liveUrl: 'https://ai-content-demo.com',
    githubUrl: 'https://github.com/johndoe/ai-content-generator',
    featured: true,
    challenges: [
      'Integrating multiple AI model APIs',
      'Managing API rate limits and costs',
      'Ensuring content quality and relevance',
      'Building intuitive content editing interface'
    ],
    solutions: [
      'Implemented smart API rotation and caching',
      'Added usage monitoring and optimization',
      'Created content quality scoring system',
      'Built rich text editor with AI suggestions'
    ],
    features: [
      'Multiple content types (blogs, social, emails)',
      'AI-powered content suggestions',
      'Customizable templates and tones',
      'SEO optimization recommendations',
      'Content plagiarism detection',
      'Export in multiple formats',
      'Usage analytics and insights',
      'Team collaboration features'
    ]
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'A comprehensive weather dashboard with interactive maps, forecasts, and detailed analytics for weather patterns.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Weather API', 'Leaflet', 'TypeScript'],
    category: 'Data Visualization',
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    featured: false,
    longDescription: 'An advanced weather analytics platform that provides comprehensive weather data visualization and forecasting. Built with React and D3.js, it offers interactive maps, detailed charts, historical data analysis, and predictive weather patterns for multiple locations worldwide.',
    challenges: [
      'Processing large amounts of weather data',
      'Creating responsive data visualizations',
      'Implementing real-time data updates',
      'Optimizing map performance'
    ],
    solutions: [
      'Used web workers for data processing',
      'Implemented virtual scrolling for large datasets',
      'Added WebSocket connections for real-time updates',
      'Optimized map rendering with clustering'
    ],
    features: [
      'Interactive weather maps',
      'Real-time weather updates',
      'Historical data analysis',
      'Custom location tracking',
      'Weather alerts and notifications',
      'Export weather reports',
      'Multi-location comparison',
      'Mobile-responsive design'
    ]
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency portfolio tracking with advanced charts, alerts, and portfolio analytics.',
    image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Chart.js', 'WebSocket', 'Express', 'SQLite'],
    category: 'Finance',
    liveUrl: 'https://crypto-tracker-demo.com',
    githubUrl: 'https://github.com/johndoe/crypto-tracker',
    featured: false,
    longDescription: 'A sophisticated cryptocurrency portfolio management application that provides real-time price tracking, portfolio analytics, profit/loss calculations, and market insights. Features include price alerts, technical analysis charts, news integration, and comprehensive portfolio management tools.',
    challenges: [
      'Handling real-time price data streams',
      'Creating accurate portfolio calculations',
      'Managing multiple API rate limits',
      'Building responsive chart interfaces'
    ],
    solutions: [
      'Implemented efficient WebSocket connections',
      'Created robust calculation engine',
      'Added intelligent API request queuing',
      'Built custom responsive chart components'
    ],
    features: [
      'Real-time price tracking',
      'Portfolio profit/loss analysis',
      'Price alerts and notifications',
      'Technical analysis charts',
      'News and market insights',
      'Transaction history tracking',
      'Multi-currency support',
      'Export portfolio reports'
    ]
  },
  {
    id: 'blog-platform',
    title: 'Modern Blog Platform',
    description: 'A feature-rich blogging platform with content management, SEO optimization, and social sharing capabilities.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Content Management',
    liveUrl: 'https://blog-platform-demo.com',
    githubUrl: 'https://github.com/johndoe/blog-platform',
    featured: false,
    longDescription: 'A modern, full-featured blogging platform built with Next.js and MDX. Includes a rich text editor, SEO optimization, comment system, social sharing, analytics dashboard, and multi-author support. Designed for both individual bloggers and content teams.',
    challenges: [
      'Building flexible content management system',
      'Implementing SEO best practices',
      'Creating efficient content search',
      'Managing user permissions and roles'
    ],
    solutions: [
      'Used MDX for flexible content creation',
      'Implemented comprehensive SEO metadata',
      'Added full-text search with indexing',
      'Created role-based access control system'
    ],
    features: [
      'Rich text editor with MDX support',
      'SEO optimization tools',
      'Comment system and moderation',
      'Social media sharing',
      'Analytics dashboard',
      'Multi-author support',
      'Content scheduling',
      'Tag and category management'
    ]
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-react-patterns',
    title: 'Modern React Patterns for Scalable Applications',
    excerpt: 'Exploring advanced React patterns and best practices for building maintainable and scalable applications in 2025.',
    content: `
# Modern React Patterns for Scalable Applications

As React continues to evolve, new patterns and best practices emerge that help us build more maintainable and scalable applications. In this comprehensive guide, we'll explore the most effective patterns for modern React development.

## Component Composition Patterns

### Compound Components

Compound components allow you to create flexible and reusable component APIs:

\`\`\`jsx
const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};
\`\`\`

### Render Props vs Custom Hooks

While render props were popular, custom hooks now provide a cleaner way to share stateful logic:

\`\`\`jsx
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(prev => !prev), []);
  return [value, toggle];
};
\`\`\`

## State Management Evolution

### Context + Reducer Pattern

For complex state management without external libraries:

\`\`\`jsx
const AppStateContext = createContext();
const AppDispatchContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
\`\`\`

## Performance Optimization

### Memoization Strategies

Understanding when and how to use React.memo, useMemo, and useCallback effectively:

- Use React.memo for expensive component renders
- useMemo for expensive calculations
- useCallback for stable function references

### Concurrent Features

Leveraging React 18's concurrent features like Suspense and useTransition for better user experience.

## Conclusion

These patterns help create more maintainable, performant, and scalable React applications. The key is understanding when to apply each pattern and not over-engineering simple solutions.
    `,
    author: 'John Doe',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Development',
    tags: ['React', 'JavaScript', 'Frontend', 'Best Practices'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 'typescript-advanced-tips',
    title: 'Advanced TypeScript Tips for Better Code Quality',
    excerpt: 'Discover advanced TypeScript techniques that will improve your code quality, catch bugs early, and enhance developer experience.',
    content: `
# Advanced TypeScript Tips for Better Code Quality

TypeScript has become an essential tool for modern web development. Beyond basic type annotations, there are advanced features that can significantly improve your code quality and developer experience.

## Conditional Types

Conditional types allow you to create types that depend on other types:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type ApiResponse<T> = T extends string ? { message: T } : { data: T };
\`\`\`

## Template Literal Types

Create dynamic string types:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ButtonEvent = EventName<'click' | 'hover'>; // 'onClick' | 'onHover'
\`\`\`

## Utility Types

Leverage built-in utility types for common transformations:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, 'password'>;
type CreateUser = Pick<User, 'name' | 'email' | 'password'>;
type UpdateUser = Partial<Omit<User, 'id'>>;
\`\`\`

## Brand Types

Create nominal types for better type safety:

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol };
type ProductId = string & { readonly brand: unique symbol };

const createUserId = (id: string): UserId => id as UserId;
\`\`\`

## Conclusion

These advanced TypeScript features help create more robust, self-documenting code that catches errors at compile time rather than runtime.
    `,
    author: 'John Doe',
    publishDate: '2025-01-10',
    readTime: '6 min read',
    category: 'Development',
    tags: ['TypeScript', 'Programming', 'Best Practices'],
    image: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 'web-performance-optimization',
    title: 'Web Performance Optimization: A Complete Guide',
    excerpt: 'Learn how to optimize your web applications for speed and efficiency with modern techniques and tools.',
    content: `
# Web Performance Optimization: A Complete Guide

Web performance is crucial for user experience and business success. Slow websites lead to higher bounce rates and lower conversion rates. Here's how to optimize your web applications.

## Core Web Vitals

Understanding and optimizing the three Core Web Vitals:

### Largest Contentful Paint (LCP)
- Optimize images and videos
- Minimize render-blocking resources
- Use efficient loading strategies

### First Input Delay (FID)
- Minimize JavaScript execution time
- Use web workers for heavy computations
- Implement code splitting

### Cumulative Layout Shift (CLS)
- Set size attributes for images and videos
- Avoid inserting content above existing content
- Use CSS Grid and Flexbox properly

## Image Optimization

\`\`\`jsx
// Use next/image for automatic optimization
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority
  placeholder="blur"
/>
\`\`\`

## Code Splitting

Implement route-based and component-based code splitting:

\`\`\`jsx
const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Caching Strategies

- Use HTTP caching headers
- Implement service workers
- Leverage CDN caching
- Use browser caching effectively

## Conclusion

Performance optimization is an ongoing process. Regular monitoring and testing are essential to maintain optimal performance as your application grows.
    `,
    author: 'John Doe',
    publishDate: '2025-01-05',
    readTime: '10 min read',
    category: 'Performance',
    tags: ['Performance', 'Web Development', 'Optimization'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

export const featuredBlogPosts = blogPosts.filter(post => post.featured);
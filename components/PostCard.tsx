import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="group relative flex flex-col bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-primary-900/10 hover:border-primary-100 dark:hover:border-primary-900 transition-all duration-300 overflow-hidden" data-aos="fade-up">
      <Link to={`/post/${post.id}`} className="absolute inset-0 z-0">
        <span className="sr-only">View Post</span>
      </Link>
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image || "/images/blog/default-post.png"} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <div className="p-6 flex flex-col h-full z-10 pointer-events-none relative">
        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date} className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </time>
          <span className="flex items-center">
             <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-dark-muted mb-6 flex-grow line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {post.tags.map(tag => (
            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article 
      className="group relative flex flex-col bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail Placeholder (Tăng tính thị giác) */}
      <div className="h-2 bg-gradient-to-r from-primary-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col h-full">
        {/* Meta info */}
        <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
          <time dateTime={post.date} className="flex items-center">
            <CalendarIcon />
            {post.date}
          </time>
          <span className="flex items-center">
            <ClockIcon />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          <Link to={`/post/${post.id}`}>
            {/* Sử dụng pseudo-element để phủ click toàn bộ card mà không chặn tương tác text */}
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags & Action */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2 relative z-20">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Mũi tên chỉ hướng */}
          <div className="text-primary-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </article>
  );
};

// Sub-components cho Icon để code gọn hơn
const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default PostCard;

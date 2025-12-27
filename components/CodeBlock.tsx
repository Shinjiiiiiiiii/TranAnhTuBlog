import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import CodeBlock from './CodeBlock';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <div className="text-center py-20">Bài viết không tồn tại.</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      {/* Header bài viết */}
      <header className="mb-12 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs font-bold uppercase tracking-widest text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
          <span>{post.date}</span>
          <span className="mx-3">•</span>
          <span>{post.readTime} đọc</span>
        </div>
      </header>

      {/* Render nội dung động */}
      <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {post.blocks.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return (
                <h2 key={index} className="text-3xl font-bold text-gray-900 dark:text-white pt-4">
                  {block.content}
                </h2>
              );

            case 'paragraph':
              return <p key={index}>{block.content}</p>;

            case 'code':
              return (
                <CodeBlock 
                  key={index} 
                  code={block.content as string} 
                  language={block.language} 
                />
              );

            case 'list':
              return (
                <ul key={index} className="list-none space-y-4 ml-4">
                  {(block.content as string[]).map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-3 mt-1.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              );

            case 'tip':
              return (
                <div key={index} className="p-6 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl italic">
                  <span className="font-bold text-amber-600 dark:text-amber-400 not-italic block mb-2 uppercase tracking-wider text-sm">
                    💡 Mẹo nhỏ:
                  </span>
                  {block.content}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </article>
  );
};

export default BlogPostDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import { blogPosts } from "../data/posts";
import { BlogPost } from "../types";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === id);
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} | Nhật Cường Dev`;
      window.scrollTo(0, 0);
    } else {
      document.title = "Không tìm thấy trang | Nhật Cường Dev";
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          404 - Không tìm thấy bài viết
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          Có vẻ như bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30"
        >
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      {/* Header Post */}
      <div className="mb-12 text-center max-w-3xl mx-auto" data-aos="fade-up">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-100 dark:border-primary-900/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm font-medium space-x-4">
          <time dateTime={post.date} className="flex items-center">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {post.date}
          </time>
          <span>•</span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readTime} đọc
          </span>
          <span>•</span>
          <span className="flex items-center">
            <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold mr-1.5">
              C
            </div>
            Bởi Nhật Cường Dev
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p
          className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-medium italic border-l-4 border-primary-500 pl-6 bg-gray-50 dark:bg-gray-800/50 py-4 rounded-r-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {post.excerpt}
        </p>

        {post.blocks.map((block, index) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={index}
                  className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white flex items-center group cursor-pointer scroll-mt-24"
                  id={`heading-${index}`}
                  data-aos="fade-up"
                >
                  <span className="text-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    #
                  </span>
                  {block.content}
                </h2>
              );
            case "paragraph":
              return (
                <p
                  key={index}
                  className="mb-6 leading-relaxed text-lg"
                  data-aos="fade-up"
                >
                  {block.content}
                </p>
              );
            case "code":
              return (
                <div key={index} className="my-8" data-aos="fade-up">
                  <CodeBlock
                    code={block.content as string}
                    language={block.language}
                  />
                </div>
              );
            case "list":
              return (
                <ul
                  key={index}
                  className="space-y-3 mb-8 ml-2"
                  data-aos="fade-up"
                >
                  {(block.content as string[]).map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-primary-500 mr-3"></span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case "tip":
              return (
                <div
                  key={index}
                  className="my-8 p-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/50 rounded-2xl flex items-start space-x-4 shadow-sm"
                  data-aos="fade-up"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-green-800 dark:text-green-200 text-lg font-medium pt-1">
                    {block.content}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <Link
          to="/"
          className="inline-flex items-center text-gray-500 hover:text-primary-600 font-medium transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Quay lại danh sách
        </Link>
        <div className="flex space-x-2">
          {/* Share buttons placeholder */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span className="sr-only">Share</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostPage;

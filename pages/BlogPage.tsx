import React from "react";
import PostCard from "../components/PostCard";
import { blogPosts } from "../data/posts";
import usePageTitle from "../hooks/usePageTitle";

const BlogPage: React.FC = () => {
  usePageTitle("Blog");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tổng hợp tất cả bài viết về lập trình, công nghệ và chia sẻ kinh
          nghiệm của mình.
        </p>
      </div>

      <div
        className="flex items-end justify-between mb-10 border-b border-gray-200 dark:border-gray-800 pb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Danh sách bài viết
          </h2>
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium">
          {blogPosts.length} bài viết
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={post.id} data-aos="fade-up" data-aos-delay={index * 50}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

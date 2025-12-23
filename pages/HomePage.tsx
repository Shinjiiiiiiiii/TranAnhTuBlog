import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { blogPosts } from "../data/posts";
import usePageTitle from "../hooks/usePageTitle";

const HomePage: React.FC = () => {
  usePageTitle("Nhật Cường Dev | JavaScript Tech Blog");

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section
        className="text-center py-20 px-4 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-card/30 rounded-3xl mx-4 sm:mx-0"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Học{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 animate-gradient">
            JavaScript
          </span>{" "}
          không khó.
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Chào bạn, mình là{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Nhật Cường Dev
          </span>
          . Blog này là nơi mình chia sẻ những kinh nghiệm thực chiến về JS,
          giúp bạn đi từ Zero đến Hero.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#posts"
            className="px-8 py-4 rounded-full bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-600/40"
          >
            Bắt đầu đọc
          </a>
          <Link
            to="/about#contact"
            className="px-8 py-4 rounded-full bg-white text-gray-800 border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-sm"
          >
            Liên hệ
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        id="posts"
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-12"
        data-aos="fade-up"
      >
        <div className="flex items-end justify-between mb-10 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bài viết mới nhất
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Cập nhật kiến thức mới mỗi tuần
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium">
            {blogPosts.length} bài viết
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {blogPosts.slice(0, 6).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 md:text-lg md:px-10 transition-colors shadow-md hover:shadow-lg"
          >
            Xem tất cả bài viết
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

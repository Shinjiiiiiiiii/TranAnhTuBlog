import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { blogPosts } from "../data/posts";
import usePageTitle from "../hooks/usePageTitle";

const HomePage: React.FC = () => {
  usePageTitle("JavaScript Tech Blog");

  return (
    <div className="space-y-20 animate-fade-in mb-20">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-center py-24 px-6 bg-white dark:bg-dark-card/20 rounded-[3rem] border border-gray-100 dark:border-white/5 mx-4 sm:mx-0 shadow-2xl shadow-gray-200/50 dark:shadow-none"
        data-aos="fade-up"
      >
        {/* Decorative background element - Tạo điểm nhấn ánh sáng */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from)_0%,transparent_70%)] from-primary-500/10 via-transparent to-transparent pointer-events-none" />

        <h1
          className="relative text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 leading-[1.1]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Cách Học{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-600 animate-gradient">
            JavaScript
          </span>{" "}
          <br className="hidden md:block" /> mà không thấy "khổ sở".
        </h1>
        
        <p
          className="relative text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 font-medium"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Chào các bạn, mình là{" "}
          <span className="text-primary-600 dark:text-primary-400 font-bold underline decoration-primary-500/30 decoration-4 underline-offset-4">
            Trần Anh Tú
          </span>
          . Đây là Blog chia sẻ hành trình và kinh nghiệm học IT của mình, 
          mong là sẽ giúp các bạn tiến xa hơn trên con đường lập trình.
        </p>

        <div
          className="relative flex flex-col sm:flex-row justify-center items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#posts"
            className="group px-10 py-4 rounded-2xl bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 hover:-translate-y-1 hover:shadow-primary-600/50"
          >
            Bắt đầu đọc ngay
          </a>
          <Link
            to="/about#contact"
            className="px-10 py-4 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-700 font-bold text-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:-translate-y-1"
          >
            Liên hệ
          </Link>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section
        id="posts"
        className="max-w-7xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
      >
        {/* Header của phần bài viết */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-100 dark:border-gray-800 pb-8">
          <div className="relative pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-600 rounded-full" />
            <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Bài viết mới nhất
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg font-medium">
              Cập nhật kiến thức mới mỗi tuần cùng Tú
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 w-fit">
             <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
             </span>
             <span className="text-gray-700 dark:text-gray-300 font-bold text-sm tracking-wide">
                {blogPosts.length} BÀI VIẾT
             </span>
          </div>
        </div>

        {/* Grid hiển thị danh sách bài viết */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {blogPosts.slice(0, 6).map((post) => (
            <div key={post.id} className="transition-transform duration-300 hover:-translate-y-2">
               <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Nút Xem tất cả */}
        <div className="text-center">
          <Link
            to="/blog"
            className="group relative inline-flex items-center px-12 py-4 overflow-hidden font-bold text-white bg-gray-900 dark:bg-primary-600 rounded-2xl hover:bg-primary-700 transition-all shadow-xl shadow-gray-900/20 dark:shadow-primary-600/20"
          >
            <span className="relative z-10">Xem tất cả bài viết</span>
            <svg
              className="relative z-10 ml-3 w-6 h-6 transition-transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
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

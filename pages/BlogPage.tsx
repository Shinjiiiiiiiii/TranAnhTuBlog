import React from "react";
import PostCard from "../components/PostCard";
import { blogPosts } from "../data/posts";
import usePageTitle from "../hooks/usePageTitle";

const BlogPage: React.FC = () => {
  usePageTitle("Blog Cá Nhân | Trần Anh Tú");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 animate-fade-in space-y-16">
      {/* Header Section - Thiết kế tối giản nhưng mạnh mẽ */}
      <header className="relative py-12 text-center" data-aos="fade-down">
        {/* Decorative Element: Chữ Blog làm nền mờ phía sau */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-9xl md:text-[12rem] font-black text-gray-100 dark:text-white/5 select-none -z-10 pt-4">
          BLOG
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight uppercase">
          Tất cả bài viết
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed italic">
          "Nơi mình lưu trữ kiến thức và hành trình chinh phục thế giới dòng lệnh."
        </p>
      </header>

      {/* Stats & Filter Bar */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 dark:border-gray-800 pb-8"
        data-aos="fade-up"
      >
        <div className="relative pl-5">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Thư viện kiến thức
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-widest mt-1">
            Explore my insights
          </p>
        </div>

        <div className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:border-primary-500">
           <span className="text-sm font-black text-primary-600 dark:text-primary-400">
             TOTAL:
           </span>
           <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">
             {blogPosts.length}
           </span>
           <span className="text-sm font-bold text-gray-400 uppercase">
             Posts
           </span>
        </div>
      </div>

      {/* Blog Grid - Hiệu ứng hiển thị mượt mà */}
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            data-aos="fade-up" 
            data-aos-delay={index * 50}
            className="group"
          >
            {/* Bọc PostCard để thêm hiệu ứng hover toàn thẻ nếu cần */}
            <div className="transition-transform duration-500 group-hover:-translate-y-3">
              <PostCard post={post} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer mờ của trang Blog */}
      <div className="pt-20 text-center border-t border-gray-100 dark:border-gray-800">
        <p className="text-gray-400 dark:text-gray-600 font-medium tracking-wide italic">
          Đang cập nhật thêm nhiều nội dung thú vị...
        </p>
      </div>
    </div>
  );
};

export default BlogPage;

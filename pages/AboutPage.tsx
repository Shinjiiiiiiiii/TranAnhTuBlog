import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import { projects } from "../data/projects";

const AboutPage: React.FC = () => {
  usePageTitle("Về mình | Nhật Cường Dev");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in space-y-12">
      {/* Intro */}
      <section className="text-center space-y-6" data-aos="fade-up">
        <img
          src="/avatar.png"
          alt="Nhật Cường Dev"
          className="w-48 h-auto rounded-2xl mx-auto shadow-lg ring-4 ring-white dark:ring-dark-bg object-cover"
        />
        <h1
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Nhật Cường Dev
        </h1>
        <div
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
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
            </svg>{" "}
            12/08/2004
          </span>
          <span className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            Phú Yên
          </span>
        </div>
        <p
          className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Chào mừng bạn đến với blog của mình! Mình là Cường, một lập trình viên
          trẻ với niềm đam mê cháy bỏng dành cho công nghệ. Sinh ra và lớn lên
          tại mảnh đất Phú Yên đầy nắng và gió, mình mang trong mình sự kiên trì
          và khát khao chinh phục những thử thách mới trong thế giới lập trình.
        </p>
      </section>

      {/* Skills */}
      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          Kỹ năng công nghệ
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              name: "JavaScript",
              color:
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
            },
            {
              name: "React",
              color:
                "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
            },
            {
              name: "HTML & CSS",
              color:
                "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
            },
            {
              name: "Node.js",
              color:
                "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
            },
            {
              name: "MongoDB",
              color:
                "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
            },
            {
              name: "Python",
              color:
                "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
            },
            {
              name: "Java",
              color:
                "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
            },
            {
              name: "C / C++",
              color:
                "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
            },
            {
              name: "Unreal Engine 5",
              color:
                "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
            },
          ].map((skill, index) => (
            <div
              key={skill.name}
              className={`px-4 py-3 rounded-xl font-medium text-center ${skill.color} border border-transparent hover:scale-105 transition-transform cursor-default shadow-sm`}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          Dự án cá nhân
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block group bg-white dark:bg-dark-card rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${project.color}`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-400 group-hover:text-primary-500 transition-colors">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Sở thích & Đam mê
        </h2>
        <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
          <ul className="grid sm:grid-cols-2 gap-6">
            <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl shrink-0">
                🎮
              </span>
              <div>
                <span className="block font-bold text-gray-900 dark:text-white mb-1">
                  Chơi Game
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Giải trí và tìm kiếm nguồn cảm hứng sáng tạo từ thế giới ảo.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl shrink-0">
                📚
              </span>
              <div>
                <span className="block font-bold text-gray-900 dark:text-white mb-1">
                  Đọc truyện
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Thả hồn vào những câu chuyện thú vị và những thế giới giả
                  tưởng.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-2xl shrink-0">
                🎬
              </span>
              <div>
                <span className="block font-bold text-gray-900 dark:text-white mb-1">
                  Xem phim
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Học hỏi cách kể chuyện và tận hưởng nghệ thuật điện ảnh.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl shrink-0">
                ✈️
              </span>
              <div>
                <span className="block font-bold text-gray-900 dark:text-white mb-1">
                  Du lịch
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Xách balo lên và đi, khám phá những vùng đất và văn hóa mới.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CV Section */}
      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Hồ sơ cá nhân (CV)
        </h2>
        <div className="bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-primary-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <svg
                  className="w-8 h-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tải xuống CV của mình
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  Xem chi tiết về kinh nghiệm, kỹ năng và thành tích của mình qua CV chuyên nghiệp.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/Dao-Nhat-Cuong-full stack.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Tải xuống
              </a>
              <a
                href="/Dao-Nhat-Cuong-full stack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Xem online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Liên hệ
        </h2>
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            {/* Facebook */}
            <div
              className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                  Facebook
                </h3>
                <a
                  href="https://www.facebook.com/NhatCuong1208/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  NhatCuong1208
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                  Số điện thoại
                </h3>
                <a
                  href="tel:0824503820"
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  0824503820
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow overflow-hidden">
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                  Email
                </h3>
                <a
                  href="mailto:daonhatcuong2004@gmail.com"
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
                >
                  daonhatcuong2004@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div
              className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-white group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                  GitHub
                </h3>
                <a
                  href="https://github.com/Dex-NCuong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Dex-NCuong
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg transform hover:scale-[1.02] transition-transform">
        <blockquote className="text-xl italic font-medium opacity-90 relative">
          <span className="text-4xl absolute -top-4 -left-2 opacity-50">"</span>
          Code không chỉ là công việc, nó là cách mình giao tiếp với thế giới và
          hiện thực hóa những ý tưởng.
          <span className="text-4xl absolute -bottom-8 -right-2 opacity-50">
            "
          </span>
        </blockquote>
      </section>
    </div>
  );
};

export default AboutPage;

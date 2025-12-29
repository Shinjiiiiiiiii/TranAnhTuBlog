import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import usePageTitle from "../hooks/usePageTitle";

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  usePageTitle(project ? `${project.name} | Nhật Cường Dev` : "Dự án");

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Không tìm thấy dự án
        </h1>
        <Link
          to="/projects"
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          ← Quay lại danh sách dự án
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      {/* Back Button */}
      <Link
        to="/about"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
        data-aos="fade-right"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Quay lại
      </Link>

      {/* Project Header */}
      <div className="mb-8" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {project.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {project.shortDesc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm font-medium ${project.color}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
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
            {project.date}
          </span>
        </div>
      </div>

      {/* Project Description */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
        dangerouslySetInnerHTML={{ __html: project.fullDesc }}
      />

      {/* Project Links */}
      {project.links.length > 0 && (
        <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Liên kết
          </h3>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                {link.type === "github" && (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {link.type === "demo" && (
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
                {link.type === "drive" && (
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.01 1.485c-.276 0-.556.063-.815.19l-8.01 4.62c-.519.3-.835.86-.835 1.48v9.24c0 .62.316 1.18.835 1.48l8.01 4.62c.518.3 1.112.3 1.63 0l8.01-4.62c.519-.3.835-.86.835-1.48v-9.24c0-.62-.316-1.18-.835-1.48l-8.01-4.62c-.259-.127-.539-.19-.815-.19zm0 2.58l6.795 3.925-6.795 3.925-6.795-3.925 6.795-3.925zm-7.815 6.61l6.815 3.935v7.85l-6.815-3.935v-7.85zm9.63 0v7.85l6.815 3.935v-7.85l-6.815-3.935z" />
                  </svg>
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
